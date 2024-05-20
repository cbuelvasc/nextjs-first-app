import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Providers } from './providers';
import { BreadcrumbsComponent, NavbarComponent } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'First Next App',
  description: 'Generated with love by Vercel',
};

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-background text-foreground light'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <NavbarComponent navItems={navItems}/>
          <BreadcrumbsComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
