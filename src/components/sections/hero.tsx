import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to BizHub
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Your central hub for business excellence. We provide innovative solutions to help your company grow and succeed. Explore our services and meet the team dedicated to your success.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
