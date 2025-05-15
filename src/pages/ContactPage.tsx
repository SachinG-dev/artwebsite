import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Have questions about my artwork, courses, or interested in a commission? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Contact Information</h2>
              <p className="mb-8">
                Feel free to reach out using any of the methods below. I typically respond within 
                24-48 hours during business days.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-neutral-600">artist@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Studio Address</h4>
                    <p className="text-neutral-600">
                      123 Art Studio Lane<br />
                      Creative City, AC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MessageCircle className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleSocialClick('https://instagram.com')}
                    className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <Instagram size={24} className="text-neutral-700" />
                  </button>
                  <button 
                    onClick={() => handleSocialClick('https://facebook.com')}
                    className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <Facebook size={24} className="text-neutral-700" />
                  </button>
                  <button 
                    onClick={() => handleSocialClick('https://twitter.com')}
                    className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <Twitter size={24} className="text-neutral-700" />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>Visit My Studio</h2>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* In a real implementation, you would include an interactive map here */}
            <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
              <MapPin size={48} className="text-neutral-400" />
              <p className="ml-2 text-neutral-600">Map would be embedded here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Studio visits are available by appointment. Please contact me to schedule a time to view 
              artwork in person or discuss a potential commission.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Do you ship artwork internationally?</h4>
                <p className="text-neutral-600">
                  Yes, I ship artwork worldwide. Shipping costs vary depending on the size of the artwork 
                  and destination. Please contact me for a shipping quote.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Can I commission a custom piece?</h4>
                <p className="text-neutral-600">
                  Absolutely! I accept commission requests and work closely with clients to create 
                  custom pieces that meet their vision. Please use the contact form to discuss your ideas.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-neutral-600">
                  I accept credit cards, PayPal, and bank transfers. For larger purchases, I can also 
                  arrange payment plans upon request.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Do you offer gift certificates for courses?</h4>
                <p className="text-neutral-600">
                  Yes, gift certificates are available for all courses and workshops. They make a 
                  great present for creative friends and family members!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;