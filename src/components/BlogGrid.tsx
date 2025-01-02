import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "La Paradoja del Código Oculto",
    excerpt: "Un viaje personal a través de los laberintos de la programación moderna y cómo encontré patrones filosóficos en cada línea de código.",
    date: "Marzo 15, 2024",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 2,
    title: "Algoritmos y Filosofía: Un Puente Inesperado",
    excerpt: "Descubriendo las sorprendentes conexiones entre el pensamiento computacional y las grandes preguntas de la filosofía.",
    date: "Marzo 10, 2024",
    category: "Philosophy",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 3,
    title: "Nadando en el Mar de Datos",
    excerpt: "Cómo mi pasión por la natación me enseñó valiosas lecciones sobre el flujo de información y la persistencia en la tecnología.",
    date: "Marzo 5, 2024",
    category: "Personal",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  }
];

interface BlogGridProps {
  selectedCategory?: string;
}

export const BlogGrid = ({ selectedCategory = "All" }: BlogGridProps) => {
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {filteredPosts.map((post) => (
        <article
          key={post.id}
          className="group flex flex-col space-y-4 animate-fade-up bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full pt-[56.25%]">
            <Link 
              to={`/blog/${post.id}`}
              className="absolute inset-0"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="space-y-3 p-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-accent-blue/10 dark:bg-accent-blue/20 text-accent-blue dark:text-accent-blue px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <CalendarDays className="w-4 h-4" />
                {post.date}
              </div>
            </div>
            <Link to={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-accent-blue transition-colors line-clamp-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};