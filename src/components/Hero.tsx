import { Headphones, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-accent-blue/10 to-accent-orange/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('/podcast-logo.png')] opacity-5 bg-center bg-no-repeat bg-contain" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 animate-fade-up relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium dark:bg-secondary/20 dark:text-secondary">
              <Headphones className="w-4 h-4" />
              Nueva Temporada Disponible
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            El Lado Oculto del Algoritmo
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Historias que te harán pensar, reír y explorar lo desconocido
              </p>
              
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-content-subtle dark:text-gray-300">
                Bienvenido a un espacio donde la tecnología, la filosofía, las aventuras y las charlas profundas convergen. 
                Aquí no solo contamos historias, ¡las vivimos! Descubre un podcast que te invita a reflexionar, 
                conectar y explorar el mundo desde perspectivas únicas.
              </p>
            </div>
            
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
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-white bg-white/80 dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors duration-200"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Leer Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <img
              src="/logo_temporada_1.svg" 
              alt="The Hidden Code Podcast"
              className="w-full h-auto rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};