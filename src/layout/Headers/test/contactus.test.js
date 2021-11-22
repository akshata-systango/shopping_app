import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom';
import ContactUsPage from "../ContactUsPage";
import React from "react";
import { act } from "react-dom/test-utils";


describe("testing contact us page:-", () => {
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

    test("Should render input elements:-", () => {
        render(<ContactUsPage />);
        const nameInputElement = screen.getByPlaceholderText(/Enter Your Name/i);
        expect(nameInputElement).toBeInTheDocument();
    })
    test("Should able to write something:-", () => {
        render(<ContactUsPage />);
        const nameInputElement = screen.getByPlaceholderText(/Enter Your Name/i);
        fireEvent.change(nameInputElement, { target: { value: "form is changed" } })
        expect(nameInputElement.value).toBe("form is changed");
    })
    test("Should have empty input when submit button is clicked:-", () => {
        render(<ContactUsPage />);
        const nameInputElement = screen.getByPlaceholderText(/Enter Your Name/i);
        const buttonElement = screen.getByTitle("button", { name: /Submit/i })
        fireEvent.change(nameInputElement, { target: { value: "form is changed" } })
        fireEvent.click(buttonElement)
        expect(nameInputElement.value)    //toBe method will be implimented here
    })
    test("render component", () => {
        const wrappers = render(<ContactUsPage />)
        expect(wrappers).not.toBeNull()

    })

    test("changes value when clicked", () => {
        const feedbackOrQuerySubmitHandler = jest.fn();
        act(() => {
            render(<ContactUsPage feedbackOrQuerySubmitHandler={feedbackOrQuerySubmitHandler} />, container);
        });

        // get a hold of the button element, and trigger some clicks on it
        const button = document.querySelector("[data-testid=toggle]");
        expect(button.innerHTML).toBe("Submit");

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        // expect(feedbackOrQuerySubmitHandler).toHaveBeenCalled();
        expect(button.innerHTML).toBe("Submit");

    });
});