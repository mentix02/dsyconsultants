import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Gavel, Shield, Briefcase, Phone, Mail } from "lucide-react";

import BlurFade from "@/components/ui/blur-fade";
import Contact from "@/components/landing/contact";
import ServiceCard from "@/components/landing/service-card";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default async function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <BlurFade inView>
              <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs tracking-wider text-white/60">
                Since 2018
              </span>
            </BlurFade>
            <BlurFade inView>
              <h1 className={`text-4xl leading-tight md:text-6xl ${playfair.className}`}>Redefining Legal Care</h1>
            </BlurFade>
            <BlurFade inView>
              <p className="max-w-xl text-white/70">
                DSY CONSULTANTS is a Legal Consulting Agency based out of Faridabad that has been delivering solutions
                to clients since 2018. We offer an impressive portfolio of professional consulting services that are
                completely customizable for your business needs and issues. Whatever your problems may be.
              </p>
            </BlurFade>
            <BlurFade inView>
              <div className="flex items-center gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                >
                  Get in touch
                </Link>
                <Link
                  href="tel:9899950713"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  <Phone className="h-4 w-4" /> +91 9899950713
                </Link>
              </div>
            </BlurFade>
          </div>
          <div className="flex items-center md:justify-end">
            <BlurFade inView>
              <div className="w-full rounded-lg border border-white/10 p-6">
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 rounded-md border border-white/15 p-2">
                      <Gavel className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium">Litigation Strategy</p>
                      <p className="text-sm text-white/60">Clarity and direction for complex disputes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 rounded-md border border-white/15 p-2">
                      <Briefcase className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium">Corporate Advisory</p>
                      <p className="text-sm text-white/60">Governance, structuring, and transactions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 rounded-md border border-white/15 p-2">
                      <Shield className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium">Regulatory Compliance</p>
                      <p className="text-sm text-white/60">Stay aligned with evolving regulations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 rounded-md border border-white/15 p-2">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium">Contract Review & Drafting</p>
                      <p className="text-sm text-white/60">Clear, protective, and enforceable documents.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <BlurFade inView>
              <h2 className={`text-2xl md:text-3xl ${playfair.className}`}>Our Services</h2>
            </BlurFade>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <BlurFade inView delay={0.25 + 1 * 0.05}>
              <ServiceCard
                icon={<Gavel className="h-5 w-5" aria-hidden="true" />}
                title="Dispute Resolution"
                desc="Strategy-first approach for litigation and arbitration."
              />
            </BlurFade>
            <BlurFade inView delay={0.25 + 2 * 0.05}>
              <ServiceCard
                icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}
                title="Corporate Advisory"
                desc="Entity structuring, deals, due diligence, and governance."
              />
            </BlurFade>
            <BlurFade inView delay={0.25 + 3 * 0.05}>
              <ServiceCard
                icon={<Shield className="h-5 w-5" aria-hidden="true" />}
                title="Compliance"
                desc="Regulatory risk assessment and ongoing compliance support."
              />
            </BlurFade>
            <BlurFade inView delay={0.25 + 4 * 0.05}>
              <ServiceCard
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                title="Contracts"
                desc="Drafting, reviewing, and negotiation for protection and clarity."
              />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div className="space-y-4">
            <BlurFade inView>
              <h2 className={`text-2xl md:text-3xl ${playfair.className}`}>About DSY Consultants</h2>
            </BlurFade>
            <BlurFade inView>
              <p className="text-white/70">
                DSY CONSULTANTS was founded in 2018 with a single mission: to be the most successful, creative, and
                ground-breaking consulting agency. We approach each of our clients with fresh eyes to develop
                customized, unique strategies and solutions. Our solutions are creative and tailored for your
                situations. Contact us today and see what we can do for you.
              </p>
            </BlurFade>
          </div>
          <BlurFade inView>
            <div className="rounded-lg border border-white/10 p-6">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-white/60">Phone</dt>
                  <dd className="mt-1">
                    <Link href="tel:9899950713" className="hover:underline">
                      +91 9899950713
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Email</dt>
                  <dd className="mt-1">
                    <Link href="mailto:dsyconsultants@gmail.com" className="hover:underline">
                      dsyconsultants@gmail.com
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact */}
      <BlurFade inView>
        <Contact />
      </BlurFade>
    </>
  );
}
