/** @format */

import {
  Contact,
  FAQ,
  Feature,
  Footer,
  Hero,
  PriceTable,
  Testimonials,
} from "@/app/Components";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen '>
      <Hero />
      <PriceTable />
      <Testimonials />
      <Feature />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
