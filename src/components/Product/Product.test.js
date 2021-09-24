import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Products from "./Index";

describe("Testing Product Component", () => {
  test("render all products as text", () => {
    //Arrange
    render(<Products />);

    //Act

    //Assert
    const AllProductVariable = screen.getByText("All Products", {
      exact: true,
    });
    expect(AllProductVariable);
  });
  
  test("render High To Low as text", () => {
    //Arrange
    render(<Products />);
    const buttonElement = screen.getByRole('heading')
    userEvent.click(buttonElement)

    const NoOfProductCount = screen.getByText("High To Low");
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
});
