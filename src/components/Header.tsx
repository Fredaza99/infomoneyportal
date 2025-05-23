'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              InfoMoney
            </Link>
            <span className="ml-2 text-xs bg-yellow-400 text-blue-900 px-2 py-1 rounded-md font-semibold">
              PREMIUM
            </span>
          </div>

          {/* Menu para dispositivos móveis */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/noticias" className="hover:text-yellow-300 transition-colors">
              Notícias
            </Link>
            <Link href="/economia" className="hover:text-yellow-300 transition-colors">
              Economia
            </Link>
            <Link href="/tecnologia" className="hover:text-yellow-300 transition-colors">
              Tecnologia
            </Link>
            <Link href="/esportes" className="hover:text-yellow-300 transition-colors">
              Esportes
            </Link>
            <Link href="/entretenimento" className="hover:text-yellow-300 transition-colors">
              Entretenimento
            </Link>
          </nav>
        </div>

        {/* Menu móvel expandido */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/noticias"
                  className="block hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/economia"
                  className="block hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Economia
                </Link>
              </li>
              <li>
                <Link
                  href="/tecnologia"
                  className="block hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link
                  href="/esportes"
                  className="block hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Esportes
                </Link>
              </li>
              <li>
                <Link
                  href="/entretenimento"
                  className="block hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entretenimento
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
