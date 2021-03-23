import { render, screen } from "@testing-library/react";

import App from "./App";
describe("App.js", () => {
  it("logo is displayed", () => {
    render(<App />);
    const logo = screen.getByAltText("logo-netflix");
    expect(logo).toBeInTheDocument();
  });

  it("6 sections displayed", () => {
    render(<App />);
    const sections = screen.getAllByTestId("movies-list");
    expect(sections.length).toEqual(6);
  });

  it("page contain 6 specific titles", () => {
    render(<App />);
    let sectionName = screen.getByText("Emissions TV");
    expect(sectionName).toBeInTheDocument();
    sectionName = screen.getByText("Séries françaises");
    expect(sectionName).toBeInTheDocument();
    sectionName = screen.getByText("Comédies");
    expect(sectionName).toBeInTheDocument();
    sectionName = screen.getByText("Nouveautés");
    expect(sectionName).toBeInTheDocument();
    sectionName = screen.getByText("Documentaires");
    expect(sectionName).toBeInTheDocument();
    sectionName = screen.getByText("Séries US");
    expect(sectionName).toBeInTheDocument();
  });
});
