export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  medium: string;
  dimensions: string;
  categories: string[];
  forSale: boolean;
  price?: number;
  sold?: boolean;
}