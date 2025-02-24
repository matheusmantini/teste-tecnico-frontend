import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";

jest.mock("@/components/SearchBar", () => ({
  SearchBar: jest.fn(() => <div>Search Bar</div>),
}));

jest.mock("@/components/FavoritesButton", () => ({
  FavoritesButton: jest.fn(() => <div>Favorites Button</div>),
}));

describe("Header", () => {
  it("should render the Header with SearchBar and FavoritesButton", () => {
    render(<Header />);

    expect(screen.getByText("Search Bar")).toBeInTheDocument();

    expect(screen.getByText("Favorites Button")).toBeInTheDocument();
  });

  it("should have the correct aria-label", () => {
    render(<Header />);

    const header = screen.getByLabelText(
      "Cabeçalho com barra de pesquisa e botão de favoritos"
    );
    expect(header).toBeInTheDocument();
  });
});
