import {
  Header,
  Hero,
  Features,
  Showcase,
  UseCases,
  Specs,
  Privacy,
  Pricing,
  FAQ,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <UseCases />
        <Specs />
        <Privacy />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
