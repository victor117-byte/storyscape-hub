import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 animate-fade-up">
        <div className="text-center space-y-8">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Welcome to my creative space
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Stories, Reflections, and
            <span className="text-primary"> Adventures</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-content-subtle">
            Join me on a journey through technology, philosophy, and personal growth.
            Discover stories that inspire and insights that transform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/podcast"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors duration-200"
            >
              Listen to Podcast
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Read Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};