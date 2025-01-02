import { Navigation } from "@/components/Navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado con éxito. Me pondré en contacto contigo pronto.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent-blue/5 to-accent-orange/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto pt-24 pb-16 px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Conectemos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes una idea interesante? ¿Quieres colaborar en un proyecto? ¡Me encantaría escucharte!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="glass-effect rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-blue/10 rounded-lg">
                  <Mail className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contacto@thehiddencode.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-purple/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-400">+52 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-orange/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-400">Ciudad de México, México</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Nombre</label>
                <Input placeholder="Tu nombre completo" className="bg-white/50 dark:bg-gray-800/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Email</label>
                <Input placeholder="tu@email.com" type="email" className="bg-white/50 dark:bg-gray-800/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">Mensaje</label>
                <Textarea 
                  placeholder="Cuéntame sobre tu proyecto o idea..." 
                  className="min-h-[150px] bg-white/50 dark:bg-gray-800/50" 
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensaje
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;