import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerenciar Artigos | InfoMoney Admin',
  description: 'Gerenciamento de artigos do portal InfoMoney',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ArticlesPage() {
  // Dados de exemplo - em uma implementação real, estes viriam de um banco de dados
  const articles = [
    {
      id: '1',
      title: 'Como Investir na Bolsa de Valores em 2025',
      category: 'Investimentos',
      author: 'João Silva',
      date: '2025-05-20',
      status: 'Publicado',
    },
    {
      id: '2',
      title: 'Os Melhores Investimentos para Iniciantes',
      category: 'Finanças Pessoais',
      author: 'Maria Oliveira',
      date: '2025-05-18',
      status: 'Publicado',
    },
    {
      id: '3',
      title: 'Análise do Mercado Financeiro: Tendências para 2026',
      category: 'Economia',
      author: 'Carlos Santos',
      date: '2025-05-15',
      status: 'Rascunho',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 admin-panel">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/admin" className="text-xl font-bold text-blue-800">
                  InfoMoney Admin
                </Link>
              </div>
              <div className="ml-6 flex space-x-8">
                <Link href="/admin/artigos" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Artigos
                </Link>
                <Link href="/admin/categorias" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Categorias
                </Link>
                <Link href="/admin/analytics" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Analytics
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Voltar ao site
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Gerenciar Artigos</h1>
            <Link href="/admin/artigos/novo" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Novo Artigo
            </Link>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Todos os Artigos
                  </h3>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Buscar artigos..."
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul className="divide-y divide-gray-200">
              {articles.map((article) => (
                <li key={article.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-blue-600 truncate">{article.title}</p>
                          <div className="flex mt-1">
                            <p className="text-xs text-gray-500 mr-2">
                              <span className="font-semibold">Categoria:</span> {article.category}
                            </p>
                            <p className="text-xs text-gray-500 mr-2">
                              <span className="font-semibold">Autor:</span> {article.author}
                            </p>
                            <p className="text-xs text-gray-500">
                              <span className="font-semibold">Data:</span> {article.date}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          article.status === 'Publicado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {article.status}
                        </span>
                        <div className="ml-4 flex-shrink-0 flex">
                          <Link href={`/admin/artigos/editar/${article.id}`} className="mr-2 text-blue-600 hover:text-blue-900">
                            Editar
                          </Link>
                          <button className="text-red-600 hover:text-red-900">
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Anterior
                </a>
                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Próximo
                </a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Mostrando <span className="font-medium">1</span> a <span className="font-medium">3</span> de <span className="font-medium">3</span> resultados
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Anterior</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      1
                    </a>
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Próximo</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
