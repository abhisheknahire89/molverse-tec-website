import MoleculeScroll from '@/components/MoleculeScroll';
import Navigation from '@/components/Navigation';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
      <Navigation />
      <MoleculeScroll />
      <CaseStudies />
      <ContactForm />
    </main>
  );
}


