import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Package } from 'lucide-react';

export default function PackageDelivery() {
  const packageImages = PlaceHolderImages.filter(p => p.id.startsWith('package-delivery-'));

  return (
    <section id="package-delivery" className="w-full py-2 md:py-4 lg:py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                <Package className="inline-block h-4 w-4 mr-2" />
                Transporte de Paquetería
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tus Envíos, Nuestro Compromiso
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos un servicio de paquetería confiable y eficiente para que tus envíos lleguen a destino en tiempo y forma. Conectamos toda la provincia, asegurando que tus paquetes sean tratados con el mayor cuidado y profesionalismo desde la recolección hasta la entrega. Confía en nosotros para tus envíos más importantes.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <CarouselContent>
                {packageImages.map((image, index) => (
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
      </div>
    </section>
  );
}
