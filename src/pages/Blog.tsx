import { Navigation } from "@/components/Navigation";
import { BlogGrid } from "@/components/BlogGrid";
import { Categories } from "@/components/Categories";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent-blue/5 to-accent-orange/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto pt-24 pb-16 px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Blog: Historias del Código Oculto
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explorando las intersecciones entre tecnología, filosofía y experiencias personales.
          </p>
        </div>
        <Categories onCategoryChange={setSelectedCategory} />
        <BlogGrid selectedCategory={selectedCategory} />
      </main>
    </div>
  );
};

export default Blog;