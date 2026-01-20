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
    <div className="min-h-screen bg-[#0d0d0f] noise-bg vignette lens-distortion relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top-left amber orb */}
        <div
          className="gradient-orb glow-animate w-[600px] h-[600px] -top-48 -left-48 bg-amber-500/20"
          style={{ position: 'absolute' }}
        />
        {/* Top-right warm orb */}
        <div
          className="gradient-orb drift-animate w-[500px] h-[500px] top-1/4 -right-32 bg-orange-500/10"
          style={{ position: 'absolute' }}
        />
        {/* Center-left subtle orb */}
        <div
          className="gradient-orb w-[400px] h-[400px] top-1/2 -left-20 bg-amber-600/10"
          style={{ position: 'absolute', animationDelay: '2s' }}
        />
        {/* Bottom ambient glow */}
        <div
          className="gradient-orb glow-animate w-[800px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 bg-amber-500/5"
          style={{ position: 'absolute', animationDelay: '4s' }}
        />
      </div>

      {/* Bokeh circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="bokeh w-32 h-32 top-[20%] left-[10%]"
          style={{ position: 'absolute', animationDelay: '0s' }}
        />
        <div
          className="bokeh w-24 h-24 top-[60%] right-[15%]"
          style={{ position: 'absolute', animationDelay: '2s' }}
        />
        <div
          className="bokeh w-16 h-16 top-[40%] left-[80%]"
          style={{ position: 'absolute', animationDelay: '4s' }}
        />
        <div
          className="bokeh w-20 h-20 top-[75%] left-[25%]"
          style={{ position: 'absolute', animationDelay: '1s' }}
        />
        <div
          className="bokeh w-12 h-12 top-[30%] left-[60%]"
          style={{ position: 'absolute', animationDelay: '3s' }}
        />
      </div>

      {/* Anamorphic lens flares */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        <div
          className="anamorphic-flare w-[60%] top-[25%] left-[20%]"
          style={{ position: 'absolute' }}
        />
        <div
          className="anamorphic-flare w-[40%] top-[65%] left-[35%]"
          style={{ position: 'absolute', animationDelay: '6s', opacity: 0.1 }}
        />
      </div>

      {/* Light leak overlay */}
      <div className="light-leak" />

      {/* Grid overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10">
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
    </div>
  );
}
