import { render,screen, } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test("we have a heading or not",()=>{
render(<Contact/>);

const heading=screen.getByRole("heading");

expect(heading).toBeInTheDocument();

})

test("we have a submit button or not",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button");

    expect(button).toBeInTheDocument();
})