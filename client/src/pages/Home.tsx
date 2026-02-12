import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import InteractiveTerminal from "@/components/InteractiveTerminal";

/**
 * Design Philosophy: Neon Dark Tech
 * - Dark background (#000) with vibrant gradient accents (purple #7928CA, pink #FF0080, cyan #00DFD8)
 * - Left-aligned content with right-side interactive terminal
 * - Typography: Space Grotesk for headings, Inter for body
 * - Animations: Smooth typewriter effect for terminal, fade-in for content
 * - All data sourced from Danilo's real LinkedIn profile
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              { label: "Formação", id: "education" },
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
              { label: "Formação", id: "education" },
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
              Analista de Dados na Data Mundo, especializado em transformar dados em insights estratégicos. Experiência em ETL, SQL, Python, Estatística e Power BI, atuando desde a definição de KPIs até a criação de dashboards para tomada de decisão.
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
            <div className="w-full">
              <InteractiveTerminal />
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
                  Minha atuação é alinhada a metodologias ágeis, garantindo entregas eficientes e bem estruturadas. Trabalho com a convicção de que dados só têm valor quando geram impacto real, princípio esse que guia meu trabalho todos os dias.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Power BI & DAX",
                  "SQL (Postgres, MySQL)",
                  "Python (Pandas, Numpy)",
                  "ETL & Pentaho",
                  "Excel & Google Sheets",
                  "Tableau",
                  "Figma (Prototipação)",
                  "Estatística & ML",
                  "Metodologias Ágeis",
                  "Git & Versionamento",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm hover:border-cyan-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    <span className="text-cyan-400 animate-pulse">●</span> {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-start">
              <div className="text-center border border-gray-800 rounded-lg p-6 bg-gray-900 w-full hover:border-cyan-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-2 hover:animate-float">🎓</div>
                <h3 className="text-white font-bold mb-1 text-sm">UNINTER</h3>
                <p className="text-gray-500 text-xs">
                  CST em Ciência de Dados
                </p>
                <p className="text-cyan-400 text-xs font-mono mt-1">
                  2024 - 2027
                </p>
              </div>
              <div className="text-center border border-gray-800 rounded-lg p-6 bg-gray-900 w-full hover:border-cyan-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-2 hover:animate-float">🌍</div>
                <h3 className="text-white font-bold mb-1 text-sm">Inglês C2</h3>
                <p className="text-gray-500 text-xs">
                  Fluente
                </p>
              </div>
              <div className="text-center border border-gray-800 rounded-lg p-6 bg-gray-900 w-full hover:border-cyan-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-2 hover:animate-float">🚀</div>
                <h3 className="text-white font-bold mb-1 text-sm">Data Driven</h3>
                <p className="text-gray-500 text-xs">
                  Dados só têm valor quando geram impacto real.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Dashboard TechFlow Store",
                slug: "techflow",
                desc: "Solução de BI ponta a ponta com integração de IA. Geração de dados com Python/Pandas, ETL no Power Query, modelagem Star Schema, DAX avançado e Árvore de Decomposição para análise de causa raiz.",
                tags: ["Power BI", "DAX", "Python", "IA", "Star Schema"],
              },
              {
                title: "Inteligência Financeira",
                slug: "financeiro",
                desc: "Solução integrada com 3 dashboards estratégicos: Performance de Vendas, Fluxo de Caixa e Simulador Financeiro (What-If) para análise de cenários e tomada de decisão.",
                tags: ["Power BI", "DAX", "Power Query", "What-If"],
              },
              {
                title: "KPIs Setor Automotivo",
                slug: "automotivo",
                desc: "Dashboard para monitoramento de vendas brutas, ranking por país, comparativo custo vs faturamento, segmentos rentáveis e top produtos vendidos.",
                tags: ["Power BI", "DAX", "ETL", "KPIs"],
              },
              {
                title: "KPIs Fast Food",
                slug: "fastfood",
                desc: "Análise de indicadores comerciais e operacionais: evolução temporal do faturamento, lucratividade por categoria, perfil do cliente e eficiência operacional por região.",
                tags: ["Power BI", "SQL", "GeoAnalytics", "KPIs"],
              },
            ].map((project, idx) => (
              <Link key={idx} href={`/projeto/${project.slug}`} className="no-underline">
              <div
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group cursor-pointer h-full transform hover:scale-105 hover:-translate-y-1"
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
              </Link>
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
            <div className="relative pl-8 border-l border-gray-700">
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full border-2 border-cyan-400 bg-black" />
              <h3 className="text-xl font-bold text-white">Analista de Dados</h3>
              <p className="text-gray-500 text-sm font-mono mb-2">
                Data Mundo • Tempo Integral • Nov 2025 - Presente
              </p>
              <p className="text-gray-600 text-xs font-mono mb-3">
                Porto Alegre, RS, Brasil • Remota
              </p>
              <ul className="space-y-1 text-gray-400">
                {[
                  "Entendimento do problema junto à área de negócios",
                  "Priorização de tarefas e metodologias ágeis (Scrum)",
                  "Mapeamento de Dados e ETL (Pentaho, SQL)",
                  "Prototipação (Figma, Excel)",
                  "Desenvolvimento de Dashboards (Power BI, Tableau)",
                  "Desenvolvimento de indicadores (KPIs e OKRs)",
                  "Documentação e manuais de usabilidade de Dashboards",
                  "LGPD e Gamification",
                ].map((item, i) => (
                  <li key={i} className="text-sm">
                    <span className="text-cyan-400">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Formação <span className="text-gray-600">& Certificações</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-cyan-400">◆</span> Formação Acadêmica
              </h3>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-1">Centro Universitário Internacional UNINTER</h4>
                <p className="text-gray-400 text-sm mb-2">Curso Superior de Tecnologia (CST) em Ciência de Dados</p>
                <p className="text-gray-500 text-xs font-mono mb-3">Jul 2024 - Jan 2027</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "Power BI", "Estatística", "Machine Learning", "Engenharia de Dados"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-cyan-400">◆</span> Certificações Profissionais
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Formação em Power BI",
                    issuer: "Escola DNC",
                    date: "Jan 2026",
                    link: "https://files.dnc.group/journey/155714/cf96e653-9ddd-4852-b1bd-212044eb9f54.pdf",
                  },
                  {
                    title: "Power BI + IA Bootcamp",
                    issuer: "Xperiun | Data Analytics",
                    date: "Jan 2026",
                    link: "https://drive.google.com/file/d/1R4hzWWkL1b9_Iu0B5M3C51x2ORIvwsnT/view",
                  },
                  {
                    title: "Data Scientist Track",
                    issuer: "365 Data Science",
                    date: "Ago 2025",
                    link: "https://learn.365datascience.com/c/eb59c02f98",
                  },
                  {
                    title: "Santander Tech+ | Ciência de Dados",
                    issuer: "Ada Tech",
                    date: "Jan 2025",
                  },
                  {
                    title: "Formação em Python para Ciência de Dados",
                    issuer: "Alura",
                    date: "Ago 2024",
                    link: "https://cursos.alura.com.br/degree/certificate/fa6bfff9-118c-400b-b7c8-84baee081829?lang",
                  },
                  {
                    title: "Formação em Análise de Dados com Google Sheets / Excel",
                    issuer: "Alura",
                    date: "Jul 2024",
                    link: "https://cursos.alura.com.br/degree/certificate/e583ec78-4aab-4250-9f83-79cd4d6c8591?lang",
                  },
                ].map((cert, idx) => cert.link ? (
                  <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="block bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                        <p className="text-gray-500 text-xs">{cert.issuer}</p>
                        {cert.date && <p className="text-gray-600 text-xs font-mono mt-1">{cert.date}</p>}
                      </div>
                      <svg className="w-4 h-4 text-cyan-400 ml-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                  </a>
                ) : (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-4 opacity-75">
                    <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                    <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    {cert.date && <p className="text-gray-600 text-xs font-mono mt-1">{cert.date}</p>}
                  </div>
                ))}
              </div>

              {/* English Certificate - Separate */}
              <h3 className="text-lg font-bold text-white mb-6 mt-8 flex items-center gap-2">
                <span className="text-cyan-400">◆</span> Idiomas
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "EF SET English Certificate 84/100 (C2 Proficient)",
                    issuer: "EF SET",
                    date: "Nov 2025",
                    link: "https://cert.efset.org/en/gmFNcm",
                  },
                ].map((cert, idx) => cert.link ? (
                  <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="block bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                        <p className="text-gray-500 text-xs">{cert.issuer}</p>
                        {cert.date && <p className="text-gray-600 text-xs font-mono mt-1">{cert.date}</p>}
                      </div>
                      <svg className="w-4 h-4 text-cyan-400 ml-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                  </a>
                ) : (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-4 opacity-75">
                    <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                    <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    {cert.date && <p className="text-gray-600 text-xs font-mono mt-1">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Vamos <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:danilocsantos2005@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-full">
                Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/danilocerqueiradados/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/5 font-bold px-8 py-6 rounded-full"
              >
                LinkedIn
              </Button>
            </a>
            <a href="https://wa.me/22988596587" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/5 font-bold px-8 py-6 rounded-full"
              >
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2025 Danilo Cerqueira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
