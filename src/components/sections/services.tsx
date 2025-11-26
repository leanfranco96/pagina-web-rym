import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bus, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const services = [
  {
    icon: <Bus className="h-8 w-8 text-primary" />,
    title: 'Transporte de Pasajeros',
    description: 'Conectamos las localidades del interior de Formosa con un servicio regular, seguro y confiable.',
    imageIdPrefix: 'service-pasajeros',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Viajes Especiales',
    description: 'Ofrecemos servicios de alquiler de unidades para excursiones, eventos y traslados grupales a medida.',
    imageIdPrefix: 'service-especiales',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-2 md:py-4 lg:py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Nuestros servicios</div>
            <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
              Qué Ofrecemos
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Brindamos una gama de servicios diseñados para satisfacer las necesidades de movilidad de nuestros pasajeros en toda la provincia.
            </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => {
            const serviceImages = PlaceHolderImages.filter(p => p.id.startsWith(service.imageIdPrefix));
            return (
            <Card key={service.title} className="flex flex-col">
              {serviceImages.length > 0 && (
                 <Carousel className="w-full max-w-full">
                    <CarouselContent>
                        {serviceImages.map((image, index) => (
                          <CarouselItem key={index}>
                              <CardContent className="p-0">
                              <Image
                                  src={image.imageUrl}
                                  alt={image.description}
                                  data-ai-hint={image.imageHint}
                                  width={550}
                                  height={310}
                                  className="rounded-t-lg object-cover aspect-video"
                              />
                              </CardContent>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    {serviceImages.length > 1 && (
                      <>
                        <CarouselPrevious className="ml-16" />
                        <CarouselNext className="mr-16"/>
                      </>
                    )}
                 </Carousel>
              )}
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
