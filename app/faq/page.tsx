import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { HelpCircle, ChevronDown, Phone, Mail } from "lucide-react";

import BlurFade from "@/components/ui/blur-fade";

export const metadata: Metadata = {
  title: "FAQ — DSY Consultants",
  description:
    "Answers to common questions about DSY Consultants: who can seek advice, response time, online consultation benefits, and why choose us.",
};

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="mb-10 md:mb-14">
        <BlurFade inView>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs tracking-wider text-white/60">
            <HelpCircle className="h-4 w-4" aria-hidden="true" /> FAQ
          </span>
        </BlurFade>
        <BlurFade inView delay={0.25 + 2 * 0.1}>
          <h1 className={`mt-4 text-3xl leading-tight md:text-5xl ${playfair.className}`}>
            Frequently Asked Questions
          </h1>
        </BlurFade>
        <BlurFade inView delay={0.25 + 2 * 0.1}>
          <p className="mt-3 text-white/70">Redefining Legal Care</p>
        </BlurFade>
      </header>

      <section aria-labelledby="faq-heading" className="space-y-4">
        {/* Q1 */}
        <BlurFade inView delay={0.25 + 2 * 0.1}>
          <details className="group rounded-lg border border-white/10 bg-white/[0.02]">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
              <h2 id="faq-heading" className="text-base font-medium md:text-lg">
                Who can ask for legal advice?
              </h2>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-white/60 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pt-1 pb-5">
              <ul className="list-disc space-y-2 pl-5 text-white/70">
                <li>Any person or body corporate in India or outside India.</li>
                <li>Government of India authorities.</li>
              </ul>
            </div>
          </details>
        </BlurFade>

        {/* Q2 */}
        <BlurFade inView delay={0.25 + 3 * 0.1}>
          <details className="group rounded-lg border border-white/10 bg-white/[0.02]">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
              <h2 className="text-base font-medium md:text-lg">
                What is the average time taken to revert back to your query?
              </h2>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-white/60 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pt-1 pb-5 text-white/70">
              Usually, our experts revert back to you within 10 minutes to 24 working hours.
            </div>
          </details>
        </BlurFade>

        {/* Q3 */}
        <BlurFade inView delay={0.25 + 4 * 0.1}>
          <details className="group rounded-lg border border-white/10 bg-white/[0.02]">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
              <h2 className="text-base font-medium md:text-lg">Why online consultation?</h2>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-white/60 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pt-1 pb-5">
              <ul className="list-disc space-y-2 pl-5 text-white/70">
                <li>Time-saving</li>
                <li>Convenient</li>
                <li>Save transportation cost</li>
                <li>Easy to seek urgent advice and solution</li>
                <li>Private Matters can be discussed freely</li>
              </ul>
            </div>
          </details>
        </BlurFade>

        {/* Q4 */}
        <BlurFade inView delay={0.25 + 5 * 0.1}>
          <details className="group rounded-lg border border-white/10 bg-white/[0.02]">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
              <h2 className="text-base font-medium md:text-lg">Why prefer DSY CONSULTANTS?</h2>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-white/60 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pt-1 pb-5">
              <ul className="list-disc space-y-2 pl-5 text-white/70">
                <li>Professionalism, culture & transparency in dealings.</li>
                <li>Exemplary service motive.</li>
                <li>Unfettered problem-solving attitude.</li>
                <li>Unbiased, unprejudiced & dedicated support.</li>
                <li>A thoroughly devised action plan for each lawsuit.</li>
              </ul>
            </div>
          </details>
        </BlurFade>
      </section>

      {/* Contact CTA */}
      <BlurFade inView delay={0.25 + 6 * 0.1}>
        <section className="mt-14 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className={`text-xl md:text-2xl ${playfair.className}`}>Still have questions?</h3>
              <p className="mt-1 text-white/70">
                We’re here to help. Reach out and we’ll get back to you as soon as we can.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="tel:9899950713"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> +91 9899950713
              </a>
              <a
                href="mailto:dsyconsultants@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> dsyconsultants@gmail.com
              </a>
            </div>
          </div>
        </section>
      </BlurFade>
    </main>
  );
}
