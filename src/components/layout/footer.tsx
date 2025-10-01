import { Logo } from './logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex items-center">
          <Logo />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} BizHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
