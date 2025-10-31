import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./skill";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list skills", () => {
    render(<Skills skills={skills} />);
    const listenElement = screen.getAllByRole("listitem");
    expect(listenElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning is not rendered", () => {
    render(<Skills skills={skills} />);
    const startlearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startlearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();

    const startlearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );
    logRoles(view.container);
    // screen.debug();
    expect(startlearningButton).toBeInTheDocument();
  });
});
