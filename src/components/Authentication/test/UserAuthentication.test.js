import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import React, { useRef } from "react";
import { unmountComponentAtNode } from "react-dom";
import UserAuthentication from "../UserAuthenticationcomponent";
import { act } from "react-dom/test-utils";

describe("testing the user authentication", () => {

    beforeEach(() => render(<UserAuthentication />))
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

    it("checking p tag is available or not", () => {
        const paraElement = screen.getByRole("paragraph");
        expect(paraElement).toContainHTML("p");
    })
    it("render input elements", () => {
        const emailInputElement = screen.getByPlaceholderText(/enter email/i);
        const passwordInputElement = screen.getByPlaceholderText(/enter password/i)
        fireEvent.change(emailInputElement, { target: { value: "amandloi@gmail.com" } })
        fireEvent.change(passwordInputElement, { target: { value: "akshata004" } })
        expect(emailInputElement).toHaveAttribute('type', 'input')
        expect(emailInputElement).not.toBeNull()
        expect(passwordInputElement).not.toBeNull()
    })

    it("should contain a buttons", () => {
        const buttonElement = screen.getByTestId('login-button');
        fireEvent.click(buttonElement)
        expect(buttonElement).toBeEnabled()
    })

    it("renders with default props", () => {
        const { queryAllByText } = render(<UserAuthentication />);
        const showButtonText = queryAllByText("Create new account");
        expect(showButtonText).toBeTruthy();
    });

    
})

