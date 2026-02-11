import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Neon Dark Tech
 * - Dark background (#000) with vibrant gradient accents (purple #7928CA, pink #FF0080, cyan #00DFD8)
 * - Left-aligned content with right-side interactive terminal
 * - Typography: Space Grotesk for headings, Inter for body
 * - Animations: Smooth typewriter effect for terminal, fade-in for content
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  // Simulate terminal typing effect
  useEffect(() => {
    const lines = [
      "import pandas as pd",
      "import seaborn as sns",
      "",
      "# ETL: Carregando Vendas",
      'df = pd.read_sql("SELECT * FROM sales")',
      "",
      "# Gerando Insights",
      "insight = df.groupby('region').sum()",
      'print("Dashboard Atualizado!")',
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < lines.length) {
        setTerminalLines((prev) => [...prev, lines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Background Glow Elements */}
      <div className="fixed top-[-20%] left-[20%] w-[60%] h-[60%] bg-gradient-to-br from-purple-900/20 to-transparent blur-[100px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-cyan-500/10 to-transparent blur-[80px] -z-10" />

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/5 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider">
            DC<span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">.</span>Data
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 list-none">
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "about" },
              { label: "Projetos", id: "projects" },
              { label: "Experiência", id: "experience" },
              { label: "Contato", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900 border-b border-gray-800 p-6 flex flex-col gap-4">
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "about" },
              { label: "Projetos", id: "projects" },
              { label: "Experiência", id: "experience" },
              { label: "Contato", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-block bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-white text-sm font-semibold tracking-wide">
                Olá, meu nome é Danilo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Construindo{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                valor através de dados.
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Analista de Dados especializado em transformar dados em insights estratégicos. Experiência em ETL, SQL, Python, Estatística e dashboards, atuando desde a definição de KPIs até a criação de visualizações para tomada de decisão.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-full"
              >
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/5 font-bold px-8 py-6 rounded-full"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Right Terminal */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl">
              {/* Terminal Header Dots */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm text-gray-300 space-y-2">
                {terminalLines.map((line, idx) => {
                  if (!line) return <div key={idx}>&nbsp;</div>;
                  return (
                    <div key={idx} className="animate-fade-in">
                      {line === "" ? (
                      <div>&nbsp;</div>
                    ) : line.includes("import") ? (
                      <div>
                        <span className="text-pink-500">import</span>{" "}
                        <span className="text-gray-300">{line.split("import ")[1]}</span>
                      </div>
                    ) : line.includes("def") || line.includes("pd.") || line.includes("df.") ? (
                      <div>
                        <span className="text-cyan-400">{line.split("(")[0]}</span>
                        <span className="text-gray-300">
                          {line.substring(line.split("(")[0].length)}
                        </span>
                      </div>
                    ) : line.includes("#") ? (
                      <div className="text-gray-600 italic">{line}</div>
                    ) : line.includes('"') ? (
                      <div>
                        <span className="text-yellow-400">{line}</span>
                      </div>
                    ) : (
                      <div className="text-gray-300">{line}</div>
                    )}
                    </div>
                  );
                })}
                {terminalLines.length === 9 && (
                  <div className="text-green-400 mt-4">
                    Dashboard Atualizado! ✓
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="mt-6 pt-4 border-t border-gray-700 flex justify-around text-center">
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    Dados
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-black text-xl">
                    1.5TB
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    KPIs
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-black text-xl">
                    99%
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    ROI
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-black text-xl">
                    +30%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Sobre <span className="text-gray-600">Mim</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-4 text-gray-400">
                <p>
                  Analista de Dados versado na arte de transformar informações em histórias claras e acionáveis. Com experiência em Excel, SQL, Python, Estatística e Power BI, atuo desde a definição de KPIs até a criação de dashboards alinhados ao negócio.
                </p>
                <p>
                  Tenho foco em interpretação de dados, identificação de padrões e geração de insights que apoiam decisões estratégicas. Possuo perfil curioso, colaborativo e orientado a resultados, sempre buscando simplificar processos e entregar soluções úteis.
                </p>
                <p>
                  Minha atuação é alinhada a metodologias ágeis, garantindo entregas eficientes e bem estruturadas. Trabalho com a convicção de que dados só têm valor quando geram impacto real.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Power BI & DAX",
                  "SQL (Postgres, MySQL)",
                  "Python (Pandas, Numpy)",
                  "ETL & Pentaho",
                  "Excel & Google Sheets",
                  "Git & Versionamento",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm hover:border-cyan-500 transition-colors cursor-pointer"
                  >
                    <span className="text-cyan-400">●</span> {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center border border-gray-800 rounded-lg p-8 bg-gray-900">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-white font-bold mb-2">Data Driven</h3>
                <p className="text-gray-500 text-sm">
                  Transformando perguntas em queries e dados em lucro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Projetos <span className="text-gray-600">em Destaque</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dashboard Automotivo",
                desc: "Uma solução completa de BI para monitoramento de vendas, margem e performance de concessionárias em nível nacional.",
                tags: ["Power BI", "DAX", "ETL"],
              },
              {
                title: "Dashboard Fast Food",
                desc: "Análise operacional focada em eficiência de cozinha, tempo de espera e satisfação do cliente em redes de fast food.",
                tags: ["Power BI", "SQL", "GeoAnalytics"],
              },
              {
                title: "TechFlow Store",
                desc: "Interface moderna de análise de vendas com foco em experiência do usuário e visualização de dados intuitiva.",
                tags: ["Figma", "UI/UX", "Power BI"],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 hover:bg-gray-800 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2m0 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2"
                    />
                  </svg>
                  <span className="text-cyan-400 text-xl group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Experiência <span className="text-gray-600">Profissional</span>
          </h2>

          <div className="space-y-8 max-w-2xl">
            {[
              {
                title: "Analista de Dados Senior",
                company: "Tech Company",
                date: "2023 - Presente",
                items: [
                  "Desenvolvimento de dashboards estratégicos em Power BI",
                  "Otimização de pipelines ETL com Python e SQL",
                  "Liderança de projetos de BI e análise de dados",
                ],
              },
              {
                title: "Analista de Dados",
                company: "Data Solutions",
                date: "2021 - 2023",
                items: [
                  "Criação de modelos de dados e análises exploratórias",
                  "Automação de processos com Python e Pandas",
                  "Suporte a stakeholders com insights e relatórios",
                ],
              },
            ].map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-gray-700">
                <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full border-2 border-white bg-black" />
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-gray-500 text-sm font-mono mb-2">
                  {exp.company} • {exp.date}
                </p>
                <ul className="space-y-1 text-gray-400">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-sm">
                      <span className="text-cyan-400">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Vamos <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-full">
              Email
            </Button>
            <Button
              variant="outline"
              className="border border-white/30 text-white hover:bg-white/5 font-bold px-8 py-6 rounded-full"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border border-white/30 text-white hover:bg-white/5 font-bold px-8 py-6 rounded-full"
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Danilo Cerqueira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
