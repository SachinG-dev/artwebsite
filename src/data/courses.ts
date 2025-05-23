import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'CRS001',
    title: 'Fundamentals of Oil Painting',
    description: 'Learn the essential techniques of oil painting, from color mixing to brush handling, in this comprehensive beginner course.',
    imageUrl: 'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 350,
    duration: '8 weeks (2 hours per week)',
    startDate: 'January 15, 2025',
    maxStudents: 12,
    spotsLeft: 5,
    level: 'beginner',
  },
  {
    id: 'CRS002',
    title: 'Advanced Portrait Techniques',
    description: 'Take your portrait painting skills to the next level with advanced techniques for capturing expression, likeness, and character.',
    imageUrl: 'https://images.pexels.com/photos/7108307/pexels-photo-7108307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 425,
    duration: '6 weeks (3 hours per week)',
    startDate: 'February 3, 2025',
    maxStudents: 8,
    spotsLeft: 2,
    level: 'advanced',
  },
  {
    id: 'CRS003',
    title: 'Landscape Painting in the Field',
    description: 'Experience the joy of plein air painting while learning techniques to capture light, atmosphere, and the essence of landscapes.',
    imageUrl: 'https://images.pexels.com/photos/6501751/pexels-photo-6501751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 375,
    duration: '4 weekends (full day)',
    startDate: 'April 5, 2025',
    maxStudents: 10,
    spotsLeft: 8,
    level: 'intermediate',
  },
  {
    id: 'CRS004',
    title: 'Abstract Expression Workshop',
    description: 'Free your creativity through abstract expression, exploring color, form, and emotion without the constraints of representation.',
    imageUrl: 'https://images.pexels.com/photos/7708833/pexels-photo-7708833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 275,
    duration: '2 days intensive (9am-4pm)',
    startDate: 'March 15, 2025',
    maxStudents: 15,
    spotsLeft: 7,
    level: 'all-levels',
  },
  {
    id: 'CRS005',
    title: 'Mixed Media Exploration',
    description: 'Discover the creative possibilities of combining different media and techniques in this experimental and playful course.',
    imageUrl: 'https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 325,
    duration: '6 weeks (2 hours per week)',
    startDate: 'February 20, 2025',
    maxStudents: 10,
    spotsLeft: 3,
    level: 'intermediate',
  },
  {
    id: 'CRS006',
    title: 'Watercolor Fundamentals',
    description: 'Learn to master the beautiful and challenging medium of watercolor, from basic washes to advanced techniques.',
    imageUrl: 'https://images.pexels.com/photos/6474487/pexels-photo-6474487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 300,
    duration: '8 weeks (2 hours per week)',
    startDate: 'January 10, 2025',
    maxStudents: 12,
    spotsLeft: 0,
    level: 'beginner',
  },
];