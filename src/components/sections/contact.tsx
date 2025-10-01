import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Contact Us</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Have a question or want to work together? Send us a message, and we'll get back to you as soon as possible.
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
              <p className="text-lg">123 Business Rd, Suite 100<br/>Innovation City, ST 54321</p>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Send a Message</CardTitle>
            <CardDescription>We're here to help and answer any question you might have.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
