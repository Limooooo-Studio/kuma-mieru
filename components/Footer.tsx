'use client';

export function Footer({ config: _config }: { config?: unknown }) {
  return (
    <footer className="w-full flex items-center justify-center py-6 px-4 text-sm text-foreground/70 relative z-50">
      &copy; 2026 <span className="mx-1 font-semibold text-foreground">LIMOOO</span> Studio
    </footer>
  );
}
