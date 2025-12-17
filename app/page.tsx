import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Competitions from '@/components/Competitions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Schedule /> */}
      <Competitions />
      <Contact />
      <Footer />
    </>
  );
}
