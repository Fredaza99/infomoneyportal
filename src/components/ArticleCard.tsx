'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  category,
  date,
  featured = false,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg ${featured ? 'transform hover:-translate-y-2' : 'hover:-translate-y-1'}`}>
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute top-0 left-0 m-3">
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <Link href={`/artigo/${id}`}>
          <h3 className={`font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          href={`/artigo/${id}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
        >
          Ler mais
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
