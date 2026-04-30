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
    CAMISA_BRANCA: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1777519561/Camisa_Branca_blnzol.png",
    CAMISA_PRETA: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1777519561/Camisa_preta_hbhuqt.png",
    CAMISA_VERMELHA: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1777519561/Camisa_Vermelha_quqsmz.png",
    CAMISA_AZUL: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1777519561/Camisa_Azul_Marinho_gk2ylo.png",
    CAMISA_CINZA: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1777519561/Camisa_Cinza_orxkjs.png",
    CAMISA_MARROM: "https://res.cloudinary.com/dtkawkqk3/image/upload/v1777519561/Camisa_Marrom_xcsx4b.png",
  }
};
