import { screen, render } from "@testing-library/react";
import { Text } from "../text";

describe("text component", () => {
  it("should render child string", async () => {
    const string = "test";
    render(<Text>{string}</Text>);

    const text = screen.getByText(string);

    expect(text).toBeInTheDocument;
  });
});
