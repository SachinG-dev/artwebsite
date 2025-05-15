import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import CoursesPage from './pages/CoursesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PastWorkPage from './pages/PastWorkPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import MediaPage from './pages/MediaPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import WhatsAppButton from './components/common/WhatsAppButton';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="past-work" element={<PastWorkPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <WhatsAppButton />
    </>
  );
}

export default App;