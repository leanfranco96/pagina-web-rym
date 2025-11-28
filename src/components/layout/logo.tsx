import { BusFront } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="BizHub Logo">
      <BusFront className="h-10 w-10 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">RyM</span>
    </div>
  );
}
