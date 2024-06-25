import { screen, render } from "@testing-library/react";

import Hero from "../src/pages/hero/hero";

describe("Hero", () => {
  it("Should render the navbar component", () => {
    render(<Hero />);
    expect(screen.getByText("About Artist"));
    expect(screen.getByText("Shop"));
    expect(screen.getByText("Contact"));
  });
});