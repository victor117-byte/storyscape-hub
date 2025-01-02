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
    title: "The Future of Technology: A Personal Journey",
    excerpt: "Exploring how emerging technologies are shaping our daily lives and what it means for our future.",
    date: "January 5, 2025",
    category: "Technology",
    imageUrl: "/No_disponible.svg",
  },
  {
    id: 2,
    title: "Mindful Adventures: Finding Peace in Chaos",
    excerpt: "Discovering the balance between digital life and mindful living through personal experiences.",
    date: "January 4, 2024",
    category: "Philosophy",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "The Art of Storytelling in the Digital Age",
    excerpt: "How modern platforms are changing the way we share and consume stories.",
    date: "January 3, 2024",
    category: "Storytelling",
    imageUrl: "/placeholder.svg",
  },
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