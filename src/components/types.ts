interface additionalProductInfo {
  metalType: string;
  stone: string;
  size: string;
}

export interface IProduct {
  id?: string;
  name: string;
  imgUrl: string;
  price: number;
  srcSetJpg?: string;
  srcSetWebp?: string;
  className?: string;
  additionalInfo?: additionalProductInfo;
  type: string;
}

export interface IProducts {
  [id: string]: IProduct;
}

export interface ICartProducts {
  [id: string]: number;
}

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}
