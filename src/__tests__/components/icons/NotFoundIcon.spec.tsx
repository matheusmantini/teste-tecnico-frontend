import NotFoundIcon from "@/components/icons/NotFoundIcon";
import { render, screen } from "@testing-library/react";

describe("NotFoundIcon Component", () => {
  test("should render SVG icon", () => {
    render(<NotFoundIcon />);

    const svgElement = screen.getByRole("img");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
