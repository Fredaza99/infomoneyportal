import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import AdBanner from "@/components/AdBanner";

// Dados simulados para o site
const featuredArticles = [
  {
    id: '1',
    title: 'Como Investir na Bolsa de Valores em 2025',
    excerpt: 'Descubra as melhores estratégias para investir na bolsa de valores e maximizar seus lucros neste ano.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop',
    category: 'Economia',
    date: '23 Maio, 2025',
    featured: true
  },
  {
    id: '2',
    title: 'Inteligência Artificial: O Futuro do Trabalho',
    excerpt: 'Como a IA está transformando o mercado de trabalho e quais profissões estarão em alta nos próximos anos.',
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813dce26?q=80&w=1632&auto=format&fit=crop',
    category: 'Tecnologia',
    date: '22 Maio, 2025',
    featured: true
  },
  {
    id: '3',
    title: 'Os Melhores Destinos para Viajar em 2025',
    excerpt: 'Conheça os destinos turísticos mais procurados para este ano e planeje suas férias com antecedência.',
    imageUrl: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1470&auto=format&fit=crop',
    category: 'Turismo',
    date: '21 Maio, 2025',
    featured: true
  }
];

const recentArticles = [
  {
    id: '4',
    title: 'Criptomoedas: Vale a Pena Investir Agora?',
    excerpt: 'Análise completa do mercado de criptomoedas e se este é o momento certo para investir.',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1587&auto=format&fit=crop',
    category: 'Finanças',
    date: '20 Maio, 2025'
  },
  {
    id: '5',
    title: 'Dicas para Melhorar sua Produtividade no Home Office',
    excerpt: 'Aprenda como organizar sua rotina de trabalho remoto e aumentar sua produtividade.',
    imageUrl: 'https://images.unsplash.com/photo-1584717394516-89c05989e673?q=80&w=1470&auto=format&fit=crop',
    category: 'Carreira',
    date: '19 Maio, 2025'
  },
  {
    id: '6',
    title: 'Os Benefícios da Meditação para a Saúde Mental',
    excerpt: 'Descubra como a prática regular de meditação pode melhorar sua saúde mental e qualidade de vida.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1470&auto=format&fit=crop',
    category: 'Saúde',
    date: '18 Maio, 2025'
  },
  {
    id: '7',
    title: 'Receitas Saudáveis para o Dia a Dia',
    excerpt: 'Confira estas receitas práticas e saudáveis para incluir na sua alimentação diária.',
    imageUrl: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1364&auto=format&fit=crop',
    category: 'Alimentação',
    date: '17 Maio, 2025'
  },
  {
    id: '8',
    title: 'Os Lançamentos de Filmes Mais Aguardados',
    excerpt: 'Lista completa dos filmes que serão lançados nos próximos meses e prometem ser sucesso de bilheteria.',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop',
    category: 'Entretenimento',
    date: '16 Maio, 2025'
  },
  {
    id: '9',
    title: 'Como Economizar na Conta de Energia',
    excerpt: 'Dicas práticas para reduzir o consumo de energia elétrica e economizar na conta no final do mês.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop',
    category: 'Economia Doméstica',
    date: '15 Maio, 2025'
  }
];

const popularArticles = [
  {
    id: '10',
    title: 'Os 10 Melhores Smartphones de 2025',
    date: '14 Maio, 2025'
  },
  {
    id: '11',
    title: 'Como Montar um Negócio Online do Zero',
    date: '13 Maio, 2025'
  },
  {
    id: '12',
    title: 'Exercícios para Fazer em Casa e Manter a Forma',
    date: '12 Maio, 2025'
  },
  {
    id: '13',
    title: 'Dicas para Economizar nas Compras do Mês',
    date: '11 Maio, 2025'
  },
  {
    id: '14',
    title: 'Os Melhores Cursos Online Gratuitos',
    date: '10 Maio, 2025'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner de anúncio no topo */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner position="top" className="mb-6" />
      </div>
      
      {/* Seção de artigos em destaque */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              category={article.category}
              date={article.date}
              featured={article.featured}
            />
          ))}
        </div>
      </section>
      
      {/* Banner de anúncio no meio */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="middle" className="my-8" />
      </div>
      
      {/* Seção principal com artigos recentes e barra lateral */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Artigos recentes */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  imageUrl={article.imageUrl}
                  category={article.category}
                  date={article.date}
                />
              ))}
            </div>
          </div>
          
          {/* Barra lateral com anúncios e artigos populares */}
          <Sidebar popularArticles={popularArticles} />
        </div>
      </section>
      
      {/* Banner de anúncio no rodapé */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" className="my-8" />
      </div>
      
      <Footer />
    </div>
  );
}
