import { useState, useRef, useEffect } from "react";

interface TerminalCommand {
  command: string;
  output: string[];
  isError?: boolean;
}

const AVAILABLE_COMMANDS = {
  help: {
    output: [
      "Comandos disponíveis:",
      "  help           - Mostra esta mensagem",
      "  skills         - Lista minhas habilidades",
      "  projects       - Mostra meus projetos",
      "  experience     - Experiência profissional",
      "  certifications - Certificações obtidas",
      "  education      - Formação acadêmica",
      "  contact        - Informações de contato",
      "  linkedin       - Link do LinkedIn",
      "  github         - Link do GitHub",
      "  resume         - Download do currículo",
      "  about          - Sobre mim",
      "  whoami         - Sobre mim (alias)",
      "  clear          - Limpa o terminal",
    ],
  },
  skills: {
    output: [
      "Habilidades Técnicas:",
      "  ► Power BI & DAX",
      "  ► SQL (MySQL, PostgreSQL)",
      "  ► Python (Pandas, NumPy)",
      "  ► ETL & Pentaho",
      "  ► Excel & Google Sheets",
      "  ► Tableau",
      "  ► Figma (Prototipação)",
      "  ► Estatística & ML",
      "  ► Salesforce Agentforce",
      "  ► IA Generativa",
      "  ► Git & Versionamento",
    ],
  },
  projects: {
    output: [
      "Projetos em Destaque:",
      "  1. Dashboard TechFlow Store - Power BI + IA",
      "  2. Inteligência Financeira - 3 Dashboards",
      "  3. KPIs Setor Automotivo - Análise Completa",
      "  4. KPIs Fast Food - Indicadores Operacionais",
      "  5. Rastreamento de Engajamento - ML Preditivo",
      "  6. Agente IA Salesforce - Automação Inteligente",
    ],
  },
  experience: {
    output: [
      "Experiência Profissional:",
      "  ► Aluno do Programa Lighthouse (mai 2026 - Presente)",
      "    Indicium AI | Análise de Dados & BI",
      "  ► Analista de Dados (nov 2025 - Presente)",
      "    Data Mundo | Porto Alegre, RS",
      "    Desenvolvimento de soluções analíticas, ETL, Dashboards",
    ],
  },
  certifications: {
    output: [
      "Certificações (13 total):",
      "  ► Bradesco - GenAI & Dados (jun 2026)",
      "  ► EF SET English Certificate 84/100 (nov 2025)",
      "  ► Formação em Power BI (jan 2026)",
      "  ► Power BI + IA Bootcamp (jan 2026)",
      "  ► Data Scientist Track - 365 Data Science (ago 2025)",
      "  ► Formação em Python para Ciência de Dados (ago 2024)",
      "  ► Formação em Análise de Dados com Google Sheets/Excel (jul 2024)",
      "  ► Santander Tech+ | Ciência de Dados (jan 2025)",
    ],
  },
  education: {
    output: [
      "Formação Acadêmica:",
      "  ► Ciência de Dados (Em Andamento)",
      "    Universidade Estácio de Sá",
      "  ► Técnico em Informática (Concluído)",
      "    ETEC Adolpho Berezin",
    ],
  },
  contact: {
    output: [
      "Entre em contato:",
      "  📧 Email: danilocsantos2005@gmail.com",
      "  🔗 LinkedIn: linkedin.com/in/danilocerqueiradados",
      "  💬 WhatsApp: +55 22 98859-6587",
    ],
  },
  linkedin: {
    output: [
      "LinkedIn: linkedin.com/in/danilocerqueiradados",
      "Abrindo LinkedIn...",
    ],
  },
  github: {
    output: [
      "GitHub: github.com/DecadenceDan",
      "Abrindo GitHub...",
    ],
  },
  resume: {
    output: [
      "Baixando currículo...",
      "Arquivo: curriculo-danilo.pdf",
    ],
  },
  whoami: {
    output: [
      "Danilo Cerqueira",
      "Analista de Dados | Data Mundo",
      "Especializado em transformar dados em insights estratégicos",
      "Experiência: ETL, SQL, Python, Power BI, Estatística, IA",
    ],
  },
  about: {
    output: [
      "Danilo Cerqueira",
      "Analista de Dados | Data Mundo",
      "Especializado em transformar dados em insights estratégicos",
      "Experiência: ETL, SQL, Python, Power BI, Estatística, IA",
    ],
  },
  clear: {
    output: [],
  },
};

// Commands that trigger external actions
const EXTERNAL_COMMANDS: Record<string, () => void> = {
  linkedin: () => window.open("https://linkedin.com/in/danilocerqueiradados", "_blank"),
  github: () => window.open("https://github.com/DecadenceDan", "_blank"),
  resume: () => {
    const link = document.createElement("a");
    link.href = "/curriculo-danilo.pdf";
    link.download = "curriculo-danilo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};

export default function InteractiveTerminal({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    setIsLoading(true);

    // Simulate command processing delay
    setTimeout(() => {
      const commandData =
        AVAILABLE_COMMANDS[trimmedCmd as keyof typeof AVAILABLE_COMMANDS];

      if (commandData) {
        if (trimmedCmd === "clear") {
          setHistory([]);
        } else {
          setHistory((prev) => [
            ...prev,
            {
              command: cmd,
              output: commandData.output,
              isError: false,
            },
          ]);

          // Execute external commands
          const externalCmd = EXTERNAL_COMMANDS[trimmedCmd];
          if (externalCmd) {
            setTimeout(() => externalCmd(), 500);
          }
        }
      } else {
        setHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: [
              `Comando não encontrado: ${cmd}`,
              "Digite 'help' para ver comandos disponíveis",
            ],
            isError: true,
          },
        ]);
      }

      setInput("");
      setIsLoading(false);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className={`w-full max-w-md ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 shadow-2xl flex flex-col h-[500px]`}>
      {/* Terminal Header */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className={`flex-1 overflow-y-auto font-mono text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 mb-4`}
      >
        <div className="text-green-400 text-xs">
          $ Bem-vindo ao Terminal de Danilo Cerqueira
        </div>
        <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Digite 'help' para ver os comandos disponíveis
        </div>

        {history.map((cmd, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-cyan-400">
              $ <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{cmd.command}</span>
            </div>
            {cmd.output.map((line, lineIdx) => (
              <div
                key={lineIdx}
                className={cmd.isError ? "text-red-400" : isDarkMode ? "text-gray-400" : "text-gray-600"}
              >
                {line}
              </div>
            ))}
          </div>
        ))}

        {isLoading && (
          <div className="text-yellow-400 animate-pulse">Processando...</div>
        )}
      </div>

      {/* Terminal Input */}
      <div className={`${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-t pt-4 flex items-center gap-2`}>
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyPress}
          placeholder="Digite um comando..."
          className={`flex-1 bg-transparent ${isDarkMode ? 'text-gray-300 placeholder-gray-600' : 'text-gray-700 placeholder-gray-400'} outline-none text-sm`}
          disabled={isLoading}
        />
        <span className="text-cyan-400 animate-pulse">▌</span>
      </div>
    </div>
  );
}
