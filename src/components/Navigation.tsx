import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/blog", label: "Blog" },
    { href: "/podcast", label: "Podcast" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-accent-blue transition-colors"
          >
            El Código Oculto
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary dark:hover:text-accent-blue",
                  location.pathname === link.href
                    ? "text-primary dark:text-accent-blue"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isOpen && isMobile && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary dark:text-accent-blue bg-accent-blue/10"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};