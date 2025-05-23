'use client';

import React from 'react';
import Link from 'next/link';
import AdBanner from './AdBanner';

interface SidebarProps {
  popularArticles: Array<{
    id: string;
    title: string;
    date: string;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ popularArticles }) => {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Anúncio na barra lateral */}
      <div className="mb-8">
        <AdBanner position="sidebar" />
      </div>

      {/* Artigos populares */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Artigos Populares
        </h3>
        <ul className="space-y-4">
          {popularArticles.map((article) => (
            <li key={article.id} className="pb-4 border-b border-gray-100 last:border-0">
              <Link href={`/artigo/${article.id}`}>
                <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                  {article.title}
                </h4>
              </Link>
              <p className="text-sm text-gray-500 mt-1">{article.date}</p>
            </li>
          ))}
        </ul>
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
      <div className="mt-8">
        <AdBanner position="sidebar" />
      </div>
    </aside>
  );
};

export default Sidebar;
