import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Ajay");
    expect(nameElement4).toBeInTheDocument();

    const imageElement = screen.getByAltText("Ocean filled by Stones");
    expect(imageElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/All fields are Mandatory/i, { //textMatch Case Sensitive
      selector: "p",
    });
    // const paragraphElement = screen.getByText("All fields are Mandatory", {
    //   selector: "p",
    // });
    expect(paragraphElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    // const submitElement = screen.getByRole("submit");
    const submitElement = screen.getByRole("button", { name: "Submit" });
    expect(submitElement).toBeInTheDocument();
  });
});
