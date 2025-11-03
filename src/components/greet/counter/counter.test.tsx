import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });

    await user.click(incrementButton);
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
