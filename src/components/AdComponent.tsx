'use client';

import React, { useEffect, useState } from 'react';
import AdSense from 'react-adsense';

interface AdComponentProps {
  adSlot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

// ID do cliente Google AdSense - Substitua pelo seu ID real quando for publicar o site
const ADSENSE_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX';

// Mapeamento de slots de anúncios para diferentes posições
const AD_SLOTS = {
  'top-banner': '1234567890',        // Banner horizontal no topo (728x90)
  'middle-banner': '2345678901',      // Banner retangular no meio (300x250)
  'bottom-banner': '3456789012',      // Banner horizontal no rodapé (728x90)
  'sidebar-top': '4567890123',        // Banner vertical na barra lateral superior (300x600)
  'sidebar-bottom': '5678901234',     // Banner retangular na barra lateral inferior (300x250)
  'in-article': '6789012345',         // Banner no meio do artigo (468x60)
  'mobile-banner': '7890123456',      // Banner para dispositivos móveis (320x50)
};

const AdComponent: React.FC<AdComponentProps> = ({ 
  adSlot, 
  format = 'auto', 
  style = { display: 'block', width: '100%' } 
}) => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  
  // Carrega os scripts do Google AdSense quando o componente é montado
  useEffect(() => {
    try {
      // Verifica se o script do AdSense já existe
      if (typeof window !== 'undefined' && !window.document.getElementById('google-adsense-script')) {
        // Cria e adiciona o script do Google AdSense
        const script = document.createElement('script');
        script.id = 'google-adsense-script';
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
        
        // Detecta se o usuário está usando bloqueador de anúncios
        setTimeout(() => {
          if (document.querySelector('ins.adsbygoogle')?.getAttribute('data-ad-status') === 'unfilled') {
            setAdBlockDetected(true);
          }
        }, 3000);
      }
    } catch (error) {
      console.error('Erro ao carregar o script do AdSense:', error);
    }
    
    // Adiciona o evento de carregamento de anúncios para analytics
    window.addEventListener('load', () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Erro ao carregar anúncios:', e);
      }
    });
    
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  // Seleciona o slot correto com base no parâmetro adSlot ou usa um slot padrão
  const getAdSlot = () => {
    return AD_SLOTS[adSlot as keyof typeof AD_SLOTS] || adSlot;
  };

  return (
    <div className="ad-container my-4">
      {/* Mensagem de publicidade (obrigatória em muitos países) */}
      <div className="text-xs text-gray-500 text-center mb-1">Publicidade</div>
      
      {adBlockDetected ? (
        // Mensagem amigável para usuários com bloqueador de anúncios
        <div className="bg-gray-100 border border-gray-200 p-4 text-center text-sm text-gray-600">
          <p className="mb-2 font-medium">Parece que você está usando um bloqueador de anúncios.</p>
          <p>Nosso conteúdo é gratuito graças aos anúncios. Considere nos apoiar desativando seu bloqueador.</p>
        </div>
      ) : (
        // Componente de anúncio do Google AdSense
        <AdSense.Google
          client={ADSENSE_CLIENT_ID}
          slot={getAdSlot()}
          style={style}
          format={format}
          responsive="true"
        />
      )}
    </div>
  );
};

// Adiciona uma declaração global para o AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default AdComponent;
