// import {render, screen} from '@testing-library/react'
// import Greet from './greet'

import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Greet from "./greet";

// test('Greet Render Correctly',() =>{
//     render(<Greet/>)
//     const textElement = screen.getByText(/hello/i)
//     expect(textElement).toBeInTheDocument()
// })

// Greet should render the text hello and if a name passed into the component
// It should render hello followed by the name

//only runs only that test.
//skip runs other than this one

describe("Greet", () => {
  test("render Correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

// describe("Nested", () => {
//   test("renders a name", () => {
//     render(<Greet name="Ajay" />);
//     const textElement = screen.getByText("Hello Ajay");
//     expect(textElement).toBeInTheDocument();
//   });
// });
