import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'CEO & Founder',
    bio: 'Jane is a visionary leader with over 20 years of experience in the industry. She founded BizHub to empower businesses.',
    imageId: 'team-member-1',
  },
  {
    name: 'John Smith',
    title: 'Chief Technology Officer',
    bio: 'John is the mastermind behind our technology. He is passionate about creating innovative and scalable solutions.',
    imageId: 'team-member-2',
  },
  {
    name: 'Emily White',
    title: 'Chief Operations Officer',
    bio: 'Emily ensures that our operations run smoothly. Her expertise in logistics and management is unparalleled.',
    imageId: 'team-member-3',
  },
  {
    name: 'Michael Brown',
    title: 'Head of Marketing',
    bio: 'Michael leads our marketing efforts, helping our clients and our company grow. He is a data-driven strategist.',
    imageId: 'team-member-4',
  },
];

export default function Team() {
  const teamImages = PlaceHolderImages.filter(p => p.id.startsWith('team-member-'));

  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Team</div>
          <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">The Experts Behind BizHub</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Meet the dedicated professionals who are committed to your success.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => {
            const image = teamImages.find(img => img.id === member.imageId);
            return (
              <Card key={index} className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-24 w-24 mb-4">
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
