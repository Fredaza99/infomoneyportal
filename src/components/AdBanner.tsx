'use client';

import React from 'react';
import AdComponent from './AdComponent';

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, className = '' }) => {
  // Diferentes slots de anúncios para diferentes posições
  const getAdSlot = () => {
    switch (position) {
      case 'top':
        return 'top-banner-123456';
      case 'middle':
        return 'middle-banner-123456';
      case 'bottom':
        return 'bottom-banner-123456';
      case 'sidebar':
        return 'sidebar-banner-123456';
      default:
        return 'default-banner-123456';
    }
  };

  // Diferentes formatos e estilos para diferentes posições
  const getAdFormat = () => {
    switch (position) {
      case 'sidebar':
        return 'vertical';
      case 'top':
      case 'bottom':
        return 'horizontal';
      case 'middle':
        return 'rectangle';
      default:
        return 'auto';
    }
  };

  // Estilos específicos para diferentes posições
  const getAdStyle = () => {
    switch (position) {
      case 'sidebar':
        return { display: 'block', width: '300px', height: '600px' };
      case 'top':
      case 'bottom':
        return { display: 'block', width: '100%', height: '90px' };
      case 'middle':
        return { display: 'block', width: '300px', height: '250px', margin: '0 auto' };
      default:
        return { display: 'block', width: '100%' };
    }
  };

  return (
    <div className={`ad-banner ad-banner-${position} ${className}`}>
      <AdComponent 
        adSlot={getAdSlot()} 
        format={getAdFormat() as any} 
        style={getAdStyle()} 
      />
    </div>
  );
};

export default AdBanner;
