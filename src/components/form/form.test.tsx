import { render, screen } from "@testing-library/react";
import { Form } from "./form";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  test("renders all form fields", () => {
    render(<Form />);

    // First Name
    expect(screen.getByLabelText("FirstName")).toBeInTheDocument();

    // Last Name
    expect(screen.getByLabelText("LastName")).toBeInTheDocument();

    // Gender Radio Buttons
    expect(screen.getByRole("radio", { name: "Male" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Female" })).toBeInTheDocument();

    //button
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  test("Allows user to type into inputs", async () => {
    render(<Form />);

    const firstNameInput = screen.getByLabelText("FirstName");
    await userEvent.type(firstNameInput, "Ajay");

    const lastNameInput = screen.getByLabelText("LastName");
    await userEvent.type(lastNameInput, "Balaraman");

    expect(firstNameInput).toHaveValue("Ajay");
    expect(lastNameInput).toHaveValue("Balaraman");
  });

  test("Allows user to select gender", async () => {
    render(<Form />);

    const maleRadioButton = screen.getByRole("radio", { name: "Male" });
    const femaleRadioButton = screen.getByRole("radio", { name: "Female" });

    await userEvent.click(maleRadioButton);

    expect(maleRadioButton).toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();
  });

  test("Shows success message on valid submission", async () => {
    render(<Form />);

    const firstNameInput = screen.getByLabelText("FirstName");
    const lastNameInput = screen.getByLabelText("LastName");
    const maleRadioButton = screen.getByRole("radio", { name: "Male" });

    await userEvent.type(firstNameInput, "Ajay");
    await userEvent.type(lastNameInput, "Balaraman");
    await userEvent.click(maleRadioButton);

    expect(firstNameInput).toHaveValue("Ajay");
    expect(lastNameInput).toHaveValue("Balaraman");
    expect(maleRadioButton).toBeChecked();

    const submitBtnElement = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitBtnElement);

    expect(screen.getByText("Form submitted")).toBeInTheDocument();
    // expect(screen.getByText("All fields are required")).toBeInTheDocument();
  });

  //   test("Verify FirstName is Required", async () => {
  //     render(<Form />);
  //     const user = userEvent.setup();

  //     // Click submit WITHOUT typing anything
  //     await user.click(screen.getByRole("button", { name: /submit/i }));

  //     // Expect error message
  //     expect(screen.getByText(/FirstName is required/i)).toBeInTheDocument();
  //   });

  test("form reset", async () => {
    render(<Form />);
    const user = userEvent.setup();
    // Type values
    await user.type(screen.getByLabelText("FirstName"), "Ajay");
    await user.type(screen.getByLabelText("LastName"), "Kumar");
    await user.click(screen.getByRole("radio", { name: "Male" }));

    const submitElement = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitElement);

    // Expect fields to reset
    expect(screen.getByLabelText("FirstName")).toHaveValue("");
    expect(screen.getByLabelText("LastName")).toHaveValue("");
    expect(screen.getByRole("radio", { name: "Male" })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "Female" })).not.toBeChecked();
  });

  test("disable Button", async () => {
    render(<Form />);

    const user = userEvent.setup();

    const buttonElement = screen.getByRole("button", { name: /submit/i });

    expect(buttonElement).toBeDisabled();

    await user.type(screen.getByLabelText("FirstName"), "Ajay");
    await user.type(screen.getByLabelText("LastName"), "Balaraman");
    await user.click(screen.getByRole("radio", { name: "Male" }));

    // const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeEnabled();
  });

  //The Country select box is present
  test("The Country select box is present", async () => {
    render(<Form />);
    const user = userEvent.setup();

    const CountryElement = screen.getByRole("combobox");

    expect(CountryElement).toBeInTheDocument();

    //Selecting “India” shows the State field
    await user.selectOptions(CountryElement, "India");

    const StateElement = screen.getByRole("textbox", { name: "State" });

    //After selecting "India" → "State" field must appear
    expect(StateElement).toBeInTheDocument();

    // typing into the State field
    await user.type(screen.getByLabelText("State"), "TamilNadu");

    //Selecting “USA” shows Zip Code field
    await user.selectOptions(CountryElement, "USA");

    const ZipCodeElement = screen.getByRole("spinbutton", { name: "ZipCode" });

    //After selecting "USA" → "Zip Code" should appear
    expect(ZipCodeElement).toBeInTheDocument();

    // typing into the Zip Code field
    await user.type(ZipCodeElement, "456784");

    //And "State" must NOT appear
    expect(StateElement).not.toBeInTheDocument();
  });
});
