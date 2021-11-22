import { screen, render, fireEvent, getByPlaceholderText, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchComponent from "../SearchComponent";
import { unmountComponentAtNode } from "react-dom";

const mockedSetTodo = jest.fn()
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
    // beforeEach(() => {console.log('Running before each test')})
    // beforeAll(() => {console.log('Running once before All test')})
    // afterEach(() => {console.log('Running after each test')})
    // afterAll(() => {console.log('Running once after all test')})


    test("should have searching as title", () => {
        render(<SearchComponent />);
        const selectElement = screen.getByTitle(/searching/i);
        expect(selectElement).toBeInTheDocument();
    })

    test('Text in state is changed when button clicked', () => {
        const setSearchedResult = jest.fn()
        const { getByTitle } = render(<SearchComponent setSearchedResult={setSearchedResult} />);
        fireEvent.change(getByTitle("searching"));
        expect(setSearchedResult).not.toHaveBeenCalled();
    })

    test("should use react select" , () =>{
        const onInputChange = jest.fn()
        render(<SearchComponent onInputChange={onInputChange}/>);
        // console.log('42', JSON.parse(getByTitle))
        const searchElement = document.getElementById("react-select-4-input");
        fireEvent.click(searchElement );
        expect(searchElement).toBeInTheDocument()
    })
})