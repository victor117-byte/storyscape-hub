import { Navigation } from "@/components/Navigation";
import { BookOpen, Code, Mountain, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent-blue/5 to-accent-orange/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
              La Historia Detrás del Código
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un viaje a través de la tecnología, la filosofía y las aventuras
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <Code className="w-8 h-8 text-accent-blue" />
                <h2 className="text-2xl font-semibold">El Camino del Desarrollador</h2>
              </div>
              <p>
                Como Licenciado en Informática, mi viaje en el mundo de la tecnología comenzó con una 
                curiosidad insaciable por entender cómo funcionan las cosas. Cada línea de código es 
                una historia, cada algoritmo un nuevo capítulo en esta aventura digital.
              </p>

              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-accent-blue" />
                <h2 className="text-2xl font-semibold">El Arte de la Natación</h2>
              </div>
              <p>
                La natación no es solo un deporte para mí; es una metáfora de la vida en tecnología. 
                Cada brazada es un paso hacia adelante, cada respiración una pausa para reflexionar, 
                y cada longitud completada un nuevo logro.
              </p>

              <div className="flex items-center gap-4">
                <Mountain className="w-8 h-8 text-accent-orange" />
                <h2 className="text-2xl font-semibold">Aventuras Sin Límites</h2>
              </div>
              <p>
                Las aventuras son mi forma de conectar con el mundo más allá de las pantallas. 
                Cada expedición me enseña nuevas formas de resolver problemas y ver las cosas 
                desde diferentes perspectivas.
              </p>

              <div className="flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-semibold">El Eterno Estudiante</h2>
              </div>
              <p>
                Mi pasión por la filosofía y la historia me ha llevado a ver la tecnología desde 
                un ángulo único. Cada día es una oportunidad para aprender algo nuevo, para 
                conectar los puntos entre el pasado y el futuro, entre el pensamiento abstracto 
                y el código concreto.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;