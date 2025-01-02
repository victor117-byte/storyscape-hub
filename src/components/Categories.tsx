import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  "All",
  "Technology",
  "Philosophy",
  "Adventures",
  "Storytelling",
  "Books",
  "Music",
];

interface CategoriesProps {
  onCategoryChange: (category: string) => void;
}

export const Categories = ({ onCategoryChange }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center my-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95",
            selectedCategory === category
              ? "bg-accent-blue text-white dark:bg-accent-blue dark:text-white shadow-lg"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};