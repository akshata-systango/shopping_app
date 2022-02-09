import { screen, render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import UserAuthentication from "../UserAuthenticationcomponent";

describe("testing the user authentication", () => {

    beforeEach(() => render(<UserAuthentication />))

    afterEach(() => {
        cleanup();
    });

    it("user authentication component should exist", () => {
        expect(UserAuthentication).toBeDefined();
    })

    it("Should render a paragraph element", () => {
        const paraElement = screen.getByRole("paragraph");
        expect(paraElement.textContent).toBe('Login');
    })

    it("render input elements", () => {
        const {getAllByRole} = screen
        const textbox = getAllByRole('textbox');
        expect(textbox.length).toBe(2)
    })

    it("should contain a buttons", () => {
        const {getAllByRole} = screen
        const button = getAllByRole('button');
        expect(button.length).toBe(2)
    })

    it('should handle submit button', () => {
        const {getAllByRole} = screen
        const button = getAllByRole('button');
        const paraElement = screen.getByRole("paragraph");
        expect(button[1]).toBeInTheDocument()
        fireEvent.click(button[1], {name: 'Create New Account'})
        waitFor(() => {
            expect(paraElement.textContent).toBe('Sign Up');
        })
    })

})

