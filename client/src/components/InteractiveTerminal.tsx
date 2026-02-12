import { useState, useEffect, useRef } from "react";

interface TerminalCommand {
  command: string;
  output: string[];
  isError?: boolean;
}

const AVAILABLE_COMMANDS = {
  help: {
    output: [
      "Comandos disponíveis:",
      "  help         - Mostra esta mensagem",
      "  skills       - Lista minhas habilidades",
      "  projects     - Mostra meus projetos",
      "  contact      - Informações de contato",
      "  clear        - Limpa o terminal",
      "  whoami       - Sobre mim",
      "  stats        - Estatísticas de trabalho",
    ],
  },
  skills: {
    output: [
      "Habilidades Técnicas:",
      "  ► Power BI & DAX",
      "  ► SQL (Postgres, MySQL)",
      "  ► Python (Pandas, Numpy)",
      "  ► ETL & Pentaho",
      "  ► Excel & Google Sheets",
      "  ► Tableau",
      "  ► Figma (Prototipação)",
      "  ► Estatística & ML",
    ],
  },
  projects: {
    output: [
      "Projetos em Destaque:",
      "  1. Dashboard TechFlow Store - Power BI + IA",
      "  2. Inteligência Financeira - 3 Dashboards",
      "  3. KPIs Setor Automotivo - Análise Completa",
      "  4. KPIs Fast Food - Indicadores Operacionais",
    ],
  },
  contact: {
    output: [
      "Entre em contato:",
      "  📧 Email: danilo.cerqueira@datamundo.com",
      "  🔗 LinkedIn: linkedin.com/in/danilocerqueiradados",
      "  💬 WhatsApp: +55 (51) 99999-9999",
    ],
  },
  whoami: {
    output: [
      "Danilo Cerqueira",
      "Analista de Dados | Data Mundo",
      "Especializado em transformar dados em insights estratégicos",
      "Experiência: ETL, SQL, Python, Power BI, Estatística",
    ],
  },
  stats: {
    output: [
      "Estatísticas de Trabalho:",
      "  Faturamento: R$ 720.842",
      "  Custos/Despesas: R$ 504.351",
      "  Lucro: R$ 216.491",
      "  Taxa de Sucesso: 100%",
    ],
  },
  clear: {
    output: [],
  },
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl flex flex-col h-[500px]">
      {/* Terminal Header */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto font-mono text-sm text-gray-300 space-y-2 mb-4"
      >
        <div className="text-green-400 text-xs">
          $ Bem-vindo ao Terminal de Danilo Cerqueira
        </div>
        <div className="text-gray-500 text-xs">
          Digite 'help' para ver os comandos disponíveis
        </div>

        {history.map((cmd, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-cyan-400">
              $ <span className="text-gray-300">{cmd.command}</span>
            </div>
            {cmd.output.map((line, lineIdx) => (
              <div
                key={lineIdx}
                className={cmd.isError ? "text-red-400" : "text-gray-400"}
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
      <div className="border-t border-gray-700 pt-4 flex items-center gap-2">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite um comando..."
          className="flex-1 bg-transparent text-gray-300 outline-none placeholder-gray-600 text-sm"
          disabled={isLoading}
        />
        <span className="text-cyan-400 animate-pulse">▌</span>
      </div>
    </div>
  );
}
