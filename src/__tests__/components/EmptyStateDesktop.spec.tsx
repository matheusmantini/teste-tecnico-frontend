import EmptyStateDesktop from "@/components/EmptyStateDesktop";
import { render, screen } from "@testing-library/react";

describe("EmptyStateDesktop", () => {
  it("should render the empty state message and icon", () => {
    render(<EmptyStateDesktop />);

    const title = screen.getByText(/procure pelo nome ou nome de usuário/i);
    const description = screen.getByText(
      /encontre os repositórios de algum usuário digitando no campo acima/i
    );
    const icon = screen.getByTitle(
      /Ícone representando uma pessoa com uma lupa selecionando um usuário dentro de uma lista/i
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
