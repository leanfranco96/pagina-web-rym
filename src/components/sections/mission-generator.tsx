'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  generateMissionStatement,
  type GenerateMissionStatementInput,
} from '@/ai/flows/generate-mission-statement';
import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  companyDescription: z.string().min(20, 'Please provide a description of at least 20 characters.'),
  productsAndServices: z.string().min(20, 'Please describe your products/services in at least 20 characters.'),
  coreValues: z.string().min(10, 'Please list core values in at least 10 characters.'),
});

export default function MissionGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [mission, setMission] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyDescription: '',
      productsAndServices: '',
      coreValues: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMission('');
    try {
      const result = await generateMissionStatement(values as GenerateMissionStatementInput);
      setMission(result.missionStatement);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error Generating Mission Statement',
        description: 'An unexpected error occurred. Please check your inputs and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="generate" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Generative AI</div>
          <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
            Craft Your Mission Statement
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Use our AI-powered tool to generate a compelling mission statement. Just provide some details about your business, and let our AI do the rest.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="font-headline">Tell Us About Your Business</CardTitle>
              <CardDescription>The more details you provide, the better the result.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="companyDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., We are a tech startup focused on renewable energy solutions." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productsAndServices"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Products and Services</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., We design and install solar panels for residential and commercial properties." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coreValues"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Core Values</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Sustainability, Innovation, Customer Satisfaction" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate Mission Statement
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold">Your Generated Mission Statement</h3>
            <Card className="min-h-[300px] flex items-center justify-center">
              <CardContent className="p-6">
                {isLoading && (
                  <div className="flex flex-col items-center gap-4 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p>Generating your mission...</p>
                  </div>
                )}
                {!isLoading && !mission && (
                  <p className="text-center text-muted-foreground">
                    Your generated mission statement will appear here.
                  </p>
                )}
                {mission && (
                  <blockquote className="text-center text-xl font-semibold leading-relaxed">
                    &ldquo;{mission}&rdquo;
                  </blockquote>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
