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
      <main className='flex flex-col'>{children}</main>
      <Footer />
    </>
  );
}
