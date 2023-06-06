import { screen, fireEvent, render } from "@testing-library/react";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";
import { Card } from "../card";
import { Button } from "components/shared/index";

describe("card component", () => {
  it("should render child", async () => {
    const textInsideOfCard = "test";
    render(
      <Card onClick={() => {}}>
        <Button onClick={() => {}}>Button</Button>
      </Card>
    );
    const card = screen.getByTestId(DATA_TEST_IDS.CARD);
    const button = screen.getByTestId(DATA_TEST_IDS.BUTTON);

    expect(card).toBeInTheDocument;
    expect(button).toBeInTheDocument;
  });
});
