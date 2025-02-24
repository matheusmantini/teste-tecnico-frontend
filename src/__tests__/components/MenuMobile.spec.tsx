import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import MenuMobile from "@/components/MenuMobile";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("MenuMobile", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
      query: {},
      push: jest.fn(),
    });
  });

  it("should render the mobile menu with two items", () => {
    render(<MenuMobile />);

    expect(screen.getByLabelText("Página Inicial")).toBeInTheDocument();
    expect(screen.getByLabelText("Favoritos")).toBeInTheDocument();
  });
});
