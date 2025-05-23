import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novo Artigo | InfoMoney Admin',
  description: 'Criar novo artigo para o portal InfoMoney',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewArticlePage() {
  return (
    <div className="min-h-screen bg-gray-100">
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
            <div className="flex space-x-3">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Salvar como rascunho
              </button>
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Publicar
              </button>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                  <div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Informações do Artigo</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Preencha as informações básicas do artigo.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Título
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Digite o título do artigo"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                          Slug (URL)
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            infomoney.com/artigo/
                          </span>
                          <input
                            type="text"
                            name="slug"
                            id="slug"
                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                            placeholder="titulo-do-artigo"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                          Categoria
                        </label>
                        <div className="mt-1">
                          <select
                            id="category"
                            name="category"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          >
                            <option>Economia</option>
                            <option>Investimentos</option>
                            <option>Finanças Pessoais</option>
                            <option>Mercado de Ações</option>
                            <option>Criptomoedas</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                          Autor
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="author"
                            id="author"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Nome do autor"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="featured-image" className="block text-sm font-medium text-gray-700">
                          Imagem Destacada
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                              >
                                <span>Enviar um arquivo</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">ou arraste e solte</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                          Resumo
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="excerpt"
                            name="excerpt"
                            rows={3}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Um breve resumo do artigo (será exibido nos resultados de busca)"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Breve descrição do artigo. Máximo 160 caracteres.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Conteúdo do Artigo</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Escreva o conteúdo completo do seu artigo.
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600">
                        <div className="border-b border-gray-300 pb-2">
                          <div className="flex flex-wrap gap-2">
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                              </svg>
                              Título
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              Negrito
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                              </svg>
                              Itálico
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              Link
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                              </svg>
                              Lista
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              Imagem
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                              Citação
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Vídeo
                            </button>
                            <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                              </svg>
                              Código
                            </button>
                          </div>
                        </div>
                        <textarea
                          id="content"
                          name="content"
                          rows={20}
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          placeholder="Escreva seu artigo aqui..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">SEO e Configurações</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Otimize seu artigo para mecanismos de busca.
                      </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">
                          Meta Título
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="meta-title"
                            id="meta-title"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Título para SEO (se diferente do título principal)"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Recomendado: 50-60 caracteres. Deixe em branco para usar o título principal.
                        </p>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">
                          Meta Descrição
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="meta-description"
                            name="meta-description"
                            rows={3}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Descrição para SEO (se diferente do resumo)"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Recomendado: 150-160 caracteres. Deixe em branco para usar o resumo.
                        </p>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                          Palavras-chave
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="keywords"
                            id="keywords"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="economia, investimentos, bolsa de valores"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Separe as palavras-chave por vírgulas. Máximo 10 palavras-chave.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                    <Link href="/admin/artigos" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Cancelar
                    </Link>
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
