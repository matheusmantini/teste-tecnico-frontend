import SearchIcon from "@/components/icons/SearchIcon";
import { render, screen } from "@testing-library/react";

describe("SearchIcon Component", () => {
  test("should render SVG icon", () => {
    render(<SearchIcon />);

    const svgElement = screen.getByRole("img");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
