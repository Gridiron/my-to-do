import { screen, fireEvent, render } from "@testing-library/react";
import { Button } from "../button";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";

describe("button component", () => {
  it("should render button", async () => {
    const buttonText = "test";
    render(<Button onClick={() => {}}>{buttonText}</Button>);
    const button = screen.getByTestId(DATA_TEST_IDS.BUTTON);

    expect(button).toBeInTheDocument;
    expect(buttonText).toEqual(button.textContent);
  });

  it("should handle button click", async () => {
    const mockedOnClickHandler = jest.fn();
    render(<Button onClick={mockedOnClickHandler}>Example Button</Button>);

    const button = screen.getByTestId("button");

    fireEvent.click(button);

    expect(mockedOnClickHandler).toHaveBeenCalled();
  });
});
