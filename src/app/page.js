/** @format */

import {
	Contact,
	FAQ,
	Feature,
	Hero,
	PriceTable,
	Testimonials,
} from "@/app/Components";

export default function Home() {
<<<<<<< HEAD
	return (
		<main className="flex flex-col items-center justify-between min-h-screen ">
			<Hero />
			<PriceTable />
			<Testimonials />
			<Feature />
			<FAQ />
			<Contact />
		</main>
	);
=======
  return (
    <main className='flex flex-col items-center justify-between min-h-screen '>
      <Hero />
      <div className='px-10 md:px-22 lg:px-44'>
        <PriceTable />
        <hr className='my-10' />
        <Testimonials />
        <hr className='my-10' />
        <Feature />
        <hr className='my-10' />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
>>>>>>> 26379d0f4ae362ecfdb37deed4eac46fa18c77b6
}
