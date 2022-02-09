import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../Index";
import { BrowserRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

describe("testing header component", () => {
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

    test("Header component should exist", () => {
        expect(Header).toBeDefined();
    })
    
    test("Should have an image tag", () => {
        render(<MockHeader />)
        const imageElement = screen.getAllByAltText("can't load");
        expect(imageElement);
    })
    test("Should have button tag with Install now text", () => {
        render(<MockHeader />)
        const buttonElement = screen.getByRole("button", { name: /Install now/i });
        fireEvent.click(buttonElement)
        expect(buttonElement).toBeInTheDocument();
    })
    test("Should have a paragraph tag", () => {
        render(<MockHeader />)
        // const paraElement = screen.debug(screen.getByRole("paragraph"));
        const paraElement = screen.getByRole("paragraph");
        expect(paraElement).toContainHTML("p");
    })
    test("Should have a link tag", () => {
        render(<MockHeader />)
        const linkElement = screen.getAllByRole("link");
        expect(linkElement);
    })
})