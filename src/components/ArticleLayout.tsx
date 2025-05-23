import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdBanner from './AdBanner';

interface ArticleLayoutProps {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
  content: React.ReactNode;
  relatedArticles?: Array<{
    id: string;
    slug: string;
    title: string;
    image: string;
    category: string;
  }>;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  category,
  author,
  date,
  readTime,
  featuredImage,
  content,
  relatedArticles = [],
}) => {
  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href={`/${category.toLowerCase()}`} className="ml-2 text-gray-500 hover:text-gray-700">
              {category}
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 text-gray-700 font-medium truncate max-w-xs">
              {title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Top Ad Banner */}
      <div className="mb-8">
        <AdBanner position="top" className="mx-auto" />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-2 mb-3">
          <Link 
            href={`/${category.toLowerCase()}`}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
          >
            {category}
          </Link>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500 text-sm">{readTime} de leitura</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full"
              src="/images/avatar-placeholder.jpg"
              alt={author}
              width={40}
              height={40}
            />
          </div>
          <div className="text-sm">
            <p className="text-gray-900 font-medium">{author}</p>
            <div className="flex items-center text-gray-500">
              <time dateTime={date}>{date}</time>
              <span className="mx-1">•</span>
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                1.5k visualizações
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src={featuredImage}
          alt={title}
          width={1200}
          height={630}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Article Content with Ads */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {content}
          </div>

          {/* Middle Ad Banner */}
          <div className="my-8">
            <AdBanner position="middle" className="mx-auto" />
          </div>

          {/* Author Bio */}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-14 w-14 rounded-full"
                  src="/images/avatar-placeholder.jpg"
                  alt={author}
                  width={56}
                  height={56}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">{author}</h3>
                <p className="text-base text-gray-500">
                  Especialista em economia e finanças com mais de 10 anos de experiência no mercado financeiro.
                </p>
                <div className="mt-2 flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Article Tags */}
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-500 mb-3">TAGS</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                economia
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                investimentos
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                bolsa de valores
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                finanças
              </Link>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-500 mb-3">COMPARTILHE</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5 5.25a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM6 9.75C6 9.33579 6.33579 9 6.75 9h10.5c.4142 0 .75.33579.75.75s-.3358.75-.75.75H6.75C6.33579 10.5 6 10.1642 6 9.75zM6.75 13.5c-.41421 0-.75.3358-.75.75s.33579.75.75.75h10.5c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75H6.75zM6 18.75c0-.4142.33579-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5c-.41421 0-.75-.3358-.75-.75zM12.75 6h-1.5v1.5h1.5V6zM11.25 9h1.5v1.5h-1.5V9zm0 3.75h1.5v1.5h-1.5v-1.5zm1.5 3.75h-1.5v1.5h1.5v-1.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Ad Banner */}
          <div className="mt-10">
            <AdBanner position="bottom" className="mx-auto" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          {/* Sidebar Ad */}
          <div className="mb-8 sticky top-24">
            <AdBanner position="sidebar" className="mx-auto" />
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Newsletter InfoMoney</h3>
            <p className="text-gray-600 mb-4">Receba as principais notícias sobre economia e investimentos diretamente no seu e-mail.</p>
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Seu melhor e-mail"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Inscrever-se
              </button>
              <p className="text-xs text-gray-500">
                Ao se inscrever, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Artigos Relacionados</h3>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link key={article.id} href={`/artigo/${article.slug}`} className="block group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 rounded overflow-hidden mr-3">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-blue-600 mb-1">{article.category}</p>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                          {article.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Popular Tags */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tags Populares</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                economia
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                investimentos
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                bolsa de valores
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                finanças pessoais
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                criptomoedas
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                poupança
              </Link>
              <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200">
                mercado imobiliário
              </Link>
            </div>
          </div>

          {/* Bottom Sidebar Ad */}
          <div className="mb-8">
            <AdBanner position="sidebar" className="mx-auto" />
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ArticleLayout;
