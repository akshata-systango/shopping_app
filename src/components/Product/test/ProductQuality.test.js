import { screen, render, fireEvent, act} from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
// import { renderHook } from '@testing-library/react-hooks';
import AddProductQuantity from "../ProductQuantityForm";
import { unmountComponentAtNode } from "react-dom";

describe("testing the productQuality component", () => {
    let container = null;
    beforeEach(() => render(<AddProductQuantity/>))
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
    test("checking for the form element ", () => {
        const formElement = screen.getByTitle(/form/i)
        expect(formElement).not.toBeNull();
        // expect(formElement).not.toBeInTheDocument();
        // expect(formElement).toContainHTML('form');
    })
    test("should have an input element", ()=>{
        const inputElement = screen.getByLabelText(/Quantity/i)
        fireEvent.change(inputElement, {target : {value : 1}})
        expect(inputElement);
    })

    // test("should render a button element", ()=>{
    //     const {getByTestId} = render(<AddProductQuantity/>)
    //     const paragraphElement = getByTestId("para")
    //     expect(paragraphElement).toHaveTextContent('Please enter a valid amount (1-5).');
    //     rerender(<AddProductQuantity min={-10}/>)
    //     expect(paragraphElement).toBeNull()
    // })

    // test("should render an error message", ()=>{
    //     const paraElement = screen.getByTitle("para")
    //     expect(paraElement);
    // })
    
    // it('should describe the quantity is valid or not', () => {
    //     const { result } = renderHook(() => AddProductQuantity());
    //     act(() => {result.current.submitHandler()})
    //     expect (result.current.amountIsValid).toBe(true);
    //   });
 
})
