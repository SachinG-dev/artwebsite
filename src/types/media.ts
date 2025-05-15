export interface Media {
  id: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  categories?: string[];
  date?: string;
}