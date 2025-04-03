
export type Category = {
  id: string;
  name: string;
};

export type Poster = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  affiliateLink: string;
  categories: string[];
  keywords: string[];
};
