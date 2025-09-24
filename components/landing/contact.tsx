"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Mail, Phone } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // No backend specified; mimic a submit and reset
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log(data);
    // TODO: wire up to your endpoint or service
    await new Promise((r) => setTimeout(r, 800));
    form.reset();
    setSubmitting(false);
    alert("Thanks for reaching out. We’ll get back to you shortly.");
  }

  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className={`text-2xl md:text-3xl ${playfair.className}`}>Contact Us</h2>
          <p className="text-white/70">
            Tell us about your matter. We’ll review your message and get back to you promptly.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <Link href="tel:9899950713" className="hover:underline">
                +91 9899950713
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link href="mailto:dsyconsultants@gmail.com" className="hover:underline">
                dsyconsultants@gmail.com
              </Link>
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              placeholder="Your full name"
              className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="e.g. 9899950713"
              className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Message
            </label>
            <textarea
              rows={5}
              required
              id="message"
              name="message"
              placeholder="Briefly describe your matter..."
              className="w-full resize-y rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
