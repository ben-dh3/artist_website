import { screen, render } from "@testing-library/react";
import Shop from "../../src/pages/shop";

describe("Shop", () => {
  it("Should render shop items", () => {
    render(<Shop />);
    expect(screen.getByAltText(/beach watercolour/i));
  });
});