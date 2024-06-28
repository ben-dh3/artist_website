import { screen, render } from "@testing-library/react";
import Contact from "../../src/pages/contact";

describe("Contact", () => {
  it("Should render contact form", () => {
    render(<Contact />);
    expect(screen.getByText("Contact"));
  });
});