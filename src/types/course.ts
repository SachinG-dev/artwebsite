export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  startDate: string;
  maxStudents: number;
  spotsLeft: number;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
}