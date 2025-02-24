import EmptyStateMobile from "@/components/EmptyStateMobile";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("EmptyStateMobile", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("should render the SearchBar component correctly", () => {
    render(<EmptyStateMobile />);

    expect(
      screen.getByLabelText("Buscar usuário no GitHub")
    ).toBeInTheDocument();
  });

  it("should call router.push with the correct username when the form is submitted", () => {
    render(<EmptyStateMobile />);

    const input = screen.getByPlaceholderText("Buscar usuário");
    const button = screen.getByLabelText("Iniciar busca");

    fireEvent.change(input, { target: { value: "john_doe" } });

    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("?username=john_doe");
  });
});
