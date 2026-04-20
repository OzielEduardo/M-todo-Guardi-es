/**
 * Branded Assets for Guardiões
 * These are hosted on Google Drive CDNs and configured for production use.
 */
/**
 * Helper to proxy Google Drive images through a reliable CDN proxy.
 * This ensures images load across all devices and browsers by bypassing 
 * referrer/CORS restrictions and providing a modern image format.
 */
/**
 * Helper to proxy Google Drive images through a reliable CDN proxy.
 * This ensures images load across all devices and browsers by bypassing 
 * referrer/CORS restrictions and providing a modern image format.
 */
const getProxiedURL = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=${encodeURIComponent(url)}&l=9&af&il`;

export const IMAGES = {
  LOGO: getProxiedURL("https://lh3.googleusercontent.com/d/1gNAqtTkkfhRBu5kjOUrtXaW-EZ2Qzdn5"),
  HERO_CHILD: getProxiedURL("https://lh3.googleusercontent.com/d/1gNAqtTkkfhRBu5kjOUrtXaW-EZ2Qzdn5"), 
  DORES_CHILD: getProxiedURL("https://lh3.googleusercontent.com/d/1X7CknNRJ2cPMsSpdhugmF7xf7kgDFspk"),
  LORE_BG: getProxiedURL("https://lh3.googleusercontent.com/d/1wkZ-1TKY9YoeWjUtR8-at2WPJh8JuE3v"),
  BREATHWORK: getProxiedURL("https://lh3.googleusercontent.com/d/1wzmcToHiyQrP56pG54lucHKpOC4PNcqE"),
  
  // Accessories
  PRODUCTS: {
    UNIFORME: getProxiedURL("https://lh3.googleusercontent.com/d/10IAXDFFxB9v4DX9iY9mH3pvAMn06cINt"),
    CAMISETA: getProxiedURL("https://lh3.googleusercontent.com/d/1jAAhcnjVR4xtlHYfY3M2JNT6B9ycPYpp"),
    BONE: getProxiedURL("https://lh3.googleusercontent.com/d/1DJLK3zTTh3GHvtUGcSoM2JGOvQuWrgLY"),
    KIT: getProxiedURL("https://lh3.googleusercontent.com/d/1dSc-a_U9VPnm2nWI4ishig0lH1QxKzPd"),
    ACESSORIO: getProxiedURL("https://lh3.googleusercontent.com/d/1SVNiCF7oVBiTns1lPWXp2mA9zH-8a3ul"),
    PULSEIRA: getProxiedURL("https://lh3.googleusercontent.com/d/1y8Q4z0MKxcBrI5hju8HhkldQiLxo8FJH"),
  }
};
