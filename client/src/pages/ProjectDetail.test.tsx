import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectDetail from "./ProjectDetail";
import * as wouter from "wouter";

vi.mock("wouter", () => ({
  useLocation: vi.fn(),
}));

describe("ProjectDetail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders engajamento project details", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText("Rastreamento de Engajamento")).toBeTruthy();
    expect(screen.getByText("Análise Preditiva de Usuários")).toBeTruthy();
    expect(screen.getByText("87%")).toBeTruthy();
  });

  it("renders salesforce project details", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/salesforce",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="salesforce" />);

    expect(screen.getByText("Agente IA Salesforce")).toBeTruthy();
    expect(screen.getByText("Automação Inteligente de Atendimento")).toBeTruthy();
    expect(screen.getByText("78%")).toBeTruthy();
  });

  it("displays engajamento project highlights", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText("Acurácia")).toBeTruthy();
    expect(screen.getByText("Precisão")).toBeTruthy();
    expect(screen.getByText("F1-Score")).toBeTruthy();
    expect(screen.getByText("0.89")).toBeTruthy();
    expect(screen.getByText("0.86")).toBeTruthy();
  });

  it("displays salesforce project highlights", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/salesforce",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="salesforce" />);

    expect(screen.getByText("Taxa de Resolução")).toBeTruthy();
    expect(screen.getByText("Redução de Tempo")).toBeTruthy();
    expect(screen.getByText("Satisfação")).toBeTruthy();
    expect(screen.getByText("45%")).toBeTruthy();
    expect(screen.getByText("+23%")).toBeTruthy();
  });

  it("displays engajamento project tools", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText("Python")).toBeTruthy();
    expect(screen.getByText("Scikit-learn")).toBeTruthy();
    expect(screen.getByText("Pandas")).toBeTruthy();
    expect(screen.getByText("Jupyter Notebook")).toBeTruthy();
  });

  it("displays salesforce project tools", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/salesforce",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="salesforce" />);

    expect(screen.getByText("Salesforce")).toBeTruthy();
    expect(screen.getByText("Agentforce")).toBeTruthy();
    expect(screen.getByText("IA Generativa")).toBeTruthy();
    expect(screen.getByText("Flow Builder")).toBeTruthy();
  });

  it("displays engajamento project tags", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText("Machine Learning")).toBeTruthy();
    expect(screen.getByText("Análise Preditiva")).toBeTruthy();
  });

  it("displays salesforce project tags", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/salesforce",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="salesforce" />);

    expect(screen.getByText("CRM")).toBeTruthy();
    expect(screen.getByText("Automação")).toBeTruthy();
    expect(screen.getByText("RPA")).toBeTruthy();
  });

  it("displays back button", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText("← Ver Todos os Projetos")).toBeTruthy();
  });

  it("displays project description for engajamento", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    const descriptions = screen.getAllByText(/Projeto de análise preditiva desenvolvido durante o Data Scientist Track/);
    expect(descriptions.length > 0).toBe(true);
  });

  it("displays project description for salesforce", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/salesforce",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="salesforce" />);

    const descriptions = screen.getAllByText(/Projeto de implementação de um agente autônomo de IA/);
    expect(descriptions.length > 0).toBe(true);
  });

  it("displays Sobre o Projeto section", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText(/Sobre o Projeto/)).toBeTruthy();
  });

  it("displays Ferramentas Utilizadas section", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText(/Ferramentas Utilizadas/)).toBeTruthy();
  });

  it("displays Competências section", () => {
    vi.mocked(wouter.useLocation).mockReturnValue([
      "/projeto/engajamento",
      vi.fn(),
    ] as any);

    render(<ProjectDetail slug="engajamento" />);

    expect(screen.getByText(/Competências/)).toBeTruthy();
  });
});
