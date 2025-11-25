import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');
  const carouselImages = PlaceHolderImages.filter(p => p.id.startsWith('carousel-'));


  return (
    <section id="about" className="w-full py-2 md:py-4 lg:py-6 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Acerca de</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Conectando Formosa, Uniendo Personas.
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Somos RyM, una compañía de transporte de pasajeros dedicada a conectar de manera segura y eficiente a las comunidades del interior de la provincia de Formosa. Desde 1990, hemos asumido la misión de ser mucho más que una simple línea de autobuses; somos el puente que une familias, oportunidades y destinos.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            width={550}
                            height={310}
                            className="rounded-lg object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="mt-12 md:mt-20">
        </div>
      </div>
    </section>
  );
}
