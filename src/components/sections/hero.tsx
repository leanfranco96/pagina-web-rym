import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-6 md:py-10 lg:py-12">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Bienvenido a RyM
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Recorré la provincia con nosotros. En RyM, conocemos cada camino y cada destino del interior. Disfrutá de un viaje cómodo y seguro, con el mejor servicio para conectar tus proyectos, tu familia y tus momentos en toda Formosa.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#services">Nuestros servicios</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
