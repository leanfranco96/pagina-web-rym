import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import MissionGenerator from '@/components/sections/mission-generator';
import Services from '@/components/sections/services';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <MissionGenerator />
      <Testimonials />
      <Contact />
    </>
  );
}
