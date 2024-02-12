export default function MainLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) {
  return (
    <>
      <header>Header</header>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        Main Content{children}
      </main>
      <footer>Footer</footer>
    </>
  );
}
