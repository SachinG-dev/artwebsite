import React from 'react';
import { Book, Calendar } from 'lucide-react';
import CourseCard from '../components/courses/CourseCard';
import { courses } from '../data/courses';
import { Course } from '../types/course';

const CoursesPage: React.FC = () => {
  const handleJoinCourse = (course: Course) => {
    // Create WhatsApp message for this course
    const message = encodeURIComponent(`Hello, I'm interested in joining the "${course.title}" course starting on ${course.startDate}. Can you provide more information?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  // Split courses into upcoming and ongoing
  const currentDate = new Date();
  const upcomingCourses = courses.filter(course => {
    const courseDate = new Date(course.startDate);
    return courseDate > currentDate;
  });

  const ongoingCourses = courses.filter(course => {
    const courseDate = new Date(course.startDate);
    return courseDate <= currentDate;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Art Courses</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Learn, create, and grow your artistic skills with personalized courses for all levels
          </p>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Courses</h2>
          </div>
          
          {upcomingCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  index={index}
                  onJoinClick={handleJoinCourse} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-lg">
              <Calendar size={48} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Courses</h3>
              <p className="text-neutral-600">
                New courses will be announced soon. Check back later or contact me for private lessons.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ongoing Courses */}
      {ongoingCourses.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="section-title">
              <h2>Ongoing Courses</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  index={index}
                  onJoinClick={handleJoinCourse} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Teaching Approach */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">My Teaching Approach</h2>
              <p className="mb-4">
                I believe in creating a supportive and inspiring environment where students can 
                explore their creativity while developing solid technical skills. Each course is 
                designed to balance structured learning with individual expression.
              </p>
              <p className="mb-6">
                Small class sizes ensure that each student receives personalized attention and 
                guidance tailored to their skill level and artistic goals. Whether you're a 
                complete beginner or an experienced artist looking to refine your technique, 
                you'll find a course that meets your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mt-1 mr-4">
                    <span className="text-primary-600 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Foundation Skills</h4>
                    <p className="text-neutral-600">
                      Learn essential techniques and principles that form the basis of good art.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mt-1 mr-4">
                    <span className="text-primary-600 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Guided Practice</h4>
                    <p className="text-neutral-600">
                      Apply what you've learned through structured exercises and projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mt-1 mr-4">
                    <span className="text-primary-600 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Creative Expression</h4>
                    <p className="text-neutral-600">
                      Develop your unique artistic voice while receiving constructive feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Art teaching" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">What materials do I need to bring?</h4>
                <p className="text-neutral-600">
                  A detailed list of required materials will be provided upon registration. For most courses, 
                  basic supplies are included in the course fee, with options to purchase additional professional 
                  materials if desired.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Are courses suitable for complete beginners?</h4>
                <p className="text-neutral-600">
                  Absolutely! Courses are available for all skill levels, from complete beginners to advanced 
                  artists. Each course description indicates the recommended experience level.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">What is the cancellation policy?</h4>
                <p className="text-neutral-600">
                  Full refunds are available up to 14 days before the course start date. Cancellations within 
                  14 days may receive a partial refund or credit toward a future course, depending on circumstances.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Do you offer private lessons?</h4>
                <p className="text-neutral-600">
                  Yes, private lessons are available for individuals or small groups. These can be tailored to 
                  your specific interests and scheduled at flexible times. Contact me for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Creative Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join a course or reach out to discuss private lessons tailored to your specific needs and interests.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn bg-white text-primary-600 hover:bg-neutral-100"
          >
            <Book size={18} className="mr-2" />
            Inquire About Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;