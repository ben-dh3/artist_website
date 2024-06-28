import { screen, render } from "@testing-library/react";
import Marquee from "../../src/components/Marquee";

describe("Marquee", () => {
  it("Should render the given message", () => {
    render(<Marquee message="test message" />);
    expect(screen.getAllByText("test message"));
  });
});