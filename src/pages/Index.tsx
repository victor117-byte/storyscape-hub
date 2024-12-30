import { Navigation } from "@/components/Navigation";
import { Categories } from "@/components/Categories";
import { BlogGrid } from "@/components/BlogGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <main className="max-w-7xl mx-auto pt-24 pb-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-6xl font-bold tracking-tighter">
            STORIES & REFLECTIONS
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exploring technology, philosophy, and personal growth through
            storytelling and meaningful conversations.
          </p>
        </div>
        <Categories />
        <BlogGrid />
      </main>
    </div>
  );
};

export default Index;