import React from "react";
import { render, screen } from "@testing-library/react";
import { iUserProfileProps } from "@/types";
import UserProfileDesktop from "@/components/UserProfileDesktop";

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

describe("UserProfileDesktop", () => {
  const mockUserData: iUserProfileProps["userData"] = {
    avatar_url: "https://example.com/avatar.png",
    name: "John Doe",
    login: "johndoe",
    bio: "Software Developer",
  };

  it("deve renderizar as informações do perfil do usuário corretamente", () => {
    render(<UserProfileDesktop userData={mockUserData} />);

    const avatar = screen.getByRole("img", { name: /avatar/i });
    const name = screen.getByText(mockUserData.name);
    const username = screen.getByText(`@${mockUserData.login}`);
    const bio = screen.getByText(mockUserData.bio);

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", mockUserData.avatar_url);
    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
  });
});
