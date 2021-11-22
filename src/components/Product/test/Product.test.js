import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Products from '../Index';
import { unmountComponentAtNode } from "react-dom";

describe("Testing Product Component", () => {
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
  

  test("render all products as text", () => {
    //Arrange
    render(<Products />);
    //Act
    //Assert
    const AllProductVariable = screen.getByText(/All Products/i, {
      exact: true,
    });
    expect(AllProductVariable).toBeInTheDocument();
  });

  test("render High To Low as text", () => {
    //Arrange
    render(<Products />);
    const buttonElement = screen.getByRole('heading')
    userEvent.click(buttonElement)

    const NoOfProductCount = screen.findByText("High To Low");
    expect(NoOfProductCount)
  });

  test("render Low To High as text", () => {
    //Arrange
    render(<Products />);
    const buttonElement = screen.getByRole('heading')
    userEvent.click(buttonElement)

    const NoOfProductCount = screen.queryByText("Low To High");
    expect(NoOfProductCount)
  });

  test("testing the filtering with id", () => {
    //Arrange
    render(<Products />);
    const filterCategory = screen.getByTestId("filteringCategory");
    expect(filterCategory).toBeInTheDocument();
  });

  test("testing the filtering with queryByText", () => {
    //Arrange
    render(<Products />);
    const filterCategory = screen.queryByText("FILTERS:");
    expect(filterCategory).toBeInTheDocument();
  });

  test("testing the product count heading with getByTitle", () => {
    //Arrange
    render(<Products />);
    const headerElement = screen.getByTitle("count");
    expect(headerElement).toContainHTML("h");
  });

  test("testing the category button with getAllByRole", () => {
    //Arrange
    render(<Products />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement.length).toBe(6);
  });

  test("testing the product count heading with getAllByRole", () => {
    //Arrange
    render(<Products />);
    const filterTextButtonElement = screen.getByText(/30 Product/);
    expect(filterTextButtonElement).toContainHTML("h")
  });

  test("testing the button elements", () => {
    //Arrange
    render(<Products />);
    const filterCategory = screen.getByText(/30 Product/);
    const buttonElement = screen.getByRole("button", { name: /All/i })
    fireEvent.click(buttonElement)
    expect(filterCategory).toContainHTML("h")
  });
 
});