declare module 'react-adsense' {
  import React from 'react';

  interface AdSenseGoogleProps {
    client: string;
    slot: string;
    format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
    style?: React.CSSProperties;
    responsive?: string | boolean;
    className?: string;
  }

  interface AdSense {
    Google: React.FC<AdSenseGoogleProps>;
  }

  const AdSense: AdSense;
  export default AdSense;
}
