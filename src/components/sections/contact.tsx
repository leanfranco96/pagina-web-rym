import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-1">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Contactanos</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ponte en contacto</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            ¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos lo antes posible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-accent" />
              <a href="tel:+1234567890" className="text-lg hover:text-primary">+1 (234) 567-890</a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:contact@bizhub.com" className="text-lg hover:text-primary">contact@bizhub.com</a>
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
