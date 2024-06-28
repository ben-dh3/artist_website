import { screen, render } from "@testing-library/react";
import Navbar from "../../src/components/Navbar";

describe("Navbar", () => {
  it("Should render navbar items", () => {
    render(<Navbar />);
    expect(screen.getAllByText("About Artist"));
    expect(screen.getAllByText("Shop"));
    expect(screen.getAllByText("Contact"));
  });
});