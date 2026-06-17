import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import InteractiveTerminal from "./InteractiveTerminal";

describe("InteractiveTerminal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders terminal with header and input", () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    expect(screen.getByText("$ Bem-vindo ao Terminal de Danilo Cerqueira")).toBeTruthy();
    expect(screen.getByPlaceholderText("Digite um comando...")).toBeTruthy();
  });

  it("displays help command output", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "help" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Comandos disponíveis:")).toBeTruthy();
    });
  });

  it("displays skills command output", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "skills" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Habilidades Técnicas:")).toBeTruthy();
      expect(screen.getByText("► Power BI & DAX")).toBeTruthy();
    });
  });

  it("displays projects command output", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "projects" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Projetos em Destaque:")).toBeTruthy();
      expect(screen.getByText("5. Rastreamento de Engajamento - ML Preditivo")).toBeTruthy();
      expect(screen.getByText("6. Agente IA Salesforce - Automação Inteligente")).toBeTruthy();
    });
  });

  it("displays experience command output", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "experience" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Experiência Profissional:")).toBeTruthy();
      expect(screen.getByText("► Aluno do Programa Lighthouse (mai 2026 - Presente)")).toBeTruthy();
    });
  });

  it("displays certifications command output", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "certifications" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Certificações (13 total):")).toBeTruthy();
      expect(screen.getByText("► Bradesco - GenAI & Dados (jun 2026)")).toBeTruthy();
    });
  });

  it("displays education command output", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "education" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Formação Acadêmica:")).toBeTruthy();
      expect(screen.getByText("► Ciência de Dados (Em Andamento)")).toBeTruthy();
    });
  });

  it("displays error for unknown command", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    fireEvent.change(input, { target: { value: "unknown" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Comando não encontrado: unknown")).toBeTruthy();
    });
  });

  it("clears terminal history with clear command", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...");
    
    // First, run a command
    fireEvent.change(input, { target: { value: "skills" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText("Habilidades Técnicas:")).toBeTruthy();
    });

    // Now clear
    fireEvent.change(input, { target: { value: "clear" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(screen.queryByText("Habilidades Técnicas:")).toBeFalsy();
    });
  });

  it("applies dark mode styles when isDarkMode is true", () => {
    const { container } = render(<InteractiveTerminal isDarkMode={true} />);
    const terminalDiv = container.querySelector(".bg-gray-900");
    expect(terminalDiv).toBeTruthy();
  });

  it("applies light mode styles when isDarkMode is false", () => {
    const { container } = render(<InteractiveTerminal isDarkMode={false} />);
    const terminalDiv = container.querySelector(".bg-white");
    expect(terminalDiv).toBeTruthy();
  });

  it("clears input after command execution", async () => {
    render(<InteractiveTerminal isDarkMode={true} />);
    
    const input = screen.getByPlaceholderText("Digite um comando...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "help" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });
});
