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
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">About Us</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Driving Business Forward
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BizHub was founded with a simple yet powerful goal: to provide businesses with the tools and expertise they need to thrive in a competitive landscape. Our journey began over a decade ago, and since then, we've helped hundreds of companies navigate challenges and seize opportunities.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to be a trusted partner for growth, offering innovative solutions and unwavering support. We believe in building long-lasting relationships based on transparency, results, and mutual success.
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
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Our Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
