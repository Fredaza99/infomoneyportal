import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Merriweather } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Fonte para títulos
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

// Fonte para texto
const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://infomoney.example.com'),
  title: {
    default: "InfoMoney - Portal de Notícias sobre Economia, Finanças e Investimentos",
    template: "%s | InfoMoney"
  },
  description: "Notícias atualizadas sobre economia, investimentos, finanças pessoais, mercado de ações, criptomoedas e dicas para economizar. Conteúdo exclusivo para investidores e empreendedores.",
  keywords: ["notícias financeiras", "economia", "investimentos", "bolsa de valores", "finanças pessoais", "criptomoedas", "dicas de economia", "mercado financeiro", "empreendedorismo", "rentabilidade"],
  authors: [{ name: "Equipe InfoMoney" }],
  category: "Finance",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://infomoney.example.com",
    siteName: "InfoMoney",
    title: "InfoMoney - Portal de Notícias sobre Economia, Finanças e Investimentos",
    description: "Notícias atualizadas sobre economia, investimentos, finanças pessoais e dicas para economizar. Conteúdo exclusivo para investidores.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InfoMoney - Portal de Notícias Financeiras"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@infomoney",
    creator: "@infomoney",
    title: "InfoMoney - Portal de Notícias sobre Economia e Finanças",
    description: "Notícias atualizadas sobre economia, investimentos e finanças pessoais.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      'pt-BR': "/",
      'en-US': "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    bing: "bing-verification-code"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${merriweather.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Meta tags para SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Equipe InfoMoney" />
        <meta name="news_keywords" content="economia, investimentos, finanças, bolsa de valores, criptomoedas" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="1 days" />
        <meta name="generator" content="Next.js" />
        
        {/* Preconnect para domínios de anúncios e analytics para melhorar a performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://adservice.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon e ícones para diferentes plataformas */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data para Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "name": "InfoMoney",
              "url": "https://infomoney.example.com",
              "logo": "https://infomoney.example.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/infomoney",
                "https://twitter.com/infomoney",
                "https://www.instagram.com/infomoney",
                "https://www.linkedin.com/company/infomoney"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-1234-5678",
                "contactType": "customer service",
                "email": "contato@infomoney.example.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Google Analytics e Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {  // Substitua 'G-XXXXXXXXXX' pelo seu ID de medição real
                page_path: window.location.pathname,
                cookie_flags: 'max-age=7200;secure;samesite=none'
              });
              
              // Google Tag Manager
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        {/* Noscript para Tag Manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
      </body>
    </html>
  );
}
