import { IProducts, IFaq } from "./types";
import images from "./resource";

export const products: IProducts = {
  1: {
    name: "Necklace with amethyst",
    imgUrl: images.purpleGemstoneNecklace_1x_jpg,
    srcSetJpg: `${images.purpleGemstoneNecklace_1x_jpg} 1x, ${images.purpleGemstoneNecklace_2x_jpg} 2x`,
    //srcSetWebp: "../img/products/purple-gemstone-necklace@1x.webp 1x, ../img/products/purple-gemstone-necklace@2x.webp 2x",
    price: 145,
    type: "necklace",
    additionalInfo: {
      metalType: "silver",
      stone: "amethyst",
      size: "18'/20'",
    },
  },
  2: {
    name: "Layered сhoker",
    imgUrl: images.layeredChokerNecklace_1x_jpg,
    srcSetJpg: `${images.layeredChokerNecklace_1x_jpg} 1x, ${images.layeredChokerNecklace_2x_jpg} 2x`,
    //srcSetWebp: "../../img/products/layered-choker-necklace@1x.webp 1x, ../../img/products/layered-choker-necklace@2x.webp 2x",
    price: 115,
    type: "choker",
    additionalInfo: {
      metalType: "silver",
      stone: "none",
      size: "16'/18'",
    },
  },
  3: {
    name: "Gold chain",
    imgUrl: images.daintyGoldNecklace_1x_jpg,
    srcSetJpg: `${images.daintyGoldNecklace_1x_jpg} 1x, ${images.daintyGoldNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/dainty-gold-necklace@1x.webp 1x, img/products/dainty-gold-necklace@2x.webp 2x",
    price: 215,
    type: "necklace",
    additionalInfo: {
      metalType: "gold",
      stone: "none",
      size: "19'/21'",
    },
  },
  4: {
    name: "Galaxy earrings",
    imgUrl: images.galaxyEarrings_1x_jpg,
    srcSetJpg: `${images.galaxyEarrings_1x_jpg} 1x, ${images.galaxyEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 95,
    type: "earrings",
    additionalInfo: {
      metalType: "silver",
      stone: "none",
      size: "15'/17'",
    },
  },
  5: {
    name: "Double pearl earrings",
    imgUrl: images.doublePearlEarrings_1x_jpg,
    srcSetJpg: `${images.doublePearlEarrings_1x_jpg} 1x, ${images.doublePearlEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 115,
    type: "earrings",
    additionalInfo: {
      metalType: "silver",
      stone: "pearl",
      size: "20'/22'",
    },
  },
  6: {
    name: "Choker with gold bead",
    imgUrl: images.blackChokerGoldBead_1x_jpg,
    srcSetJpg: `${images.blackChokerGoldBead_1x_jpg} 1x, ${images.blackChokerGoldBead_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 55,
    type: "choker",
    additionalInfo: {
      metalType: "silver/gold",
      stone: "none",
      size: "18'/23'",
    },
  },
  7: {
    name: "Gold layered necklace",
    imgUrl: images.goldLayeredNecklace_1x_jpg,
    srcSetJpg: `${images.goldLayeredNecklace_1x_jpg} 1x, ${images.goldLayeredNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 155,
    type: "necklace",
    additionalInfo: {
      metalType: "gold",
      stone: "none",
      size: "14'/19'",
    },
  },
  8: {
    name: "Blue gemstone pendant",
    imgUrl: images.blueGemstonePendant_1x_jpg,
    srcSetJpg: `${images.blueGemstonePendant_1x_jpg} 1x, ${images.blueGemstonePendant_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 105,
    type: "necklace",
    additionalInfo: {
      metalType: "silver",
      stone: "gemstone",
      size: "15'/18'",
    },
  },
  9: {
    name: "Boho earrings",
    imgUrl: images.bohoEarrings_1x_jpg,
    srcSetJpg: `${images.bohoEarrings_1x_jpg} 1x, ${images.bohoEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 75,
    type: "earrings",
    additionalInfo: {
      metalType: "silver",
      stone: "none",
      size: "16'/19'",
    },
  },
  10: {
    name: "Gold bird necklace",
    imgUrl: images.birdNecklace_1x_jpg,
    srcSetJpg: `${images.birdNecklace_1x_jpg} 1x, ${images.birdNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 135,
    type: "necklace",
    additionalInfo: {
      metalType: "gold",
      stone: "none",
      size: "18'/20'",
    },
  },
  11: {
    name: "Black leather choker",
    imgUrl: images.blackLeatherChokerNecklace_1x_jpg,
    srcSetJpg: `${images.blackLeatherChokerNecklace_1x_jpg} 1x, ${images.blackLeatherChokerNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 85,
    type: "choker",
    additionalInfo: {
      metalType: "silver",
      stone: "none",
      size: "12'/17'",
    },
  },
  12: {
    name: "Elephant earrings",
    imgUrl: images.elephantEarrings_1x_jpg,
    srcSetJpg: `${images.elephantEarrings_1x_jpg} 1x, ${images.elephantEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 95,
    type: "earrings",
    additionalInfo: {
      metalType: "silver",
      stone: "none",
      size: "24'/28'",
    },
  },
};

export const faqData: IFaq[] = [
  {
    id: 0,
    question: "What materials are the jewellery made of?",
    answer:
      "Our jewellerry is made of solid gold, silver or leather. Also, some jewellery contains precious and semiprecious stones and crystals.",
  },
  {
    id: 1,
    question: "Which countries do you deliver to?",
    answer: "We currently work mostly with the USA, EU countries and Russia",
  },
  {
    id: 2,
    question: "What are the payment methods?",
    answer:
      "We accept all common credit cards like Visa and Mastercard as well as we can provide you with bank invoice",
  },
  {
    id: 3,
    question: "Can I return the jewellery if it didn’t fit me?",
    answer: "Yes, all products can be returned in 14-days term with no questions asked",
  },
];
