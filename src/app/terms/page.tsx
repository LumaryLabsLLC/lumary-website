import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Lumary",
  description: "Terms of Service for Lumary, the professional screen recording app for macOS.",
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-sm text-zinc-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-zinc max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Agreement to Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              By downloading, installing, or using Lumary (&quot;the App&quot;), you agree to be bound
              by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not
              use the App. The App is provided by Lumary Labs LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">License</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
              non-transferable, revocable license to download, install, and use the App for your
              personal or commercial use on devices you own or control.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-4">
              <li>Copy, modify, or distribute the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Rent, lease, lend, sell, or sublicense the App</li>
              <li>Use the App for any unlawful purpose</li>
              <li>Remove any proprietary notices from the App</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Your Content</h2>
            <p className="text-zinc-400 leading-relaxed">
              The App allows you to create recordings, transcripts, and other content (&quot;Your Content&quot;).
              You retain all rights to Your Content. We do not access, collect, or store Your Content.
              You are solely responsible for Your Content and for ensuring you have the necessary
              rights and permissions to create and use such content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Acceptable Use</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You agree to use the App only for lawful purposes. You are responsible for ensuring
              that your use of the App complies with all applicable laws and regulations, including:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Obtaining consent before recording others where required by law</li>
              <li>Respecting intellectual property rights of third parties</li>
              <li>Complying with privacy laws and regulations</li>
              <li>Not using the App to create illegal, harmful, or objectionable content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">App Store Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              The App is made available through the Mac App Store. Your use of the App is also
              subject to the terms and conditions of the App Store, including Apple&apos;s Licensed
              Application End User License Agreement. In the event of any conflict between these
              Terms and the App Store terms, the App Store terms shall prevail.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Updates</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may from time to time provide updates, bug fixes, or new features for the App.
              These updates may be downloaded and installed automatically or may require your
              action. You agree that we have no obligation to provide any updates or to continue
              to support or maintain the App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-zinc-400 leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF
              VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
              OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE APP.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Indemnification</h2>
            <p className="text-zinc-400 leading-relaxed">
              You agree to indemnify and hold harmless Lumary Labs LLC and its officers, directors,
              employees, and agents from any claims, damages, losses, liabilities, costs, and
              expenses arising out of or related to your use of the App or your violation of
              these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Governing Law</h2>
            <p className="text-zinc-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Changes to Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any
              changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date.
              Your continued use of the App after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Termination</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may terminate or suspend your access to the App immediately, without prior notice,
              for any reason, including if you breach these Terms. Upon termination, your right to
              use the App will cease immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:contact@lumarylabs.com?subject=Lumary%20App%20-%20Terms%20Question"
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
