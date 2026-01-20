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
    <div className="min-h-screen bg-[#0a0a0b] relative">
      {/* Subtle top gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-amber-950/20 via-transparent to-transparent" />
      </div>

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
