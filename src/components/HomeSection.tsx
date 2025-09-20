import Link from "next/link";
import { CalendarCheck, Leaf, Sparkles } from "lucide-react";
import homeImage from "../assets/big-house-lawn.png";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ContactInfo } from "./shared/ContactInfo";
import { CONTACT_INFO, SERVICE_AREAS } from "../constants/contact";

const HIGHLIGHTS = [
  {
    icon: Leaf,
    title: "Eco-friendly upkeep",
    description: "Battery powered equipment and smart watering guidance keep your lawn healthy and quiet.",
  },
  {
    icon: CalendarCheck,
    title: "Reliable scheduling",
    description: "Consistent weekly routes for homeowners and strata properties all season long.",
  },
  {
    icon: Sparkles,
    title: "Detail focused",
    description: "Meticulous edging, clean blow downs, and post-service photo updates on request.",
  },
];

const HomeContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-white/40 backdrop-blur">
          Trusted in {SERVICE_AREAS[0]} & the Central Okanagan
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Kelowna&apos;s Best,
          <br />
          <span className="text-teal-600">Lawn Care Experts</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          From single family homes to strata communities, {CONTACT_INFO.companyName} keeps turf lush,
          tidy, and ready for every backyard moment.
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Servicing {SERVICE_AREAS.join(", ")}.
        </p>
      </div>

      <HighlightsGrid className="grid md:hidden" />

      <QuoteCard className="md:sticky md:top-36" />
    </div>
  );
};

const QuoteCard = ({ className = "" }) => {
  return (
    <div
      className={`space-y-4 rounded-2xl bg-gray-900 px-6 py-5 text-white shadow-lg ${className}`}
    >
      <h2 className="text-2xl font-semibold">Ready for a quote?</h2>
      <p className="text-sm text-gray-200">
        Call or email and we&apos;ll respond within one business day.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Request a quote
        </Link>
        <Link
          href={`tel:${CONTACT_INFO.phone}`}
          className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Call {CONTACT_INFO.phone}
        </Link>
      </div>
      <ContactInfo className="pt-2 text-white [&_a]:text-white [&_a:hover]:text-teal-200" />
    </div>
  );
};

export const HomeSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 pt-20 md:pt-32 pb-10 md:pb-20">
          <div className="w-full md:w-1/2 order-2 md:order-1 mt-3 md:mt-0">
            <HomeContent />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-3 md:gap-5">
            <ResponsiveImage
              src={homeImage}
              alt="Professional lawn care services in Kelowna"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
            />
            <HighlightsGrid className="hidden md:grid" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HighlightsGrid = ({ className = "" }: { className?: string }) => (
  <div
    className={`grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-3 md:mt-0 mb-4 ${className}`}
  >
    {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
      <div
        key={title}
        className="flex gap-2.5 rounded-2xl bg-teal-50/90 px-3 py-3 md:p-4 shadow-sm ring-1 ring-teal-100/80 backdrop-blur transition hover:shadow-md"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm md:text-lg font-semibold text-gray-900 leading-snug">{title}</h3>
          <p className="text-xs md:text-sm text-gray-600 leading-snug">{description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default HomeSection;
