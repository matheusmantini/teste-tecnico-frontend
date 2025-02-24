import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "../../components/SearchBar";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("SearchBar", () => {
  it("should render search input with submit button", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/Buscar usuário/i);
    expect(input).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: /iniciar busca/i });
    expect(searchButton).toBeInTheDocument();
  });

  it("should call router.push with the correct value when form is submitting", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/Buscar usuário/i);
    fireEvent.change(input, { target: { value: "john_doe" } });

    const form = screen.getByRole("search");
    fireEvent.submit(form);

    expect(push).toHaveBeenCalledWith("?username=john_doe");
  });

  it("should call router.push with value without extra spaces", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/Buscar usuário/i);
    fireEvent.change(input, { target: { value: "   john_doe   " } });

    const form = screen.getByRole("search");
    fireEvent.submit(form);

    expect(push).toHaveBeenCalledWith("?username=john_doe");
  });
});
