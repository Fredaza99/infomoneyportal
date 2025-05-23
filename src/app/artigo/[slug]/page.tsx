'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import ArticleLayout from '@/components/ArticleLayout';

interface PageProps {
  params: {
    slug: string;
  };
}

// Dados simulados para artigos com slugs amigáveis para SEO
const articles = [
  {
    id: '1',
    slug: 'como-investir-bolsa-valores-2025',
    title: 'Como Investir na Bolsa de Valores em 2025',
    excerpt: 'Descubra as melhores estratégias para investir na bolsa de valores e maximizar seus lucros neste ano.',
    content: `
      <p>A bolsa de valores continua sendo uma das melhores opções de investimento para quem busca rentabilidade a longo prazo. Em 2025, com a economia global em recuperação após períodos de instabilidade, muitos investidores estão voltando seus olhos para o mercado de ações.</p>
      
      <h2>Por que investir na bolsa de valores?</h2>
      
      <p>Investir na bolsa de valores oferece diversas vantagens:</p>
      
      <ul>
        <li>Potencial de retornos acima da inflação e de investimentos de renda fixa</li>
        <li>Possibilidade de diversificação da carteira</li>
        <li>Participação nos lucros e crescimento das empresas</li>
        <li>Proteção patrimonial a longo prazo</li>
      </ul>
      
      <h2>Como começar a investir</h2>
      
      <p>Para quem está começando, o primeiro passo é escolher uma corretora de valores confiável. Atualmente, existem diversas opções no mercado com taxas competitivas e plataformas intuitivas para iniciantes.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop',
    category: 'Economia',
    categorySlug: 'economia',
    date: '23 Maio, 2025',
    author: 'Carlos Oliveira',
    authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop',
    relatedArticles: ['inteligencia-artificial-futuro-trabalho', 'criptomoedas-vale-pena-investir', 'dicas-economizar-compras'],
    tags: ['investimentos', 'bolsa de valores', 'finanças pessoais', 'economia', 'mercado financeiro'],
    metaDescription: 'Aprenda as melhores estratégias para investir na bolsa de valores em 2025 e maximize seus lucros com dicas de especialistas do mercado financeiro.'
  },
  {
    id: '2',
    slug: 'inteligencia-artificial-futuro-trabalho',
    title: 'Inteligência Artificial: O Futuro do Trabalho',
    excerpt: 'Como a IA está transformando o mercado de trabalho e quais profissões estarão em alta nos próximos anos.',
    content: `
      <p>A inteligência artificial (IA) está transformando rapidamente o mercado de trabalho global. À medida que algoritmos e sistemas autônomos se tornam mais sofisticados, muitas profissões estão sendo redefinidas, enquanto novas oportunidades surgem em áreas emergentes.</p>
      
      <h2>Como a IA está mudando o mercado de trabalho</h2>
      
      <p>A automação impulsionada pela IA está afetando praticamente todos os setores da economia:</p>
      
      <ul>
        <li>Tarefas repetitivas e previsíveis estão sendo automatizadas</li>
        <li>Profissionais precisam desenvolver novas habilidades para permanecer relevantes</li>
        <li>Novas profissões estão surgindo para atender às demandas da era digital</li>
        <li>A colaboração entre humanos e máquinas está se tornando o novo padrão</li>
      </ul>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813dce26?q=80&w=1632&auto=format&fit=crop',
    category: 'Tecnologia',
    categorySlug: 'tecnologia',
    date: '22 Maio, 2025',
    author: 'Ana Silva',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop',
    relatedArticles: ['como-investir-bolsa-valores-2025', 'melhores-destinos-viajar-2025', 'dicas-produtividade-home-office'],
    tags: ['inteligência artificial', 'mercado de trabalho', 'tecnologia', 'carreira', 'futuro'],
    metaDescription: 'Descubra como a inteligência artificial está transformando o mercado de trabalho e quais profissões estarão em alta nos próximos anos.'
  },
  {
    id: '3',
    slug: 'criptomoedas-vale-pena-investir',
    title: 'Criptomoedas: Vale a Pena Investir Agora?',
    excerpt: 'Análise completa do mercado de criptomoedas e se este é o momento certo para investir.',
    content: `
      <p>O mercado de criptomoedas continua a atrair a atenção de investidores em todo o mundo. Com a volatilidade característica desse tipo de ativo, muitos se perguntam: é o momento certo para investir?</p>
      
      <h2>O cenário atual das criptomoedas</h2>
      
      <p>Após períodos de grande volatilidade, o mercado de criptomoedas tem mostrado sinais de maturidade:</p>
      
      <ul>
        <li>Maior adoção institucional</li>
        <li>Regulamentações mais claras em diversos países</li>
        <li>Desenvolvimento de casos de uso reais além da especulação</li>
        <li>Tecnologias blockchain mais eficientes e sustentáveis</li>
      </ul>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1587&auto=format&fit=crop',
    category: 'Finanças',
    categorySlug: 'financas',
    date: '20 Maio, 2025',
    author: 'Rafael Mendes',
    authorImage: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1634&auto=format&fit=crop',
    relatedArticles: ['como-investir-bolsa-valores-2025', 'como-diversificar-investimentos', 'inflacao-proteger-dinheiro'],
    tags: ['criptomoedas', 'bitcoin', 'ethereum', 'investimentos digitais', 'blockchain'],
    metaDescription: 'Análise completa do mercado de criptomoedas em 2025: descubra se este é o momento certo para investir e quais moedas têm maior potencial.'
  }
];

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Encontrar o artigo com base no slug da URL
  const article = articles.find(article => article.slug === slug) || articles[0];
  
  // Encontrar artigos relacionados
  const relatedArticlesList = article.relatedArticles 
    ? article.relatedArticles.map(relSlug => articles.find(a => a.slug === relSlug)).filter(Boolean)
    : [];
  
  // Gerar metadados dinâmicos para SEO
  const pageTitle = `${article.title} | InfoMoney`;
  const pageDescription = article.metaDescription || article.excerpt;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner de anúncio no topo */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner position="top" className="mb-6" />
      </div>
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs para SEO */}
        <nav className="text-sm text-gray-500 mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="flex items-center">
              <Link href={`/${article.categorySlug}`} className="hover:text-blue-600">{article.category}</Link>
              <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li>
              <span className="text-gray-700">{article.title}</span>
            </li>
          </ol>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Conteúdo principal do artigo */}
          <article className="w-full lg:w-2/3">
            <header className="mb-8">
              <div className="text-sm text-blue-600 font-medium mb-2">
                <Link href={`/${article.categorySlug}`} className="hover:underline">
                  {article.category}
                </Link>
                <span className="mx-2">•</span>
                <span className="text-gray-500">{article.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={article.authorImage} 
                    alt={article.author} 
                    width={40} 
                    height={40} 
                    className="object-cover"
                  />
                </div>
                <span className="text-gray-700">Por <strong>{article.author}</strong></span>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 relative h-96 mb-6">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </header>
            
            {/* Conteúdo do artigo */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags do artigo para SEO */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags && article.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-gray-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            
            {/* Banner de anúncio no meio do artigo */}
            <div className="my-8">
              <AdBanner position="middle" />
            </div>
            
            {/* Seção de compartilhamento */}
            <div className="border-t border-b border-gray-200 py-6 my-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Compartilhe este artigo</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Schema.org markup para artigos de notícias */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  "headline": article.title,
                  "image": [article.imageUrl],
                  "datePublished": new Date(article.date).toISOString(),
                  "dateModified": new Date(article.date).toISOString(),
                  "author": {
                    "@type": "Person",
                    "name": article.author
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "InfoMoney",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://infomoney.example.com/logo.png"
                    }
                  },
                  "description": article.excerpt,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://infomoney.example.com/artigo/${article.slug}`
                  },
                  "keywords": article.tags?.join(", ")
                })
              }}
            />
            
            {/* Artigos relacionados */}
            {relatedArticlesList.length > 0 && (
              <div className="my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Artigos Relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticlesList.map((relatedArticle) => (
                    relatedArticle && (
                      <div key={relatedArticle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Link href={`/artigo/${relatedArticle.slug}`}>
                          <div className="aspect-w-16 aspect-h-9 relative h-40">
                            <Image
                              src={relatedArticle.imageUrl}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1">{relatedArticle.date}</p>
                          </div>
                        </Link>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </article>
          
          {/* Barra lateral */}
          <aside className="w-full lg:w-1/3 space-y-8">
            {/* Anúncio na barra lateral */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <AdBanner position="sidebar" />
            </div>
            
            {/* Newsletter */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Receba Atualizações</h3>
              <p className="text-gray-600 text-sm mb-4">
                Inscreva-se na nossa newsletter para receber as últimas notícias diretamente na sua caixa de entrada.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
            
            {/* Outro anúncio na barra lateral */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <AdBanner position="sidebar" />
            </div>
          </aside>
        </div>
      </main>
      
      {/* Banner de anúncio no rodapé */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" className="my-8" />
      </div>
      
      <Footer />
    </div>
  );
}
