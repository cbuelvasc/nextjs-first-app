export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='flex flex-col items-center px-24 py-10 pt-10'>
        {children}
      </main>
    </>
  );
}
