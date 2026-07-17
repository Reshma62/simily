import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkWithUs from "@/components/WorkWithUs";
import Services from "@/components/Services";
import Growing from "@/components/Growing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

/* Landing page — sections in the same order as the design. */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkWithUs />
      <Services />
      <Growing />
      <Team />
      <Testimonials />
      <Appointment />
      <Footer />
    </main>
  );
}
