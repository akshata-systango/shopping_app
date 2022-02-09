import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Checkout from "./index";

describe("Cart checkout component integration test", () => {
  beforeEach(() => {
    <Checkout />
  });

  afterEach(() => {
    cleanup()
  });

  test("Cart checkout component should exist", () => {
    expect(Checkout).toBeDefined();
  })

  test("should render input fields", () => {
    const { getAllByRole } = screen
    const input = getAllByRole('textbox')
    expect(input.length).toBe(4)
  })

  test("Should render button elements", () => {
    const { getAllByRole } = screen
    const button = getAllByRole('button');
    expect(button.length).toBe(2);

  })

  // test("Should have submit button :-", () => {
  //   const {getAllByRole} = screen
  //   const input = getAllByRole('input');
  //   expect(input.length).toBe(4);
  //   const button = getAllByRole('button');
  //   expect(button.length).toBe(2);
  //   const confirmButtonElement = screen.getByRole("button", { name: /Confirm/i })
  //   fireEvent.change(input[0])
  //   fireEvent.change(input[1])
  //   fireEvent.change(input[2])
  //   fireEvent.change(input[3])
  //   fireEvent.click(confirmButtonElement)
  //   expect(confirmButtonElement).toBeInTheDocument()
  // })
});