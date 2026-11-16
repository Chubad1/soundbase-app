import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 px-6 py-12 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Last Updated: August 24, 2026
          </p>
        </header>

        <p className="text-neutral-300 leading-relaxed">
          Welcome to SoundVolt. Please read these Terms of Service carefully before using our mobile application or web platform. By accessing or using our services, you agree to be bound by these terms.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide">
            1. Acceptance of Terms
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm">
            By creating an account or interacting with the SoundVolt platform, you confirm that you are at least 18 years of age and possess the legal authority to enter into this agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide">
            2. User Responsibilities & Events
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm">
            When organizing, sponsoring, or attending events through SoundVolt, you agree to provide accurate information and comply with all applicable local, national, and international laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide">
            3. Intellectual Property
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm">
            All content, branding, trademarks, logos, and software assets associated with SoundVolt remain the exclusive property of SoundVolt and its licensors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide">
            4. Limitation of Liability
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm">
            SoundVolt provides its services on an "as-is" basis. We are not liable for any indirect, incidental, or consequential damages resulting from your use of the platform or attendance at any events listed herein.
          </p>
        </section>

        <footer className="pt-6 border-t border-neutral-800 text-xs text-neutral-500 text-center">
          Contact legal@SoundVolt.com for any questions regarding these terms.
        </footer>
      </div>
    </div>
  );
}
