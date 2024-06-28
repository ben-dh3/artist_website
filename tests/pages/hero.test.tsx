import { screen, render } from "@testing-library/react";
import Hero from "../../src/pages/hero";

describe("Hero", () => {
  it("Should render hero image", () => {
    render(<Hero />);
    expect(screen.getByAltText(/hero image/i));
  });
});