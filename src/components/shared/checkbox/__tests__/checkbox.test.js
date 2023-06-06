import { screen, fireEvent, render } from "@testing-library/react";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";
import { Checkbox } from "../checkbox";

describe("checkbox component", () => {
  it("should render hidden checkbox, label and checkmark", async () => {
    render(<Checkbox checked={true} onChangeHandler={() => {}} />);
    const checkbox = screen.getByTestId(DATA_TEST_IDS.CHECKBOX);
    const label = screen.getByTestId(DATA_TEST_IDS.CHECKBOX_LABEL);
    const checkmark = screen.getByTestId(DATA_TEST_IDS.CHECKMARK);
    expect(checkbox).toBeInTheDocument;
    expect(label).toBeInTheDocument;
    expect(checkmark).toBeInTheDocument;
  });

  it("clicking on label should check the checkbox and call the onchange", async () => {
    const mockedOnChangeHandler = jest.fn();
    render(
      <Checkbox checked={false} onChangeHandler={mockedOnChangeHandler} />
    );
    const checkbox = screen.getByTestId(DATA_TEST_IDS.CHECKBOX);
    const label = screen.getByTestId(DATA_TEST_IDS.CHECKBOX_LABEL);

    fireEvent.click(label);

    expect(checkbox).toBeChecked;
    expect(mockedOnChangeHandler).toHaveBeenCalled();
  });
});
