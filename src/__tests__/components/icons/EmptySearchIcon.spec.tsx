import EmptySearchIcon from "@/components/icons/EmptySearchIcon";
import { render, screen } from "@testing-library/react";

describe("EmptySearchIcon Component", () => {
  test("should render SVG icon", () => {
    render(<EmptySearchIcon />);

    const svgElement = screen.getByRole("img");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
