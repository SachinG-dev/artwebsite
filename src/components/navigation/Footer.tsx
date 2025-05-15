import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Palette size={28} />
              <span className="text-xl font-serif font-bold">ArtistName</span>
            </Link>
            <p className="text-neutral-400 max-w-xs">
              Creating beautiful art inspired by nature and human emotion, bringing color and life to every canvas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-neutral-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/courses" className="text-neutral-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/events" className="text-neutral-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-neutral-400 mt-1" />
                <span className="text-neutral-400">artist@example.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-neutral-400 mt-1" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-neutral-400 mt-1" />
                <span className="text-neutral-400">123 Art Studio Lane, Creative City, AC 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} ArtistName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;