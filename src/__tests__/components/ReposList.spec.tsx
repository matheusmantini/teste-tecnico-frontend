import { render, screen } from "@testing-library/react";
import { iRepo } from "@/types";
import { RepoList } from "@/components/RepoList";

jest.mock("@/components/RepoItem", () => ({
  RepoItem: jest.fn(() => <div data-testid="repo-item" />),
}));

describe("RepoList Component", () => {
  const mockColors = {
    JavaScript: { color: "#f1e05a" },
  };

  const mockRepos: iRepo[] = [
    {
      id: 1,
      name: "test-repo-1",
      description: "Test repository 1",
      html_url: "https://github.com/test/repo-1",
      language: "JavaScript",
      updated_at: "2023-01-01T00:00:00Z",
    },
    {
      id: 2,
      name: "test-repo-2",
      description: "Test repository 2",
      html_url: "https://github.com/test/repo-2",
      language: "TypeScript",
      updated_at: "2023-02-01T00:00:00Z",
    },
  ];

  it("should render the no repositories message when repos array is empty", () => {
    render(<RepoList colors={mockColors} repos={[]} />);

    expect(
      screen.getByText("Nenhum repositório encontrado.")
    ).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should render the list of repositories when repos are provided", () => {
    render(<RepoList colors={mockColors} repos={mockRepos} />);

    expect(screen.getByText("Repositórios")).toBeInTheDocument();

    const listContainer = screen.getByRole("list");
    expect(listContainer).toBeInTheDocument();

    const repoItems = screen.getAllByTestId("repo-item");
    expect(repoItems).toHaveLength(mockRepos.length);
  });

  it("should render the correct aria-label for the list", () => {
    render(<RepoList colors={mockColors} repos={mockRepos} />);

    const listContainer = screen.getByRole("list");
    expect(listContainer).toHaveAttribute("role", "list");
  });

  it("should render the correct aria-live attribute for the no repos message", () => {
    render(<RepoList colors={mockColors} repos={[]} />);

    const noReposSection = screen.getByText(
      "Nenhum repositório encontrado."
    ).parentElement;
    expect(noReposSection).toHaveAttribute("aria-live", "polite");
  });
});
