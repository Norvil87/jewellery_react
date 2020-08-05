import { IProduct } from "./types";
import images from "./resource";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Necklace with amethyst",
    imgUrl: images.purpleGemstoneNecklace_1x_jpg,
    srcSetJpg: `${images.purpleGemstoneNecklace_1x_jpg} 1x, ${images.purpleGemstoneNecklace_2x_jpg} 2x`,
    //srcSetWebp: "../img/products/purple-gemstone-necklace@1x.webp 1x, ../img/products/purple-gemstone-necklace@2x.webp 2x",
    price: 145,
    additionalInfo: {
      metalType: 'silver',
      stone: 'amethyst',
      size: "18'/20'" 
    }
  },
  {
    id: 2,
    name: "Layered сhoker",
    imgUrl: images.layeredChokerNecklace_1x_jpg,
    srcSetJpg: `${images.layeredChokerNecklace_1x_jpg} 1x, ${images.layeredChokerNecklace_2x_jpg} 2x`,
    //srcSetWebp: "../../img/products/layered-choker-necklace@1x.webp 1x, ../../img/products/layered-choker-necklace@2x.webp 2x",
    price: 115,
    additionalInfo: {
      metalType: 'silver',
      stone: 'none',
      size: "16'/18'" 
    }
  },
  {
    id: 3,
    name: "Gold chain",
    imgUrl: images.daintyGoldNecklace_1x_jpg,
    srcSetJpg: `${images.daintyGoldNecklace_1x_jpg} 1x, ${images.daintyGoldNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/dainty-gold-necklace@1x.webp 1x, img/products/dainty-gold-necklace@2x.webp 2x",
    price: 215,
    additionalInfo: {
      metalType: 'gold',
      stone: 'none',
      size: "19'/21'" 
    }
  },
  {
    id: 4,
    name: "Galaxy earrings",
    imgUrl: images.galaxyEarrings_1x_jpg,
    srcSetJpg: `${images.galaxyEarrings_1x_jpg} 1x, ${images.galaxyEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 95,
    additionalInfo: {
      metalType: 'silver',
      stone: 'none',
      size: "15'/17'" 
    }
  },
  {
    id: 5,
    name: "Double pearl earrings",
    imgUrl: images.doublePearlEarrings_1x_jpg,
    srcSetJpg: `${images.doublePearlEarrings_1x_jpg} 1x, ${images.doublePearlEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 115,
    additionalInfo: {
      metalType: 'silver',
      stone: 'pearl',
      size: "20'/22'" 
    }
  },
  {
    id: 6,
    name: "Choker with gold bead",
    imgUrl: images.blackChokerGoldBead_1x_jpg,
    srcSetJpg: `${images.blackChokerGoldBead_1x_jpg} 1x, ${images.blackChokerGoldBead_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 55,
    additionalInfo: {
      metalType: 'silver/gold',
      stone: 'none',
      size: "18'/23'" 
    }
  },
  {
    id: 7,
    name: "Gold layered necklace",
    imgUrl: images.goldLayeredNecklace_1x_jpg,
    srcSetJpg: `${images.goldLayeredNecklace_1x_jpg} 1x, ${images.goldLayeredNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 155,
    additionalInfo: {
      metalType: 'gold',
      stone: 'none',
      size: "14'/19'" 
    }
  },
  {
    id: 8,
    name: "Blue gemstone pendant",
    imgUrl: images.blueGemstonePendant_1x_jpg,
    srcSetJpg: `${images.blueGemstonePendant_1x_jpg} 1x, ${images.blueGemstonePendant_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 105,
    additionalInfo: {
      metalType: 'silver',
      stone: 'gemstone',
      size: "15'/18'" 
    }
  },
  {
    id: 9,
    name: "Boho earrings",
    imgUrl: images.bohoEarrings_1x_jpg,
    srcSetJpg: `${images.bohoEarrings_1x_jpg} 1x, ${images.bohoEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 75,
    additionalInfo: {
      metalType: 'silver',
      stone: 'none',
      size: "16'/19'" 
    }
  },
  {
    id: 10,
    name: "Gold bird necklace",
    imgUrl: images.birdNecklace_1x_jpg,
    srcSetJpg: `${images.birdNecklace_1x_jpg} 1x, ${images.birdNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 135,
    additionalInfo: {
      metalType: 'gold',
      stone: 'none',
      size: "18'/20'" 
    }
  },
  {
    id: 11,
    name: "Black leather choker",
    imgUrl: images.blackLeatherChokerNecklace_1x_jpg,
    srcSetJpg: `${images.blackLeatherChokerNecklace_1x_jpg} 1x, ${images.blackLeatherChokerNecklace_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 85,
    additionalInfo: {
      metalType: 'silver',
      stone: 'none',
      size: "12'/17'" 
    }
  },
  {
    id: 12,
    name: "Elephant earrings",
    imgUrl: images.elephantEarrings_1x_jpg,
    srcSetJpg: `${images.elephantEarrings_1x_jpg} 1x, ${images.elephantEarrings_2x_jpg} 2x`,
    //srcSetWebp: "img/products/galaxy-earrings@1x.webp 1x, img/products/galaxy-earrings@2x.webp 2x",
    price: 95,
    additionalInfo: {
      metalType: 'silver',
      stone: 'none',
      size: "24'/28'" 
    }
  },
];
