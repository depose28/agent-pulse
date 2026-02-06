import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Impressum = () => {
  const [language, setLanguage] = useState<"de" | "en">("de");

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
          >
            {/* Language Toggle */}
            <div className="flex justify-end mb-8">
              <div className="inline-flex p-1 rounded-lg bg-dark-card border border-dark-border">
                <button
                  onClick={() => setLanguage("de")}
                  className={`px-4 py-2 rounded-md text-sm font-sans transition-all ${
                    language === "de"
                      ? "bg-dark-border text-dark-fg"
                      : "text-dark-muted hover:text-dark-fg"
                  }`}
                >
                  Deutsch
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-md text-sm font-sans transition-all ${
                    language === "en"
                      ? "bg-dark-border text-dark-fg"
                      : "text-dark-muted hover:text-dark-fg"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {language === "de" ? (
              /* German Version */
              <div className="space-y-10">
                <h1 className="text-4xl md:text-5xl font-serif text-dark-fg tracking-tight">
                  Impressum
                </h1>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Angaben gemäß § 5 DDG
                  </h2>
                  <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                    <p className="font-medium text-dark-fg">re:found Labs</p>
                    <p>Philipp [LAST NAME]</p>
                    <p>[STREET ADDRESS]</p>
                    <p>[POSTAL CODE] Berlin</p>
                    <p>Germany</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">Kontakt</h2>
                  <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                    <p>
                      E-Mail:{" "}
                      <a
                        href="mailto:hello@agentpulse.com"
                        className="text-holo-2 hover:text-holo-1 transition-colors"
                      >
                        hello@agentpulse.com
                      </a>
                    </p>
                    <p>Telefon: [PHONE NUMBER]</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
                  </h2>
                  <p className="text-dark-muted font-sans">[UST-ID NUMBER]</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                  </h2>
                  <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                    <p>Philipp [LAST NAME]</p>
                    <p>[STREET ADDRESS]</p>
                    <p>[POSTAL CODE] Berlin, Germany</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    EU-Streitschlichtung
                  </h2>
                  <p className="text-dark-muted font-sans leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-holo-2 hover:text-holo-1 transition-colors break-all"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-dark-muted font-sans">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Verbraucherstreitbeilegung / Universalschlichtungsstelle
                  </h2>
                  <p className="text-dark-muted font-sans leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>
              </div>
            ) : (
              /* English Version */
              <div className="space-y-10">
                <h1 className="text-4xl md:text-5xl font-serif text-dark-fg tracking-tight">
                  Legal Notice
                </h1>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Information pursuant to § 5 DDG (German Digital Services
                    Act)
                  </h2>
                  <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                    <p className="font-medium text-dark-fg">re:found Labs</p>
                    <p>Philipp [LAST NAME]</p>
                    <p>[STREET ADDRESS]</p>
                    <p>[POSTAL CODE] Berlin, Germany</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">Contact</h2>
                  <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:hello@agentpulse.com"
                        className="text-holo-2 hover:text-holo-1 transition-colors"
                      >
                        hello@agentpulse.com
                      </a>
                    </p>
                    <p>Phone: [PHONE NUMBER]</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    VAT ID pursuant to § 27a UStG
                  </h2>
                  <p className="text-dark-muted font-sans">[VAT ID NUMBER]</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Responsible for content pursuant to § 18 (2) MStV
                  </h2>
                  <div className="text-dark-muted font-sans leading-relaxed space-y-1">
                    <p>Philipp [LAST NAME]</p>
                    <p>[STREET ADDRESS]</p>
                    <p>[POSTAL CODE] Berlin, Germany</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    EU Dispute Resolution
                  </h2>
                  <p className="text-dark-muted font-sans leading-relaxed">
                    The European Commission provides an online dispute
                    resolution platform:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-holo-2 hover:text-holo-1 transition-colors break-all"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-serif text-dark-fg">
                    Consumer Dispute Resolution
                  </h2>
                  <p className="text-dark-muted font-sans leading-relaxed">
                    We are not willing or obliged to participate in dispute
                    resolution proceedings before a consumer arbitration board.
                  </p>
                </section>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
