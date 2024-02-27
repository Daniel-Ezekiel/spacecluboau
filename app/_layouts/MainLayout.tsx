import Header from "../_components/global/Header";
import Footer from "../_components/global/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='flex flex-col'>{children}</main>
      <Footer />
    </div>
  );
}
