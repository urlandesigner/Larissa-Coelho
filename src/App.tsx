import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Tratamentos } from "@/components/Tratamentos";
import { Diferenciais } from "@/components/Diferenciais";
import { Ambiente } from "@/components/Ambiente";
import { Depoimentos } from "@/components/Depoimentos";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Tratamentos />
        <Diferenciais />
        <Ambiente />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
