import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-6 md:py-10 lg:py-12">
      <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-1">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Contactanos</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ponte en contacto</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            ¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos lo antes posible.
          </p>
          <div className="space-y-4">
          <div className="flex items-start gap-2">
            <Phone className="h-6 w-6 text-accent mt-1" />
            <div className="flex flex-col">
              <a href="tel:+5493704080997" className="text-lg hover:text-primary">+54 9 3704-080997</a>
              <a href="tel:+5493704710421" className="text-lg hover:text-primary">+54 9 3704-710421</a>
              <a href="tel:+5493704071340" className="text-lg hover:text-primary">+54 9 3704-071340</a>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">Auxicar</p>
              <a href="tel:+5493704660512" className="text-lg hover:text-primary">+54 9 3704-660512</a>
              </div>
              </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:contact@bizhub.com" className="text-lg hover:text-primary">rm_srl@hotmail.com</a>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 flex-shrink-0 text-accent" />
              <p className="text-lg">Coronel Bogado y Jonas Salk<br/>O Jonas Salk 195</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
