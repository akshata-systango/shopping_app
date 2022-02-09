import { screen, render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import ContactUsPage from "../ContactUsPage";
import React from "react";

describe("testing contact us page:-", () => {
    beforeEach(() => {
        const onClick= jest.fn()
        render(<ContactUsPage onClick={onClick}/>)
    });

    afterEach(() => {
        cleanup()
    });

    it("ContactUsPage component should exist", () => {
        expect(ContactUsPage).toBeDefined();
    })
    it("Should render input field", () => {
        const { getAllByRole } = screen
        const input = getAllByRole('textbox')
        expect(input.length).toBe(4)
    })
    it("Should render submit button", () => {
        const button = getByRole('button', {name: 'Submit'})
        expect(button).toBeInTheDocument()
    })
    it('Should render submit button', async () => {
        const { getByRole, getAllByRole } = screen
        const button = getByRole('button')
        const input = getAllByRole('textbox')

        expect(input.length).toBe(4)
        expect(button).toBeInTheDocument()

        fireEvent.change(input[0])
        fireEvent.change(input[1])
        fireEvent.change(input[2])
        fireEvent.change(input[3])
        fireEvent.click(button)

        await waitFor(() => {
            expect(onClick).toBeCalled()
        })
    })


});