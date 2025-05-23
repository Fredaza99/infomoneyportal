import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InfoMoney - Seu Portal de Notícias e Informações",
  description: "Notícias atualizadas sobre economia, tecnologia, finanças, saúde e muito mais. Fique por dentro das últimas tendências e informações.",
  keywords: "notícias, economia, tecnologia, finanças, saúde, entretenimento, informação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta tags para SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="InfoMoney" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="InfoMoney - Seu Portal de Notícias e Informações" />
        <meta property="og:description" content="Notícias atualizadas sobre economia, tecnologia, finanças, saúde e muito mais." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://infomoney.example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Preconnect para domínios de anúncios para melhorar a performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://adservice.google.com" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Script para Analytics - importante para monitorar o tráfego do site */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Coloque aqui seu script do Google Analytics
              // Exemplo:
              // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              // })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
