import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const values = [
  'Innovation: We constantly seek new and better ways to serve our clients.',
  'Integrity: We uphold the highest standards of honesty and ethical behavior.',
  'Excellence: We are committed to delivering outstanding results and superior quality.',
  'Collaboration: We work together with our clients to achieve shared goals.',
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="w-full py-6 md:py-10 lg:py-12 bg-card">
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
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            )}
          </div>
        </div>
        <div className="mt-12 md:mt-20">
        </div>
      </div>
    </section>
  );
}
