import { Navigation } from "@/components/Navigation";
import { Play, Headphones, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const episodes = [
  {
    id: 1,
    title: "El Arte de la Programación Funcional",
    description: "Exploramos los principios fundamentales de la programación funcional y cómo aplicarlos en proyectos modernos.",
    duration: "45:30",
    date: "15 Mar 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "Filosofía y Código: Una Perspectiva Única",
    description: "¿Cómo se relacionan los conceptos filosóficos con el desarrollo de software? Descúbrelo en este episodio.",
    duration: "38:15",
    date: "8 Mar 2024",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  }
];

const Podcast = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent-blue/5 to-accent-orange/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto pt-24 pb-16 px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            The Hidden Code Podcast
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explorando la intersección entre tecnología, filosofía y desarrollo personal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-xl p-8 space-y-6">
            <img 
              src="/podcast-logo.png" 
              alt="Podcast Logo" 
              className="w-full h-64 object-cover rounded-lg shadow-lg" 
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold dark:text-white">
                ¡Nuevo Episodio Cada Semana!
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Únete a nosotros en este viaje donde exploramos las historias detrás del código, 
                las experiencias que nos forman como desarrolladores y las ideas que están 
                transformando el mundo tecnológico.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  Spotify
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  Apple Podcasts
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {episodes.map((episode) => (
              <div 
                key={episode.id}
                className="glass-effect rounded-xl p-6 space-y-4 hover:scale-[1.02] transition-transform duration-300"
              >
                <img 
                  src={episode.image} 
                  alt={episode.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md" 
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold dark:text-white">{episode.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{episode.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {episode.date}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Play className="w-4 h-4 mr-2" />
                    Escuchar Episodio
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Podcast;