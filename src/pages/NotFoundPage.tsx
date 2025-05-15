import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-neutral-800 mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-outline"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary"
          >
            <Home size={18} className="mr-2" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;