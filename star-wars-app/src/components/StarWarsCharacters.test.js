import React from "react";

import * as rtl from "@testing-library/react";

import StarWarsCharacters from "./StarWarsCharacters.js";

test("finding list of characters", async () => {
    const wrapper = rtl.render(<StarWarsCharacters />);

    const listOfCharacters = await wrapper.findAllByTitle(/character/i);

    listOfCharacters.forEach(i => {
        expect(i).toBeVisible();
    })

})

test("testing go forward button", async () => {
    const wrapper = rtl.render(<StarWarsCharacters />);

    const button = await wrapper.findByTestId('next');

    const listOfCharacters = await wrapper.findAllByTitle(/character/i);
    const listKey = listOfCharacters[0].url;

    rtl.act(() => {
        rtl.fireEvent.click(button);
    })

    const newListOfCharacters = await wrapper.findAllByTitle(/character/i);
    const newListKey = newListOfCharacters[0].url;

    console.log("New", newListKey);
    console.log("Old", listKey);

})


// Unhappy test which results in a failure because the items are visible
// test("finding list of characters", async () => {
//     const wrapper = rtl.render(<StarWarsCharacters />);

//     const listOfCharacters = await wrapper.findAllByTitle(/character/i);

//     listOfCharacters.forEach(i => {
//         expect(i).not.toBeVisible();
//     })

// })