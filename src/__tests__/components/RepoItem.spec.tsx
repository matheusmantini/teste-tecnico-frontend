import { render, screen, fireEvent } from "@testing-library/react";
import { useLayout } from "@/context/LayoutContext";
import { iRepo } from "@/types";
import { RepoItem } from "@/components/RepoItem";

jest.mock("@/context/LayoutContext", () => ({
  useLayout: jest.fn(),
}));

const mockRepo: iRepo = {
  id: 1,
  name: "test-repo",
  description: "Test repository description",
  html_url: "https://github.com/test/repo",
  language: "JavaScript",
  updated_at: "2023-01-01T00:00:00Z",
};

const mockColors = {
  JavaScript: { color: "#f1e05a" },
};

describe("RepoItem Component", () => {
  const mockHandleToggleFavorite = jest.fn();

  beforeEach(() => {
    (useLayout as jest.Mock).mockImplementation(() => ({
      favorites: [],
      handleToggleFavorite: mockHandleToggleFavorite,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders repository information correctly", () => {
    render(<RepoItem repo={mockRepo} colors={mockColors} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByText(mockRepo.name)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.description!)).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  it("should toggle favorite status when button is clicked", () => {
    render(<RepoItem repo={mockRepo} colors={mockColors} />);

    const favoriteButton = screen.getByRole("button", {
      name: /favoritar repositório/i,
    });
    fireEvent.click(favoriteButton);

    expect(mockHandleToggleFavorite).toHaveBeenCalledWith(mockRepo);
  });

  it("should have correct link attributes", () => {
    render(<RepoItem repo={mockRepo} colors={mockColors} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockRepo.html_url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
