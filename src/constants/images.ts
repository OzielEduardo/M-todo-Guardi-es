const getProxiedURL = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=${encodeURIComponent(url)}&l=9&af&il`;

export const IMAGES = {
  LOGO: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776750833/logo_do_kiomono_xh73io.jpg",
  HERO_CHILD: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776750833/logo_do_kiomono_xh73io.jpg", 
  DORES_CHILD: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776750949/dores_czmtus.png",
  LORE_BG: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776750957/Se%C3%A7%C3%A3o_lore_xtrfr2.png",
  BREATHWORK: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776761769/Projeto_Respirar_2_4.5_oxgur3.png",
  
  // Accessories
  PRODUCTS: {
    KIMONO_BRANCO: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776751007/Kimono_fjjace.jpg",
    KIMONO_PRETO: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776751001/Kimono_preto_ve6vjk.jpg",
    BONE_BRANCO: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1776750989/bon%C3%A9_branco_ip54xo.jpg",
    // Keep old ones for reference or delete if requested, since user said they'll add others.
    // I'll replace the old ones with the new set for a clean slate as requested.
  }
};
