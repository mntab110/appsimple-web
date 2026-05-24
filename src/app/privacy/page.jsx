import React from "react";

export default function PrivacyPolicyPage() {
  const effectiveDate = "May 23, 2026";

  return (
    <main className="flex-grow max-w-3xl mx-auto px-6 py-24 md:py-32">
      <nav className="mb-16">
        <a
          href="/"
          className="text-sm font-medium hover:opacity-60 transition-opacity"
        >
          ← Back to AppSimple
        </a>
      </nav>

      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 italic">
          Effective Date: {effectiveDate}
        </p>
      </header>

      <div className="prose prose-sm max-w-none space-y-8 text-[#333]">
        <section>
          <p className="leading-relaxed">
            AppSimple respects your privacy. This policy outlines how we handle
            information across the applications we develop and our online
            presence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-black">
            Data Collection
          </h2>
          <p className="leading-relaxed">
            Applications developed by AppSimple may collect limited user
            information necessary for authentication, subscriptions, account
            management, and core application functionality. This information may
            include:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Email address</li>
            <li>Account information</li>
            <li>Subscription status</li>
            <li>User-generated content and preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-black">
            How We Use Data
          </h2>
          <p className="leading-relaxed">
            We use the collected information solely to provide and improve our
            services. User information is never sold to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-black">
            Third-Party Services
          </h2>
          <p className="leading-relaxed mb-4">
            To provide high-quality experiences, we use trusted third-party
            providers for specific functionalities:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Supabase", "RevenueCat", "Apple App Store", "Google Auth"].map(
              (service) => (
                <div
                  key={service}
                  className="p-3 border border-gray-100 rounded-lg text-center text-xs font-medium bg-gray-50/50"
                >
                  {service}
                </div>
              ),
            )}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-black">
            Data Control & Deletion
          </h2>
          <p className="leading-relaxed">
            Users may request account deletion or data removal at any time. To
            exercise these rights, please contact us at:
          </p>
          <a
            href="mailto:admin@appsimple.com"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            admin@appsimple.com
          </a>
        </section>

        <section className="pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            This Privacy Policy may be updated periodically as our applications
            evolve. We encourage users to review this page for any changes.
          </p>
        </section>
      </div>

      <footer className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
        <p>© 2026 AppSimple. All rights reserved.</p>
        <a href="/" className="hover:text-black transition-colors">
          Home
        </a>
      </footer>
    </main>
  );
}
