import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Wrench } from 'lucide-react';

export default function MechanicalAssistance() {
  const assistanceImages = PlaceHolderImages.filter(p => p.id.startsWith('mechanical-assistance-'));

  return (
    <section id="mechanical-assistance" className="w-full py-2 md:py-4 lg:py-6 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <CarouselContent>
                {assistanceImages.map((image, index) => (
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
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                <Wrench className="inline-block h-4 w-4 mr-2" />
                Auxilio Mecánico
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Asistencia en el Camino
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos un servicio de auxilio mecánico para nuestras unidades, garantizando una respuesta rápida y eficiente ante cualquier imprevisto. Nuestro equipo está preparado para solucionar problemas en ruta y asegurar que el viaje continúe con la menor demora posible, manteniendo siempre la seguridad de nuestros pasajeros como prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
