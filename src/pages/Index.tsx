import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { BlogGrid } from "@/components/BlogGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent-blue/5 to-accent-orange/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <Hero />
      <main className="max-w-7xl mx-auto pt-24 pb-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Últimas Publicaciones
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explora nuestras historias más recientes sobre tecnología, filosofía y crecimiento personal.
          </p>
        </div>
        <Categories />
        <BlogGrid />
      </main>
    </div>
  );
};

export default Index;