import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Neon Dark Tech (consistent with Home)
 * - Dark background with gradient accents
 * - Image gallery for dashboard screenshots
 * - Detailed project description with tags
 */

const TECHFLOW_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663204593959/kazcFAtKhmcokFRe.png";
const FINANCEIRO1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663204593959/rulZWNpxYPPWWFHl.png";
const FINANCEIRO2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663204593959/grQgqQERMlBEUFZk.png";
const FINANCEIRO3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663204593959/jpmaxHkVNiyNyxHk.png";
const AUTOMOTIVO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663204593959/lPdEudXWMzkfQwLD.png";
const FASTFOOD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663204593959/abzodMBCzyxohKbC.png";

interface ProjectData {
  title: string;
  subtitle: string;
  description: string[];
  images: { src: string; caption: string }[];
  tags: string[];
  highlights: { label: string; value: string }[];
  tools: string[];
}

const projects: Record<string, ProjectData> = {
  techflow: {
    title: "Dashboard TechFlow Store",
    subtitle: "Integração Power BI + IA",
    description: [
      "Desenvolvi uma solução de Business Intelligence de ponta a ponta para a empresa fictícia TechFlow Store. O objetivo foi simular um cenário real de mercado onde integrei Inteligência Artificial ao fluxo de análise de dados.",
      "Utilizei Engenharia de Prompt e Python (Pandas) para criar bases de dados complexas com sazonalidade e regras de negócio. Realizei o tratamento de dados no Power Query e construí a modelagem dimensional (Star Schema) para garantir performance.",
      "Desenvolvi medidas complexas em DAX para KPIs dinâmicos, incluindo inteligência de tempo e formatação condicional baseada em metas. Criei um layout focado em UX e Storytelling, utilizando a Árvore de Decomposição (Decomposition Tree) para análise de causa raiz das vendas.",
    ],
    images: [
      { src: TECHFLOW_IMG, caption: "Performance de Vendas — Dashboard Comercial" },
    ],
    tags: ["Power BI", "DAX", "Python", "Pandas", "IA", "Star Schema", "Power Query", "ETL"],
    highlights: [
      { label: "Faturamento", value: "R$ 215,8 Mi" },
      { label: "Meta", value: "R$ 218,2 Mi" },
      { label: "Atingimento", value: "98,91%" },
    ],
    tools: ["Power BI", "Python (Pandas)", "Power Query", "DAX", "Figma"],
  },
  financeiro: {
    title: "Inteligência Financeira",
    subtitle: "Performance e Tomada de Decisão",
    description: [
      "Desenvolvi uma solução integrada de Business Intelligence composta por três dashboards estratégicos, projetados para oferecer uma visão 360° da saúde financeira e comercial de uma organização.",
      "O projeto abrange todo o ciclo de vida do dado, desde o ETL complexo até a entrega de uma interface de alta fidelidade para suporte à decisão. Inclui Dashboard de Performance de Vendas com análise detalhada de receita e margem bruta, Dashboard de Fluxo de Caixa com monitoramento de receitas, custos e despesas, e Simulador Financeiro (What-If) para análise de cenários.",
      "Implementei esquema Star Schema com tabelas fato e dimensão (Calendário, Produtos, Vendedores e Plano de Contas) para otimização de performance. Criei medidas complexas em DAX para KPIs financeiros e parâmetros de campo para o simulador de cenários.",
    ],
    images: [
      { src: FINANCEIRO1_IMG, caption: "Receita x Custos x Margem — Análise por Equipe de Vendas" },
      { src: FINANCEIRO2_IMG, caption: "Fluxo de Caixa — Lucro por Mês (Waterfall)" },
      { src: FINANCEIRO3_IMG, caption: "Simulador Financeiro — Análise What-If" },
    ],
    tags: ["Power BI", "DAX", "Power Query (M)", "Star Schema", "What-If", "ETL"],
    highlights: [
      { label: "Receita", value: "R$ 79,57 Mi" },
      { label: "Margem Bruta", value: "48,34%" },
      { label: "Lucro", value: "R$ 13,30 Mi" },
    ],
    tools: ["Power BI", "DAX", "Power Query (M)", "Modelagem de Dados", "Figma"],
  },
  automotivo: {
    title: "KPIs Setor Automotivo",
    subtitle: "Dashboard Auto Solutions",
    description: [
      "Dashboard desenvolvido para monitoramento de vendas, margem e performance de concessionárias no setor automotivo. A solução oferece uma visão completa do desempenho comercial com análise por país, segmento e produto.",
      "O dashboard apresenta KPIs de vendas brutas com comparativo de custo vs faturamento, ranking por país (Canadá, França, Estados Unidos, México, Alemanha), análise de lucro por segmento (Governo, Empresa, Mercado Intermediário, Parceiros de Canal, Pequena Empresa) e unidades vendidas por produto.",
      "A interface foi projetada com foco em clareza e eficiência, permitindo identificar rapidamente os segmentos mais rentáveis e os produtos com maior volume de vendas.",
    ],
    images: [
      { src: AUTOMOTIVO_IMG, caption: "Dashboard Auto Solutions — Vendas e Performance" },
    ],
    tags: ["Power BI", "DAX", "ETL", "KPIs", "Análise de Vendas"],
    highlights: [
      { label: "Vendas Brutas", value: "R$ 39,56 Bi" },
      { label: "Total de Custo", value: "R$ 25,38 Bi" },
      { label: "Total de Lucro", value: "R$ 14,18 Bi" },
    ],
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
  },
  fastfood: {
    title: "KPIs Fast Food",
    subtitle: "Dashboard Bite Speed",
    description: [
      "Dashboard desenvolvido para análise de indicadores comerciais e operacionais de uma rede de fast food. A solução monitora desde o faturamento até a eficiência operacional por região, oferecendo insights para otimização do negócio.",
      "O painel apresenta evolução temporal do faturamento, lucratividade por categoria de produto (Hambúrguer, Sobremesa, Acompanhamento, Bebida), perfil do cliente por faixa etária e gênero, e análise de tempo de atendimento por estado e funcionário.",
      "Inclui filtros regionais (Centro, Leste, Norte, Oeste, Sul) e análise de canais de atendimento (Balcão, Drive-Thru, Delivery), permitindo uma visão granular da operação.",
    ],
    images: [
      { src: FASTFOOD_IMG, caption: "Dashboard Bite Speed — KPIs de Vendas e Atendimento" },
    ],
    tags: ["Power BI", "SQL", "GeoAnalytics", "KPIs", "Análise Operacional"],
    highlights: [
      { label: "Vendas", value: "R$ 629,58 Mi" },
      { label: "Custo Produção", value: "R$ 265,05 Mi" },
      { label: "Tempo Médio", value: "7,96 min" },
    ],
    tools: ["Power BI", "SQL", "DAX", "Power Query"],
  },
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const [, navigate] = useLocation();
  const project = projects[slug];

  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-[-20%] left-[20%] w-[60%] h-[60%] bg-gradient-to-br from-purple-900/20 to-transparent blur-[100px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-cyan-500/10 to-transparent blur-[80px] -z-10" />

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/5 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-black tracking-wider hover:opacity-80 transition-opacity"
          >
            DC<span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">.</span>Data
          </button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="border border-white/30 text-white hover:bg-white/5 font-medium px-6 py-2 rounded-full text-sm"
          >
            ← Voltar
          </Button>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            <div className="inline-block bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-4">
              <span className="text-white text-sm font-semibold tracking-wide">
                Projeto
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-gray-400 text-xl">{project.subtitle}</p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-5 text-center">
                <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  {h.label}
                </div>
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-black text-2xl">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Images */}
          <div className="mb-12 space-y-6">
            {project.images.map((img, idx) => (
              <div key={idx} className="group">
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-3 text-center italic">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">◆</span> Sobre o Projeto
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {project.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Tools & Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">◆</span> Ferramentas Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-900 border border-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-cyan-500 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">◆</span> Competências
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-800 text-gray-400 px-3 py-1.5 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center pt-8 border-t border-gray-800">
            <Button
              onClick={() => navigate("/")}
              className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-full"
            >
              ← Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2025 Danilo Cerqueira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
