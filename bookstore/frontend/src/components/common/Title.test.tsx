import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트", () => {
  describe("Title 내용이 주어지면", () => {
    test("렌더링이 되어야 합니다.", () => {
      render(
        <BookStoreThemeProvider>
          <Title size="large">Title</Title>
        </BookStoreThemeProvider>,
      );

      expect(screen.getByText("Title")).toBeInTheDocument();
    });
  });

  describe("Size prop이 'large'일 때", () => {
    test("font-size가 '2em'으로 렌더링되어야 합니다.", () => {
      const { container } = render(
        <BookStoreThemeProvider>
          <Title size="large">Title</Title>
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ fontSize: "2em" });
    });
  });

  describe("Color prop이 'primary'일 때", () => {
    test("rgb(165, 42, 42) 색상이 적용되어야 합니다.", () => {
      const orange = "rgb(255, 88, 0)";
      const { container } = render(
        <BookStoreThemeProvider>
          <Title size="large" color="primary">
            Title
          </Title>
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ color: orange });
    });
  });
});
