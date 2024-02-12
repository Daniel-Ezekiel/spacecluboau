import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) {
  return (
    <>
      <Header />
      <main className='flex  flex-col items-center justify-between p-24'>
        Main Content{children}
      </main>
      <Footer />
    </>
  );
}
