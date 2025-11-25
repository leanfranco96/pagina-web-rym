import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bus, Users, Map } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Bus className="h-8 w-8 text-primary" />,
    title: 'Transporte de Pasajeros',
    description: 'Conectamos las localidades del interior de Formosa con un servicio regular, seguro y confiable.',
    imageId: 'service-pasajeros',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Viajes Especiales',
    description: 'Ofrecemos servicios de alquiler de unidades para excursiones, eventos y traslados grupales a medida.',
    imageId: 'service-especiales',
  },
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: 'Encomiendas',
    description: 'Transportamos paquetes y encomiendas entre nuestras terminales, garantizando una entrega rápida y segura.',
    imageId: 'service-encomiendas',
  },
];

export default function Services() {
  const serviceImages = PlaceHolderImages.filter(p => p.id.startsWith('service-'));

  return (
    <section id="services" className="w-full py-2 md:py-4 lg:py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Nuestros servicios</div>
          <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Qué Ofrecemos</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Brindamos una gama de servicios diseñados para satisfacer las necesidades de movilidad de nuestros pasajeros en toda la provincia.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const image = serviceImages.find(img => img.id === service.imageId);
            return (
              <Card key={index} className="flex flex-col">
                {image && (
                   <Image
                     src={image.imageUrl}
                     alt={image.description}
                     data-ai-hint={image.imageHint}
                     width={600}
                     height={400}
                     className="rounded-t-lg object-cover aspect-video"
                   />
                )}
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
