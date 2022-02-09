import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import ProductDetail from '../ProductDetail';
import { unmountComponentAtNode } from "react-dom";


describe("testing product detail components", () => {
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

    test("ProductDetail component should exist", () => {
        expect(ProductDetail).toBeDefined();
    })

    // it('should check button is enable when size is selected', async () => {
    //     const { getByTestId } = render(<ProductDetail />);
    //     const [addToCartButton, selectElement] = await waitFor(() => {
    //         return [
    //             getByTestId('addToCart'),
    //             getByTestId('size')
    //         ];
    //     });
    //     expect(addToCartButton).toHaveProperty('disabled', true);
    //     expect(selectElement.value).not.toBeNull();
    //     expect(addToCartButton).toHaveProperty('disabled', false);

    // });

    test("should render a para tag", () => {
        render(<ProductDetail />);
        const paraElement = screen.getByRole('paragraph');
        expect(paraElement).toBeInTheDocument()
    })
    test("should render svg element", () => {
        render(<ProductDetail />);
        const svgElement = screen.getByTestId('svgele');
        expect(svgElement).toBeInTheDocument()
    })
})