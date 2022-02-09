import { screen, render, fireEvent, getByPlaceholderText, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchComponent from "../SearchComponent";
import { unmountComponentAtNode } from "react-dom";

describe("testing for searching Component", () => {
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

    test("SearchProduct component should exist", () => {
        expect(SearchComponent).toBeDefined();
    })


})