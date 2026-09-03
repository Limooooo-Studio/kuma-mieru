'use client';

import NextLink from 'next/link';

import { ThemeSwitch } from '@/components/basic/theme-switch';
import { I18NSwitch } from './i18n-switch';

export const Navbar = () => {
  const links = [
    { label: 'Home', href: 'https://limooo.cn' },
    { label: 'Services', href: 'https://services.limooo.cn' },
    { label: 'Contact', href: 'https://contact.limooo.cn' },
  ];

  return (
    <nav className="w-full h-[72px] px-5 md:px-8 flex items-center justify-between max-w-7xl mx-auto backdrop-blur-lg bg-background/70">
      <NextLink
        href="https://limooo.cn"
        className="text-lg md:text-2xl font-semibold uppercase tracking-[0.05em] text-foreground shrink-0"
      >
        LIMOOO
      </NextLink>

      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <NextLink
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            {l.label}
          </NextLink>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <ThemeSwitch />
        <I18NSwitch />
      </div>
    </nav>
  );
};
