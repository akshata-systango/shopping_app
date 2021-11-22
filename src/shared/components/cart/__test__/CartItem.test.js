import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import CartItems from "../CartItem";
import { unmountComponentAtNode } from "react-dom";

describe("testing the cart item component", () => {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
      });
      
      afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
      });
      
    test("should render Size as text", () => {
        render(<CartItems />);
        const praraElement = screen.getByText(/Size/i)
        expect(praraElement).toBeInTheDocument();
    });
    test("should have a button tag", () => {
        render(<CartItems />);
        const plusButtonElement = screen.getByRole("button", { name: "+" })
        fireEvent.click(plusButtonElement)
        expect(plusButtonElement).toBeInTheDocument();
    });
    test("should have a heading tag", () => {
        render(<CartItems />);
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toContainHTML("h");
    });
    // test("sending the data ", () => {
    //     render(<Cart />);
    //     const paraData = screen.getByText("Sending the data");
    //     expect(paraData).toBeInTheDocument();
    // })
});