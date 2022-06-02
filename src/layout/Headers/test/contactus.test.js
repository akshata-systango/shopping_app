import { screen, render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import ContactUsPage from "../ContactUsPage";
import React from "react";

describe("testing contact us page:-", () => {
    beforeEach(() => {
        render(<ContactUsPage />)
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
        const { getByRole } = screen
        const button = getByRole('button')
        expect(button).toBeInTheDocument()
    })
    it('Should render submit button', async () => {
        const onClick= jest.fn()
        const screen = render(<ContactUsPage onClick={onClick}/>)

        const button = screen.getAllByRole('button')
        const input = screen.getAllByRole('textbox')

        expect(input.length).toBe(8)
        expect(button.length).toBe(2)

        fireEvent.change(input[0], {name: 'name'}, {target: {value: 'Akshata'}})
        fireEvent.change(input[1], {name: 'email'},{target: {value: 'amandloi@gmail.com'}})
        fireEvent.change(input[2], {name: 'phone'},{target: {value: '1234567895'}})
        fireEvent.change(input[3], {name: 'message'},{target: {value: 'This is a demo'}})
        fireEvent.click(button[0])

        await waitFor(() => {
            expect(onClick).toHaveBeenCalledWith({
                name:'Akshata',
                email:'amandloi@gmail.com',
                phone:'1234567895',
                message:'This is a demo'
            })
        })
    })


});