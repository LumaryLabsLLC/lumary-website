import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Lumary",
  description: "Privacy Policy for Lumary, the professional screen recording app for macOS.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/logo-64.png"
                alt="Lumary"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-semibold text-white">Lumary</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-zinc max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-zinc-400 leading-relaxed">
              Lumary is designed with privacy as a core principle. We believe your recordings,
              transcripts, and personal data belong to you—not us, not the cloud. This policy
              explains how Lumary handles your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Data Collection</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              <strong className="text-white">Lumary does not collect any personal data.</strong> Specifically:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>No analytics or telemetry data is collected</li>
              <li>No usage statistics are tracked</li>
              <li>No account or registration is required</li>
              <li>No data is transmitted to our servers or any third-party services</li>
              <li>No crash reports are automatically sent</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Local Processing</h2>
            <p className="text-zinc-400 leading-relaxed">
              All processing happens entirely on your Mac:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-4">
              <li>Screen, camera, and audio recordings are saved locally to folders you choose</li>
              <li>Transcription uses Apple&apos;s on-device speech recognition by default</li>
              <li>No recordings or transcripts are ever uploaded to any server</li>
              <li>Project data and settings are stored locally on your device</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Optional Network Features</h2>
            <p className="text-zinc-400 leading-relaxed">
              Lumary offers optional network-based transcription through Apple&apos;s speech recognition
              service. When enabled, audio is sent to Apple for processing according to Apple&apos;s
              privacy policy. This feature is opt-in and clearly labeled in the app settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">App Store</h2>
            <p className="text-zinc-400 leading-relaxed">
              Lumary is distributed through the Mac App Store. Apple may collect information
              related to your purchase and download as described in Apple&apos;s privacy policy.
              We do not have access to your personal information from these transactions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Permissions</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Lumary requires certain macOS permissions to function:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li><strong className="text-white">Screen Recording</strong> — To capture your display</li>
              <li><strong className="text-white">Camera</strong> — To record from your camera (optional)</li>
              <li><strong className="text-white">Microphone</strong> — To record audio (optional)</li>
              <li><strong className="text-white">Files and Folders</strong> — To save recordings to your chosen location</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              These permissions are used solely for their stated purposes. You can revoke
              any permission at any time through macOS System Settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-zinc-400 leading-relaxed">
              Since all data remains on your device, security is managed through macOS&apos;s
              built-in protections. Lumary runs in a sandboxed environment with hardened
              runtime enabled, meeting Apple&apos;s App Store security requirements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-zinc-400 leading-relaxed">
              Lumary does not collect any personal information from anyone, including children
              under 13 years of age.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted
              on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:contact@lumarylabs.com?subject=Lumary%20App%20-%20Privacy%20Question"
                className="text-blue-500 hover:text-blue-400"
              >
                contact@lumarylabs.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <Link href="/" className="text-blue-500 hover:text-blue-400">
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
