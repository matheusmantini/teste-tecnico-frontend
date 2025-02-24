import UserIcon from "@/components/icons/UserIcon";
import { render, screen } from "@testing-library/react";

describe("UserIcon Component", () => {
  test("should render SVG icon", () => {
    render(<UserIcon />);

    const svgElement = screen.getByRole("img");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
