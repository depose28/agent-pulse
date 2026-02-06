import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Terms of Service</h1>
        <p className="text-muted-foreground font-sans mb-12">Last updated: [DATE]</p>

        <div className="space-y-10 font-sans text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif mb-4">1. Overview</h2>
            <p>
              AgentPulse is a free AI Commerce Readiness diagnostic tool operated by re:found Labs, Berlin, Germany. By using AgentPulse, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">2. What AgentPulse Does</h2>
            <p>
              AgentPulse scans publicly accessible web pages and evaluates them against a set of AI commerce readiness signals, including structured data markup, schema implementation, crawlability, and protocol readiness. Based on this analysis, we generate an AI Commerce Score and a list of identified issues with recommended fixes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">3. Accuracy & Limitations</h2>
            <p className="mb-4">
              AgentPulse scan results are provided on an "as-is" basis and represent a snapshot of your site's publicly accessible data at the time of scanning. Results may vary depending on factors including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Your technology stack, theme, or platform configuration</li>
              <li>CDN, caching, or server-side rendering behavior</li>
              <li>Recent changes to your site that may not yet be indexed</li>
              <li>Dynamic content loading (JavaScript-rendered content may not be fully evaluated)</li>
              <li>Third-party plugins, apps, or scripts that modify your site's markup</li>
            </ul>
            <p className="mt-4">
              We continuously improve our scanning engine and evaluation criteria, but we do not guarantee that results are complete, error-free, or suitable for any specific purpose. Your AI Commerce Score is an indicative diagnostic, not a certification or audit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">4. Recommended Tools & Affiliate Links</h2>
            <p className="mb-4">
              Our scan results may include recommendations for third-party tools and services that can help address identified issues. Some of these recommendations contain affiliate links, meaning re:found Labs may earn a commission if you sign up for or purchase the recommended tool.
            </p>
            <p className="mb-4">
              Affiliate partnerships do not influence which issues our scanner identifies. The diagnostic scan is fully independent. However, the specific tools we recommend may reflect our affiliate relationships. We only recommend tools we have vetted and believe to be effective, but we are not responsible for the quality, performance, or reliability of any third-party tool or service.
            </p>
            <p>
              Your use of any recommended third-party tool is governed by that tool's own terms of service and privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">5. Acceptable Use</h2>
            <p className="mb-4">
              You agree to use AgentPulse only for lawful purposes. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Submit URLs you do not own or have authorization to scan in bulk for commercial purposes</li>
              <li>Attempt to circumvent rate limits or scan restrictions</li>
              <li>Use automated scripts or bots to submit scans</li>
              <li>Resell, redistribute, or white-label scan results without written permission</li>
              <li>Attempt to reverse-engineer, decompile, or extract the scanning methodology</li>
            </ul>
            <p className="mt-4">
              Scanning a competitor's publicly accessible website for your own benchmarking purposes is permitted within the standard rate limits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              The AI Commerce Score methodology, scoring framework, and scanning engine are the intellectual property of re:found Labs. Scan results are provided for your use but the underlying methodology, algorithms, and evaluation criteria remain our property.
            </p>
            <p>
              You may share your own scan results (including via the shareable score badge) for personal or business purposes. You may not represent AgentPulse scan results as your own proprietary analysis or methodology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">7. Data & Privacy</h2>
            <p>
              Your use of AgentPulse is also governed by our{" "}
              <Link to="/privacy" className="text-holo-2 hover:text-holo-1 transition-colors">
                Privacy Policy
              </Link>
              . By submitting a URL and email address, you consent to the data processing described in that policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, re:found Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, arising from or related to your use of AgentPulse or reliance on scan results.
            </p>
            <p>
              Our total liability for any claim arising from these terms or your use of AgentPulse shall not exceed the amount you paid us in the 12 months preceding the claim (which, for free tier users, is zero). This does not affect your statutory rights as a consumer under applicable EU or German law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">9. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of AgentPulse after changes constitutes acceptance of the updated terms. We will post the updated date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of Germany. The courts of Berlin, Germany shall have jurisdiction over any disputes arising from these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">11. Contact</h2>
            <p>
              For questions about these terms:<br />
              Email:{" "}
              <a
                href="mailto:hello@agentpulse.com"
                className="text-holo-2 hover:text-holo-1 transition-colors"
              >
                hello@agentpulse.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
