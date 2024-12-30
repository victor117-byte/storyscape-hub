import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Technology",
  "Philosophy",
  "Adventures",
  "Storytelling",
  "Books",
  "Music",
];

export const Categories = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-8">
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm transition-colors duration-200",
            category === "All"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};