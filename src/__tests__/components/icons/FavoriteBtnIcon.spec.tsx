import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteBtnIcon from "@/components/icons/FavoriteBtnIcon";

describe("FavoriteBtnIcon Component", () => {
  it("should render icon correctly as favorited", () => {
    render(<FavoriteBtnIcon isFavorite={true} />);
    const svgElement = screen.getByRole("img", {
      name: /ícone representando um coração dentro de um círculo/i,
    });

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "40");
    expect(svgElement).toHaveAttribute("height", "40");

    const circle = svgElement.querySelector("circle");
    expect(circle).toHaveAttribute("fill", "white");
    expect(circle).toHaveAttribute("stroke", "#32C0C6");

    const path = svgElement.querySelector("path");
    expect(path).toHaveAttribute("fill", "#32C0C6");
  });

  it("should render icon correctly as non favorited", () => {
    render(<FavoriteBtnIcon isFavorite={false} />);
    const svgElement = screen.getByRole("img", {
      name: /ícone representando um coração dentro de um círculo/i,
    });

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "40");
    expect(svgElement).toHaveAttribute("height", "40");

    const circle = svgElement.querySelector("circle");
    expect(circle).toHaveAttribute("fill", "#F3F3F5");
    expect(circle).toHaveAttribute("stroke", "none");

    const path = svgElement.querySelector("path");
    expect(path).toHaveAttribute("fill", "#8C8C8C");
  });

  it("should keep acessibility with the correct title", () => {
    render(<FavoriteBtnIcon isFavorite={true} />);
    const title = screen.getByTitle(
      "Ícone representando um coração dentro de um círculo"
    );
    expect(title).toBeInTheDocument();
  });
});
