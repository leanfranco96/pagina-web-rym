import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
      <Image
        src="https://i.imgur.com/tcv4aIX.jpeg"
        alt="Bus en la ruta"
        fill
        className="object-cover object-center"
        data-ai-hint="bus road"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bienvenido a RyM
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Recorré la provincia con nosotros. En RyM, conocemos cada camino y cada destino del interior. Disfrutá de un viaje cómodo y seguro, con el mejor servicio para conectar tus proyectos, tu familia y tus momentos en toda Formosa.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#services">Nuestros servicios</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
