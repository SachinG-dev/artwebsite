export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatarUrl?: string;
  type?: 'course' | 'artwork' | 'commission';
  course?: string;
}