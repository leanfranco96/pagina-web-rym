import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="BizHub Logo">
      <Building2 className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">BizHub</span>
    </div>
  );
}
