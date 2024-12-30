import { Headphones, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-accent-blue/10 to-accent-orange/10">
      <div className="absolute inset-0 bg-[url('/podcast-logo.png')] opacity-5 bg-center bg-no-repeat bg-contain" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 animate-fade-up relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              <Headphones className="w-4 h-4" />
              Nueva Temporada Disponible
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tecnología, Filosofía y
              <span className="text-primary"> Aventuras</span>
            </h1>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-content-subtle">
              Un espacio donde convergen las ideas, la tecnología y las historias personales.
              Acompáñame en este viaje de descubrimiento y aprendizaje.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/podcast"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors duration-200"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Escuchar Podcast
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Leer Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <img
              src="/podcast-logo.png"
              alt="Podcast Host Illustration"
              className="w-full h-auto rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};