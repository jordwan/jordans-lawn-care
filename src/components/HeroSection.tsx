import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CONTACT_INFO, SERVICES } from "../constants/contact";
import heroImage from "../assets/heroimage.jpg";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
      <Image
        src={heroImage}
        alt="Jordan's Lawn Care team maintaining a lush Kelowna lawn"
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        priority
        sizes="(max-width: 768px) 100vw, 45vw"
        placeholder="blur"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent" aria-hidden />
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Your lawn,
          <br />
          <span className="text-teal-600">our passion.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Weekly maintenance, seasonal cleanups, and strata care programs backed by clear communication and zero surprises.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Explore services
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href={`tel:${CONTACT_INFO.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Call {CONTACT_INFO.phone}
        </Link>
      </div>

      <div className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-gray-100">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          What we do
        </h2>
        <ul className="mt-3 grid gap-2">
          {SERVICES.map((service) => (
            <li key={service} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-2 flex flex-col gap-5">
          <HeroImage />
        </div>
        <div className="w-full md:w-1/2 md:order-1 mt-8 md:mt-0">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
