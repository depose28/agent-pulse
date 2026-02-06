import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen section-dark">
      {/* Header */}
      <header className="py-6 border-b border-dark-border">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-dark-muted hover:text-dark-fg transition-colors font-sans text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to AgentPulse
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-dark-fg tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-dark-muted font-sans">
                Last updated: [DATE]
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">1. Overview</h2>
              <p className="text-dark-muted font-sans leading-relaxed">
                AgentPulse is operated by re:found Labs, Berlin, Germany. We
                take your privacy seriously. This policy explains what data we
                collect, why we collect it, and your rights regarding that data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                2. Data Controller
              </h2>
              <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                <p className="font-medium text-dark-fg">re:found Labs</p>
                <p>Philipp [LAST NAME]</p>
                <p>[FULL ADDRESS]</p>
                <p>Berlin, Germany</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@agentpulse.com"
                    className="text-holo-2 hover:text-holo-1 transition-colors"
                  >
                    hello@agentpulse.com
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-serif text-dark-fg">
                3. What Data We Collect
              </h2>

              <div className="space-y-4">
                <h3 className="text-lg font-serif text-dark-fg">
                  Website URL you submit for scanning
                </h3>
                <p className="text-dark-muted font-sans leading-relaxed">
                  We scan the publicly accessible content of the URL you
                  provide. We do not access any private, password-protected, or
                  backend areas of your site.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-serif text-dark-fg">
                  Email address
                </h3>
                <p className="text-dark-muted font-sans leading-relaxed">
                  We collect your email address to deliver your scan results
                  and to communicate with you about your report. We do not sell
                  your email address to third parties.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-serif text-dark-fg">Usage data</h3>
                <p className="text-dark-muted font-sans leading-relaxed">
                  We use privacy-friendly analytics to understand how visitors
                  use AgentPulse. This may include page views, referral sources,
                  and general device/browser information. We do not use this
                  data to personally identify you.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-serif text-dark-fg">Cookies</h3>
                <p className="text-dark-muted font-sans leading-relaxed">
                  We use only essential cookies required for the site to
                  function. If we use analytics or affiliate tracking cookies,
                  we will ask for your explicit consent first via our cookie
                  banner. You can withdraw consent at any time.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                4. Why We Collect This Data
              </h2>
              <ul className="text-dark-muted font-sans leading-relaxed space-y-2 list-disc list-inside">
                <li>
                  To perform the AI Commerce Readiness scan you requested
                </li>
                <li>To deliver your scan results via email</li>
                <li>
                  To improve our service based on aggregate, anonymized usage
                  patterns
                </li>
                <li>
                  To recommend relevant tools that can help fix identified
                  issues
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                5. Affiliate Links & Third-Party Tools
              </h2>
              <p className="text-dark-muted font-sans leading-relaxed">
                Our scan results include recommendations for third-party tools
                that can help fix specific issues. Some of these recommendations
                contain affiliate links, meaning we may earn a commission if you
                sign up for or purchase the recommended tool. These affiliate
                partnerships do not influence which issues we identify — the
                scan is fully independent.
              </p>
              <p className="text-dark-muted font-sans leading-relaxed">
                When you click an affiliate link, you will be directed to the
                third-party tool's website. That third party's privacy policy
                will apply from that point forward. We encourage you to review
                their policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                6. Data Sharing
              </h2>
              <p className="text-dark-muted font-sans leading-relaxed mb-4">
                We do not sell your personal data. We may share data with:
              </p>
              <ul className="text-dark-muted font-sans leading-relaxed space-y-2 list-disc list-inside">
                <li>Email delivery service (to send your scan results)</li>
                <li>Analytics provider (anonymized usage data only)</li>
                <li>
                  Affiliate partners (only when you click an affiliate link —
                  they receive standard referral data, not your scan results)
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                7. Data Retention
              </h2>
              <p className="text-dark-muted font-sans leading-relaxed">
                We retain your email address and scan results for 12 months. You
                can request deletion at any time by emailing{" "}
                <a
                  href="mailto:hello@agentpulse.com"
                  className="text-holo-2 hover:text-holo-1 transition-colors"
                >
                  hello@agentpulse.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                8. Your Rights Under GDPR
              </h2>
              <p className="text-dark-muted font-sans leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-dark-muted font-sans leading-relaxed space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data ("right to be forgotten")</li>
                <li>Restrict processing of your data</li>
                <li>
                  Data portability (receive your data in a structured format)
                </li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-dark-muted font-sans leading-relaxed mt-4">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:hello@agentpulse.com"
                  className="text-holo-2 hover:text-holo-1 transition-colors"
                >
                  hello@agentpulse.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                9. Data Security
              </h2>
              <p className="text-dark-muted font-sans leading-relaxed">
                We use industry-standard security measures to protect your data,
                including encrypted connections (HTTPS) and secure data storage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">
                10. Changes to This Policy
              </h2>
              <p className="text-dark-muted font-sans leading-relaxed">
                We may update this policy from time to time. We will notify you
                of significant changes by posting a notice on our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-dark-fg">11. Contact</h2>
              <p className="text-dark-muted font-sans leading-relaxed">
                For any privacy-related questions or requests:
                <br />
                Email:{" "}
                <a
                  href="mailto:hello@agentpulse.com"
                  className="text-holo-2 hover:text-holo-1 transition-colors"
                >
                  hello@agentpulse.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
