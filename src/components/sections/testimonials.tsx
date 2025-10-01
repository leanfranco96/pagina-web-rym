import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Innovate Inc.',
    quote: "BizHub transformed our business. Their strategic insights and dedicated support were game-changers for us. We've seen incredible growth since partnering with them.",
    imageId: 'testimonial-1',
  },
  {
    name: 'David Chen',
    company: 'QuantumLeap Co.',
    quote: "The team at BizHub is exceptional. Their expertise in digital marketing helped us double our online leads in just three months. Highly recommended!",
    imageId: 'testimonial-2',
  },
  {
    name: 'Maria Garcia',
    company: 'NextGen Solutions',
    quote: "Working with BizHub felt like having an extension of our own team. Their professionalism and commitment to our success were evident in every interaction.",
    imageId: 'testimonial-3',
  },
];

export default function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-'));

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Testimonials</div>
          <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            We're proud to have earned the trust of businesses of all sizes. Here's what some of them have to say.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                 const image = testimonialImages.find(img => img.id === testimonial.imageId);
                return(
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <Quote className="h-8 w-8 text-primary/50 mb-4" />
                        <p className="text-muted-foreground flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
