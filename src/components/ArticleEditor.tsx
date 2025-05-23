import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

interface ArticleEditorProps {
  onSave: (article: ArticleData) => void;
  onPublish: (article: ArticleData) => void;
  initialData?: ArticleData;
}

export interface ArticleData {
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  status: 'draft' | 'published';
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({
  onSave,
  onPublish,
  initialData,
}) => {
  const [article, setArticle] = useState<ArticleData>(
    initialData || {
      title: '',
      slug: '',
      category: 'Economia',
      author: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      metaTitle: '',
      metaDescription: '',
      keywords: '',
      status: 'draft',
    }
  );

  const [activeTab, setActiveTab] = useState<'content' | 'seo'>('content');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setArticle((prev) => ({ ...prev, featuredImage: imageUrl }));
  };

  const generateSlug = () => {
    if (!article.title) return;
    
    const slug = article.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
    
    setArticle((prev) => ({ ...prev, slug }));
  };

  const handleSaveDraft = () => {
    onSave({ ...article, status: 'draft' });
    alert('Artigo salvo como rascunho!');
  };

  const handlePublish = () => {
    if (!article.title || !article.content || !article.featuredImage) {
      alert('Por favor, preencha pelo menos o título, conteúdo e imagem destacada antes de publicar.');
      return;
    }
    
    onPublish({ ...article, status: 'published' });
    alert('Artigo publicado com sucesso!');
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
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
                  value={article.title}
                  onChange={handleChange}
                  onBlur={generateSlug}
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
                  value={article.slug}
                  onChange={handleChange}
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
                  value={article.category}
                  onChange={handleChange}
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
                  value={article.author}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Nome do autor"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="featured-image" className="block text-sm font-medium text-gray-700">
                Imagem Destacada
              </label>
              <div className="mt-1">
                <ImageUploader 
                  onImageUpload={handleImageUpload} 
                  initialImage={article.featuredImage}
                  aspectRatio="16/9"
                />
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
                  value={article.excerpt}
                  onChange={handleChange}
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
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Conteúdo do Artigo</h3>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveTab('content')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'content'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Conteúdo
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('seo')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'seo'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  SEO
                </button>
              </div>
            </div>
            
            {activeTab === 'content' ? (
              <div className="mt-6">
                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600">
                  <div className="border-b border-gray-300 pb-2">
                    <div className="flex flex-wrap gap-2">
                      <button 
                        type="button" 
                        onClick={() => {
                          const textarea = document.getElementById('content') as HTMLTextAreaElement;
                          const start = textarea.selectionStart;
                          const end = textarea.selectionEnd;
                          const text = textarea.value;
                          const before = text.substring(0, start);
                          const after = text.substring(end);
                          const newText = before + '\n## Título\n' + after;
                          setArticle(prev => ({ ...prev, content: newText }));
                          setTimeout(() => {
                            textarea.focus();
                            textarea.selectionStart = start + 10;
                            textarea.selectionEnd = start + 16;
                          }, 0);
                        }}
                        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        Título
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                          const textarea = document.getElementById('content') as HTMLTextAreaElement;
                          const start = textarea.selectionStart;
                          const end = textarea.selectionEnd;
                          const text = textarea.value;
                          const before = text.substring(0, start);
                          const selected = text.substring(start, end);
                          const after = text.substring(end);
                          const newText = before + '**' + selected + '**' + after;
                          setArticle(prev => ({ ...prev, content: newText }));
                          setTimeout(() => {
                            textarea.focus();
                            textarea.selectionStart = end + 4;
                            textarea.selectionEnd = end + 4;
                          }, 0);
                        }}
                        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Negrito
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                          const textarea = document.getElementById('content') as HTMLTextAreaElement;
                          const start = textarea.selectionStart;
                          const end = textarea.selectionEnd;
                          const text = textarea.value;
                          const before = text.substring(0, start);
                          const selected = text.substring(start, end);
                          const after = text.substring(end);
                          const newText = before + '*' + selected + '*' + after;
                          setArticle(prev => ({ ...prev, content: newText }));
                          setTimeout(() => {
                            textarea.focus();
                            textarea.selectionStart = end + 2;
                            textarea.selectionEnd = end + 2;
                          }, 0);
                        }}
                        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        Itálico
                      </button>
                    </div>
                  </div>
                  <textarea
                    id="content"
                    name="content"
                    rows={20}
                    value={article.content}
                    onChange={handleChange}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Escreva seu artigo aqui..."
                  />
                </div>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700">
                    Meta Título
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="metaTitle"
                      id="metaTitle"
                      value={article.metaTitle}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Título para SEO (se diferente do título principal)"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Recomendado: 50-60 caracteres. Deixe em branco para usar o título principal.
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
                    Meta Descrição
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="metaDescription"
                      name="metaDescription"
                      rows={3}
                      value={article.metaDescription}
                      onChange={handleChange}
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
                      value={article.keywords}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="economia, investimentos, bolsa de valores"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Separe as palavras-chave por vírgulas. Máximo 10 palavras-chave.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Salvar como rascunho
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publicar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArticleEditor;
