import { screen, render, fireEvent } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import Card from "./Index";
import { unmountComponentAtNode } from "react-dom";


describe("testing the card component", ()=>{
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
    test("having heading element", ()=>{
        render(<Card/>)
        const headingElement = screen.getByTitle(/heading/i)
        expect(headingElement).toBeInTheDocument();
    })
    test("having paragraph element", ()=>{
        render(<Card/>)
        const paraElement = screen.getByTestId(/para/i)
        expect(paraElement).toContainHTML("p")
    })

  test("toastify", async () => {
       render(<Card/>);
      const toastElement =screen.findByRole("alert")
      expect(toastElement).not.toBeNull()
  })
  
//   test("changes value when clicked", () => {
//     const onToggleHandler = jest.fn();
//     act(() => {
//         render(<Card onToggleHandler={onToggleHandler} />, container);
//     });

//     // get a hold of the button element, and trigger some clicks on it
//     const button = screen.getByTitle("input")
//     expect(button.innerHTML).toBe("Submit");

//     act(() => {
//         button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     });

//     // expect(feedbackOrQuerySubmitHandler).toHaveBeenCalled();
//     expect(button.innerHTML).toBe("Submit");

// });
});