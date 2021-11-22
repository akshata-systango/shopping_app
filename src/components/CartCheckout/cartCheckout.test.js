import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Checkout from "./index";
import { unmountComponentAtNode } from "react-dom";

describe("apply testing to the cart checkout component", () => {
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
    test("checking for labels", () => {
        render(<Checkout />);
        const filterCategory = screen.getByText("Your Name");
        expect(filterCategory).toBeInTheDocument();
    })
    test("Should have submit button :-", () => {
        render(<Checkout />);
        const nameInputElement = screen.getByPlaceholderText(/Enter Your Name/i);
        const cityInputElement = screen.getByPlaceholderText(/Enter Your City/i);
        const postalCodeInputElement = screen.getByPlaceholderText(/Enter Your postal-code/i);
        const AddressInputElement = screen.getByPlaceholderText(/Enter Your Address/i);
        const confirmButtonElement = screen.getByRole("button", { name: /Confirm/i })
        const CancelbuttonElement = screen.getByRole("button", { name: /Cancel/i })
        fireEvent.change(nameInputElement, cityInputElement, postalCodeInputElement, AddressInputElement)
        fireEvent.click(confirmButtonElement, CancelbuttonElement)
        expect(nameInputElement).toBeInTheDocument()
        expect(cityInputElement).toBeInTheDocument()
        expect(postalCodeInputElement).toBeInTheDocument()
        expect(AddressInputElement).toBeInTheDocument()
        expect(confirmButtonElement).toBeInTheDocument()
        expect(CancelbuttonElement).toBeInTheDocument()
    })
});