'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import AdBanner from '@/components/AdBanner';
import Sidebar from '@/components/Sidebar';

// Dados simulados para artigos de economia
const economyArticles = [
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
    id: '4',
    title: 'Criptomoedas: Vale a Pena Investir Agora?',
    excerpt: 'Análise completa do mercado de criptomoedas e se este é o momento certo para investir.',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1587&auto=format&fit=crop',
    category: 'Finanças',
    date: '20 Maio, 2025'
  },
  {
    id: '13',
    title: 'Dicas para Economizar nas Compras do Mês',
    excerpt: 'Aprenda estratégias eficientes para reduzir seus gastos mensais com compras sem abrir mão da qualidade.',
    imageUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1472&auto=format&fit=crop',
    category: 'Economia Doméstica',
    date: '11 Maio, 2025'
  },
  {
    id: '15',
    title: 'Planejamento Financeiro: Como Organizar suas Finanças',
    excerpt: 'Um guia completo para organizar suas finanças pessoais e alcançar seus objetivos financeiros.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1472&auto=format&fit=crop',
    category: 'Finanças Pessoais',
    date: '9 Maio, 2025'
  },
  {
    id: '16',
    title: 'Mercado Imobiliário: Tendências para 2025',
    excerpt: 'Análise das principais tendências do mercado imobiliário e previsões para os próximos meses.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1473&auto=format&fit=crop',
    category: 'Imóveis',
    date: '8 Maio, 2025'
  },
  {
    id: '17',
    title: 'Como Diversificar seus Investimentos',
    excerpt: 'Entenda a importância da diversificação e aprenda a montar uma carteira de investimentos equilibrada.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop',
    category: 'Investimentos',
    date: '7 Maio, 2025'
  },
  {
    id: '18',
    title: 'Inflação: Como Proteger seu Dinheiro',
    excerpt: 'Estratégias para proteger seu patrimônio dos efeitos da inflação e manter o poder de compra.',
    imageUrl: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop',
    category: 'Economia',
    date: '6 Maio, 2025'
  },
  {
    id: '19',
    title: 'Fundos Imobiliários: Um Guia para Iniciantes',
    excerpt: 'Tudo o que você precisa saber para começar a investir em fundos imobiliários com segurança.',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1470&auto=format&fit=crop',
    category: 'Investimentos',
    date: '5 Maio, 2025'
  }
];

const popularArticles = [
  {
    id: '11',
    title: 'Como Montar um Negócio Online do Zero',
    date: '13 Maio, 2025'
  },
  {
    id: '13',
    title: 'Dicas para Economizar nas Compras do Mês',
    date: '11 Maio, 2025'
  },
  {
    id: '15',
    title: 'Planejamento Financeiro: Como Organizar suas Finanças',
    date: '9 Maio, 2025'
  },
  {
    id: '17',
    title: 'Como Diversificar seus Investimentos',
    date: '7 Maio, 2025'
  },
  {
    id: '18',
    title: 'Inflação: Como Proteger seu Dinheiro',
    date: '6 Maio, 2025'
  }
];

export default function EconomyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner de anúncio no topo */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner position="top" className="mb-6" />
      </div>
      
      {/* Cabeçalho da página */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Economia</h1>
          <p className="text-xl max-w-3xl">
            Notícias, análises e dicas sobre economia, finanças, investimentos e mercado financeiro para ajudar você a tomar melhores decisões.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Artigos da categoria */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos de Economia</h2>
            
            {/* Artigo em destaque */}
            <div className="mb-8">
              <ArticleCard
                key={economyArticles[0].id}
                id={economyArticles[0].id}
                title={economyArticles[0].title}
                excerpt={economyArticles[0].excerpt}
                imageUrl={economyArticles[0].imageUrl}
                category={economyArticles[0].category}
                date={economyArticles[0].date}
                featured={true}
              />
            </div>
            
            {/* Banner de anúncio no meio */}
            <div className="my-8">
              <AdBanner position="middle" />
            </div>
            
            {/* Lista de artigos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {economyArticles.slice(1).map((article) => (
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
            
            {/* Paginação */}
            <div className="flex justify-center mt-10">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-md"
                >
                  Anterior
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-blue-600 border border-blue-600 text-sm font-medium text-white hover:bg-blue-700"
                >
                  1
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-md"
                >
                  Próxima
                </a>
              </nav>
            </div>
          </div>
          
          {/* Barra lateral */}
          <Sidebar popularArticles={popularArticles} />
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
