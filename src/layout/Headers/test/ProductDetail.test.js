import { screen, render, fireEvent, act } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import ProductDetail from '../ProductDetail';
import { unmountComponentAtNode } from "react-dom";

// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve({
//         id: 0, title: "mens", imgsrc: "https://firebasestorage.googleapis.com/v0/b/sho...", brand: "GAP", category: "tshirt", detail: "Men's Pullover Sweatshirt", price: 600
//     })
// }))
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

    test("alert", async () => {
        render(<ProductDetail />);
        const toastElement = screen.findByText("Review added successfully")
        expect(toastElement).not.toBeNull()
    })


    // let wrapper;
    // let users;

    // beforeEach(() => {
    //     const mockResponseData = [{id: 1}, {id: 2}, {id: 3}];
    //     users = mockResponseData.map(e => ({...e}));
    //     jest.clearAllMocks();
    //     global.fetch = jest.fn(async () => ({
    //       json: async () => mockResponseData
    //     }));
    //     wrapper = mount(<ProductDetail />);
    //   });

    //   it("renders a count of users", () => {
    //     const p = wrapper.find("p");
    //     expect(p.exists()).toBe(true);
    //     expect(p.text()).toEqual("there are 3 users");
    //   });

    // test("Should have an image tag:-", async () => {
    //     render(<ProductDetail/>);
    //     const searchedProductsAre = await screen.findAllByTestId(/productSearching/)
    //     exact(searchedProductsAre);

    // })

    // test("should render a text area" , () => {
    //     render(<ProductDetail/>);
    //     const textAreaElement = screen.getByRole('button');
    //     expect(textAreaElement) 
    // })


    // test("should render elements according the textid" , () => {
    //     render(<ProductDetail/>);
    //     const textAreaElement = screen.getByRole('button');
    //     expect(textAreaElement) 
    // })

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