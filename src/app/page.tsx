import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import MechanicalAssistance from '@/components/sections/mechanical-assistance';
import Services from '@/components/sections/services';


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MechanicalAssistance />
      <Contact />
    </>
  );
}
