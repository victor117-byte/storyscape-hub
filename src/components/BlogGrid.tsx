import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

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
    date: "January 5, 2024",
    category: "Technology",
    imageUrl: "/placeholder.svg",
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
  // Add more posts as needed
];

export const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group flex flex-col space-y-3 animate-fade-up"
        >
          <Link to={`/blog/${post.id}`} className="overflow-hidden rounded-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded-full dark:bg-gray-800">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {post.date}
              </div>
            </div>
            <Link to={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};