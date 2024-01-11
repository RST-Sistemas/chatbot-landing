/** @format */

import {
  Contact,
  FAQ,
  Feature,
  Hero,
  PriceTable,
  Testimonials,
} from "@/app/Components";
import WhatsAppSticky from "./Components/WhatsAppSticky";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between scroll-smooth focus:scroll-auto'>
      <Hero />
      <div>
        <div className='px-10 md:px-22 lg:px-44'>
          <Feature />
          <hr className='my-10' />
          <PriceTable />
          <hr className='my-10' />
          <Testimonials />
          <hr className='my-10' />
          <FAQ />
          <Contact />
        </div>
        <WhatsAppSticky />
      </div>
    </main>
  );
}
