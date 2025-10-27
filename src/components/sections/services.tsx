import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, BarChart3, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Business Strategy',
    description: 'We help you define your goals, identify opportunities, and create a roadmap for success.',
    imageId: 'service-strategy',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Digital Marketing',
    description: 'Our marketing experts will help you reach your target audience and grow your online presence.',
    imageId: 'service-marketing',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Development',
    description: 'From web applications to mobile apps, our development team can build the tools you need.',
    imageId: 'service-development',
  },
];

export default function Services() {
  const serviceImages = PlaceHolderImages.filter(p => p.id.startsWith('service-'));

  return (
    <section id="services" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Nuestros servicios</div>
          <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            We provide a range of services designed to help your business succeed at every stage of its journey.
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
