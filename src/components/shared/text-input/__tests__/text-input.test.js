import { screen, fireEvent, render } from "@testing-library/react";
import { TextInput } from "../text-input";

describe("text input component", () => {
  it("should render text input", async () => {
    const text = "test";

    render(<TextInput text={text} onChangeHandler={() => {}} />);
    const input = screen.getByDisplayValue(text);

    expect(input).toBeInTheDocument;
    expect(input.type).toBe("text");
  });

  it("Typing in input should trigger onChange", async () => {
    const mockedOnChangeHandler = jest.fn();
    const text = "test";

    render(<TextInput text={text} onChangeHandler={mockedOnChangeHandler} />);
    const input = screen.getByDisplayValue(text);

    fireEvent.change(input, { target: { value: "smth" } });

    expect(mockedOnChangeHandler).toHaveBeenCalled();
  });
});
