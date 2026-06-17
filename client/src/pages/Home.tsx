import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ContactForm from "@/components/ContactForm";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

/**
 * Premium Portfolio Design
 * - Modern UI with glassmorphism and gradients
 * - Data Analyst | BI | AI & Analytics focus
 * - International standard design (Stripe, Linear, Vercel inspired)
 * - Optimized for conversion and credibility
 */

export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} font-sans overflow-x-hidden transition-colors duration-300`}>
      <ScrollProgressBar />
      {/* Background Glow Elements */}
      <div className="fixed top-[-20%] left-[20%] w-[60%] h-[60%] bg-gradient-to-br from-purple-900/20 to-transparent blur-[100px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-cyan-500/10 to-transparent blur-[80px] -z-10" />

      {/* Header */}
      <header className={`fixed top-0 w-full ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md z-50 border-b ${isDarkMode ? 'border-white/5' : 'border-black/10'} px-6 py-4`} role="banner">
        <nav className="max-w-7xl mx-auto flex justify-between items-center" aria-label="Navegação principal">
          <div className="text-2xl font-black tracking-wider">
            DC<span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">.</span>Data
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 list-none" role="navigation" aria-label="Menu de navegação">
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "about" },
              { label: "Projetos", id: "projects" },
              { label: "Experiência", id: "experience" },
              { label: "Certificações", id: "certifications" },
              { label: "Contato", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm font-medium`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors`}
              aria-label={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              title={isDarkMode ? 'Modo claro' : 'Modo escuro'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl"
              aria-label="Abrir menu de navegação"
              aria-expanded={isMenuOpen}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-20 left-0 right-0 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'} border-b p-6 flex flex-col gap-4`}>
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "about" },
              { label: "Projetos", id: "projects" },
              { label: "Experiência", id: "experience" },
              { label: "Certificações", id: "certifications" },
              { label: "Contato", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors text-sm font-medium text-left`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/5 to-transparent" style={{transform: `translateY(${scrollY * 0.5}px)`}} />
        </div>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className={`inline-block ${isDarkMode ? 'bg-white/10 border-white/10' : 'bg-black/10 border-black/10'} border rounded-full px-4 py-2 mb-6`}>
              <span className={`text-sm font-semibold tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
                👋 Olá, meu nome é Danilo
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Analytics<br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>

            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8 max-w-xl leading-relaxed`}>
              Transformando dados em decisões estratégicas através de Analytics, BI e Inteligência Artificial. Especialista em Python, SQL, Power BI e Machine Learning com experiência em empresas de tecnologia.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-lg p-4`}>
                <div className="text-2xl font-bold text-cyan-400">1+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Anos de Experiência</div>
              </div>
              <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-lg p-4`}>
                <div className="text-2xl font-bold text-cyan-400">15+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dashboards Criados</div>
              </div>
              <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-lg p-4`}>
                <div className="text-2xl font-bold text-cyan-400">5+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projetos</div>
              </div>
              <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border rounded-lg p-4`}>
                <div className="text-2xl font-bold text-cyan-400">13</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certificações</div>
              </div>
            </div>

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
                className={`${isDarkMode ? 'border-white/30 text-white hover:bg-white/5' : 'border-black/30 text-black hover:bg-black/5'} border font-bold px-8 py-6 rounded-full`}
              >
                Contato
              </Button>
              <a href="/curriculo-danilo.pdf" download>
                <Button
                  variant="outline"
                  className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-bold px-8 py-6 rounded-full transition-all hover:border-cyan-400"
                >
                  Baixar CV
                </Button>
              </a>
              <a href="https://github.com/DecadenceDan" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className={`${isDarkMode ? 'border-white/30 text-white hover:bg-white/5' : 'border-black/30 text-black hover:bg-black/5'} border font-bold px-8 py-6 rounded-full`}
                >
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Right Terminal */}
          <div className="flex justify-center items-center">
            <div className="w-full">
              <InteractiveTerminal isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Sobre <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>Mim</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className={`space-y-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  Sou estudante de Ciência de Dados com experiência em análise de dados, Business Intelligence, desenvolvimento de dashboards, prototipação de soluções, além de certificações em IA Generativa, Python, SQL e Power BI.
                </p>
                <p>
                  Atuo na elaboração de soluções analíticas para suporte à decisão estratégica, com forte foco em visualização de dados, métricas de desempenho e automação de processos. Tenho habilidades em metodologias ágeis, documentação técnica e trabalho remoto internacional.
                </p>
                <p>
                  Minha atuação é alinhada a transformar dados em insights acionáveis que geram impacto real nos negócios. Possuo perfil curioso, colaborativo e orientado a resultados.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Power BI & DAX",
                  "SQL (MySQL, PostgreSQL)",
                  "Python (Pandas, NumPy)",
                  "ETL & Pentaho",
                  "Excel & Google Sheets",
                  "Tableau",
                  "Figma (Prototipação)",
                  "Estatística & ML",
                  "Metodologias Ágeis",
                  "Salesforce Agentforce",
                  "IA Generativa",
                  "Git & Versionamento",
                ].map((skill) => (
                  <div
                    key={skill}
                    className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:bg-gray-800 hover:shadow-cyan-500/30' : 'bg-white border-gray-200 hover:border-cyan-400 hover:bg-gray-100 hover:shadow-cyan-500/20'} border rounded-lg p-3 text-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  >
                    <span className="text-cyan-400 animate-pulse">●</span> {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className={`text-center ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:border-cyan-400 hover:bg-gray-800 hover:shadow-cyan-500/20' : 'border-gray-200 bg-white hover:border-cyan-400 hover:bg-gray-100 hover:shadow-cyan-500/10'} border rounded-lg p-6 w-full transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="font-bold mb-1 text-sm">UNINTER</h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  CST em Ciência de Dados
                </p>
                <p className="text-cyan-400 text-xs font-mono mt-1">
                  2024 - 2027
                </p>
              </div>
              <div className={`text-center ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:border-cyan-400 hover:bg-gray-800 hover:shadow-cyan-500/20' : 'border-gray-200 bg-white hover:border-cyan-400 hover:bg-gray-100 hover:shadow-cyan-500/10'} border rounded-lg p-6 w-full transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-bold mb-1 text-sm">Inglês</h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  C2 - Fluente
                </p>
                <p className="text-cyan-400 text-xs font-mono mt-1">
                  EF SET 84/100
                </p>
              </div>
              <div className={`text-center ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:border-cyan-400 hover:bg-gray-800 hover:shadow-cyan-500/20' : 'border-gray-200 bg-white hover:border-cyan-400 hover:bg-gray-100 hover:shadow-cyan-500/10'} border rounded-lg p-6 w-full transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-bold mb-1 text-sm">Foco</h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Dados geram impacto real
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Projetos <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>em Destaque</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            {[
              {
                title: "Dashboard TechFlow Store",
                description: "Análise de vendas e métricas de e-commerce",
                tools: ["Power BI", "SQL", "DAX"],
                link: "/projeto/techflow",
              },
              {
                title: "Inteligência Financeira",
                description: "Dashboard de análise financeira com 3 visualizações",
                tools: ["Power BI", "SQL", "Python"],
                link: "/projeto/financeiro",
              },
              {
                title: "KPIs Setor Automotivo",
                description: "Análise de desempenho e indicadores do setor",
                tools: ["Power BI", "SQL", "Excel"],
                link: "/projeto/automotivo",
              },
              {
                title: "KPIs Fast Food",
                description: "Dashboard operacional para rede de restaurantes",
                tools: ["Power BI", "SQL", "Tableau"],
                link: "/projeto/fastfood",
              },
              {
                title: "Rastreamento de Engajamento",
                description: "Análise preditiva de engajamento de usuários",
                tools: ["Python", "SQL", "Scikit-learn"],
                link: "/projeto/engajamento",
              },
              {
                title: "Agente IA Salesforce",
                description: "Agente autônomo de atendimento com Agentforce",
                tools: ["Salesforce", "IA", "CRM"],
                link: "/projeto/salesforce",
              },
            ].map((project, idx) => (
              <Link key={idx} href={project.link}>
                <a className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-cyan-400 hover:bg-gray-100'} border rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer`}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Experiência <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>Profissional</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Aluno do Programa Lighthouse",
                company: "Indicium AI",
                period: "mai 2026 - Presente",
                location: "Nova York, Estados Unidos (Remoto)",
                description: "Programa intensivo de 52 horas focado em Data Engineering, Analytics e Data Science. Domínio de dbt para transformação de dados, Databricks para processamento distribuído, Power BI para visualizações estratégicas, e aplicações de IA Generativa. Desenvolvimento de pipelines de dados, modelagem dimensional, e soluções analíticas end-to-end.",
              },
              {
                title: "Analista de Dados",
                company: "Data Mundo",
                period: "nov 2025 - mai 2026",
                location: "Porto Alegre, RS (Remoto)",
                description: "Desenvolvimento de soluções analíticas completas: ETL com SQL e Pentaho, criação de dashboards em Power BI e Tableau, modelagem de dados, análise exploratória e suporte à tomada de decisão estratégica. Experiência em Data Engineering, Analytics e Data Science com foco em transformação de dados brutos em insights acionáveis.",
              },
            ].map((exp, idx) => (
              <div key={idx} className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-lg p-6`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{exp.location}</p>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Certificações <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>(13)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Bradesco - GenAI & Dados",
                issuer: "DIO",
                date: "jun 2026",
                skills: "IA Generativa, Python, SQL, Power BI, Banco de Dados",
                link: "https://www.dio.me/certificate/CFZSXUVV",
              },
              {
                title: "EF SET English Certificate 84/100",
                issuer: "EF SET",
                date: "nov 2025",
                skills: "English, C2 Proficient",
                link: "https://cert.efset.org/en/gmFNcm",
              },
              {
                title: "Formação em Power BI",
                issuer: "Escola DNC",
                date: "jan 2026",
                skills: "Power BI, DAX, Visualização",
                link: "https://files.dnc.group/journey/155714/cf96e653-9ddd-4852-b1bd-212044eb9f54.pdf",
              },
              {
                title: "Power BI + IA Bootcamp",
                issuer: "Xperiun",
                date: "jan 2026",
                skills: "Power BI, IA, Analytics",
                link: "https://drive.google.com/file/d/1R4hzWWkL1b9_Iu0B5M3C51x2ORIvwsnT/view",
              },
              {
                title: "Data Scientist Track",
                issuer: "365 Data Science",
                date: "ago 2025",
                skills: "Python, SQL, ML, Estatística",
                link: "https://learn.365datascience.com/c/eb59c02f98",
              },
              {
                title: "Formação em Python para Ciência de Dados",
                issuer: "Alura",
                date: "ago 2024",
                skills: "Python, Pandas, NumPy, Scikit-learn",
                link: "https://cursos.alura.com.br/degree/certificate/fa6bfff9-118c-400b-b7c8-84baee081829?lang",
              },
              {
                title: "Formação em Análise de Dados com Google Sheets/Excel",
                issuer: "Alura",
                date: "jul 2024",
                skills: "Excel, Google Sheets, Análise",
                link: "https://cursos.alura.com.br/degree/certificate/e583ec78-4aab-4250-9f83-79cd4d6c8591?lang",
              },
              {
                title: "Santander Tech+ | Ciência de Dados",
                issuer: "Ada Tech",
                date: "jan 2025",
                skills: "Python, SQL, Machine Learning",
                link: "#",
              },
            ].map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-cyan-400 hover:bg-gray-100'} border rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                  <span className="text-cyan-400">↗</span>
                </div>
                <p className="text-cyan-400 font-semibold text-sm mb-1">{cert.issuer}</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{cert.date}</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>{cert.skills}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Vamos <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>Conversar?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm isDarkMode={isDarkMode} />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Conecte-se comigo</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/danilocerqueiradados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-cyan-400 hover:bg-gray-100'} border rounded-lg p-4 transition-all duration-300 flex items-center gap-3`}
                  >
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>@danilocerqueiradados</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/DecadenceDan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-cyan-400 hover:bg-gray-100'} border rounded-lg p-4 transition-all duration-300 flex items-center gap-3`}
                  >
                    <span className="text-2xl">🐙</span>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>@DecadenceDan</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/5522988596587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-cyan-400 hover:bg-gray-100'} border rounded-lg p-4 transition-all duration-300 flex items-center gap-3`}
                  >
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+55 22 98859-6587</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Disponibilidade</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Estou aberto a oportunidades em empresas de tecnologia, startups, consultorias e projetos freelance. Respondo mensagens dentro de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-black border-gray-900' : 'bg-white border-gray-200'} border-t py-8 px-6`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} text-sm`}>
            © 2026 Danilo Cerqueira. Desenvolvido com ❤️ e dados.
          </p>
        </div>
      </footer>
      
      <BackToTop isDarkMode={isDarkMode} />
    </div>
  );
}
