/** @format */
import Hero from "@/app/Components/Hero";
import FAQ from "@/app/Components/FAQ";
import Footer from "@/app/Components/Footer";
import Feature from "@/app/Components/Feature";
import Testimonials from "@app/Components/Testimonials";
import PriceTable from "@/app/Components/PriceTable";
import Contact from "@/app/Components/Contact";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
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
