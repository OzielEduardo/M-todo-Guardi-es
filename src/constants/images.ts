/**
 * Branded Assets for Guardiões
 * Using a specialized image proxy (Photon) with the thumbnail endpoint to ensure 
 * maximum visibility across all devices and browsers, including incognito mode.
 */

const getProxiedURL = (id: string) => {
  // Use Photon (i0.wp.com) which is highly resilient for proxying Drive assets
  return `https://i0.wp.com/drive.google.com/thumbnail?id=${id}&sz=w1200`;
};

export const IMAGES = {
  LOGO: getProxiedURL("1gNAqtTkkfhRBu5kjOUrtXaW-EZ2Qzdn5"),
  HERO_CHILD: getProxiedURL("1gNAqtTkkfhRBu5kjOUrtXaW-EZ2Qzdn5"), 
  DORES_CHILD: getProxiedURL("1X7CknNRJ2cPMsSpdhugmF7xf7kgDFspk"),
  LORE_BG: getProxiedURL("1wkZ-1TKY9YoeWjUtR8-at2WPJh8JuE3v"),
  BREATHWORK: getProxiedURL("1wzmcToHiyQrP56pG54lucHKpOC4PNcqE"),
  
  // Accessories
  PRODUCTS: {
    UNIFORME: getProxiedURL("10IAXDFFxB9v4DX9iY9mH3pvAMn06cINt"),
    CAMISETA: getProxiedURL("1jAAhcnjVR4xtlHYfY3M2JNT6B9ycPYpp"),
    BONE: getProxiedURL("1DJLK3zTTh3GHvtUGcSoM2JGOvQuWrgLY"),
    KIT: getProxiedURL("1dSc-a_U9VPnm2nWI4ishig0lH1QxKzPd"),
    ACESSORIO: getProxiedURL("1SVNiCF7oVBiTns1lPWXp2mA9zH-8a3ul"),
    PULSEIRA: getProxiedURL("1y8Q4z0MKxcBrI5hju8HhkldQiLxo8FJH"),
  }
};
