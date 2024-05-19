import { NavbarComponent } from '../components/NavbarComponent';
import { Providers } from '../providers';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <NavbarComponent />
        <main className='flex flex-col items-center py-10 px-24 pt-10'>
          {children}
        </main>
      </Providers>
    </>
  );
}
