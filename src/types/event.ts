export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  rsvpLink?: string;
  type?: 'exhibition' | 'workshop' | 'talk' | 'other';
}