import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import AboutUsPage from '../AboutUsPage';
import { unmountComponentAtNode } from "react-dom";

describe("testing for about us page", () => {
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
    test("AboutUsPage component should exist", () => {
      expect(AboutUsPage).toBeDefined();
  })

    test("should render 'who we are' as text" , () =>{
        render(<AboutUsPage/>);
        const headingElement = screen.getByText(/Who we are/i);
        expect(headingElement).toBeInTheDocument();
    })
    test("paragraph element is there or not" , () =>{
        render(<AboutUsPage/>);
        const paraElement = screen.getByTitle("para");
        expect(paraElement).toContainHTML("p");
    }) 
})

