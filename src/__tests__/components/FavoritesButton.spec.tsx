import { FavoritesButton } from "@/components/FavoritesButton";
import { render, screen } from "@testing-library/react";

describe("FavoritesButton", () => {
  it("should render the FavoritesButton with correct text", () => {
    render(<FavoritesButton />);

    expect(screen.getByText("Favoritos")).toBeInTheDocument();
  });
});
