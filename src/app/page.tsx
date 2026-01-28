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
    <div className="min-h-screen bg-[#0d0d0f] noise-bg relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top-left amber orb */}
        <div
          className="gradient-orb glow-animate w-[600px] h-[600px] -top-48 -left-48 bg-amber-500/10"
          style={{ position: 'absolute' }}
        />
        {/* Top-right warm orb */}
        <div
          className="gradient-orb drift-animate w-[500px] h-[500px] top-1/4 -right-32 bg-orange-500/5"
          style={{ position: 'absolute' }}
        />
        {/* Center-left subtle orb */}
        <div
          className="gradient-orb w-[400px] h-[400px] top-1/2 -left-20 bg-amber-600/5"
          style={{ position: 'absolute', animationDelay: '2s' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main id="main-content">
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
    </div>
  );
}
