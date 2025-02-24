import HeartIcon from "@/components/icons/HeartIcon";
import { render, screen } from "@testing-library/react";

describe("HeartIcon Component", () => {
  test("should render SVG icon", () => {
    render(<HeartIcon />);

    const svgElement = screen.getByRole("img");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
