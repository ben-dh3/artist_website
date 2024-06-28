import { screen, render } from "@testing-library/react";
import About from "../../src/pages/about";

describe("About", () => {
  it("Should render about section", () => {
    render(<About />);
    expect(screen.getAllByText("Ben Duffield-Harding, an artist from Stratford-Upon-Avon and based in London, England, is a creative with a fascination with many art mediums: painting, generative with code, pixel."));
  });
});