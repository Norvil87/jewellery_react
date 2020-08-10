interface additionalProductInfo {
  metalType: string;
  stone: string;
  size: string;
}

export interface IProduct {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  srcSetJpg?: string;
  srcSetWebp?: string;
  className?: string;
  additionalInfo?: additionalProductInfo;
  type: string
}

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}
