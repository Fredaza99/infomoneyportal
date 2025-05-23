"use client";

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ArticleEditor from '@/components/ArticleEditor';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Novo Artigo | InfoMoney Admin',
  description: 'Criar novo artigo para o portal InfoMoney',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewArticlePage() {
  const router = useRouter();

  const handleSaveArticle = (article: any) => {
    console.log('Artigo salvo como rascunho:', article);
    // Em uma implementação real, você enviaria os dados para uma API
    alert('Artigo salvo como rascunho com sucesso!');
  };

  const handlePublishArticle = (article: any) => {
    console.log('Artigo publicado:', article);
    // Em uma implementação real, você enviaria os dados para uma API
    alert('Artigo publicado com sucesso!');
    router.push('/admin/artigos');
  };

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
            <h1 className="text-2xl font-semibold text-gray-900">Novo Artigo</h1>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <ArticleEditor 
                onSave={handleSaveArticle}
                onPublish={handlePublishArticle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
