import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Craftsmanship from "@/components/Craftsmanship";
import Products from "@/components/Products";
import Exhibition from "@/components/Exhibition";
import Impact from "@/components/Impact";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal direction="right" distance={60}>
          <About />
        </Reveal>
        <Reveal direction="up" distance={50}>
          <Team />
        </Reveal>
        <Reveal direction="up" distance={50}>
          <Craftsmanship />
        </Reveal>
        <Reveal direction="left" distance={60}>
          <Products />
        </Reveal>
        <Reveal direction="right" distance={60}>
          <Impact />
        </Reveal>
        <Reveal direction="up" distance={70}>
          <Exhibition />
        </Reveal>
        <Reveal direction="down" distance={40}>
          <OrderForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
