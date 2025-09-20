import { Sprout, ThumbsUp, Users } from "lucide-react";
import homeImage from "../assets/img5.jpg";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ServicesList } from "./shared/ServicesList";
import { DesktopContactCard } from "./shared/DesktopContactCard";
import { MobileContactCard } from "./shared/MobileContactCard";

const ABOUT_POINTS = [
  {
    icon: Sprout,
    title: "Locally owned",
    description: "Born and raised in Kelowna, we understand the Central Okanagan climate and soil.",
  },
  {
    icon: Users,
    title: "Strata ready",
    description: "Fully insured with professional reporting for councils and property managers.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction guaranteed",
    description: "If something looks off after a visit we&apos;ll come back and make it right.",
  },
];

const AboutHighlights = ({ className = "" }: { className?: string }) => (
  <div
    className={`grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 ${className}`}
  >
    {ABOUT_POINTS.map(({ icon: Icon, title, description }) => (
      <div key={title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="mt-3 text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    ))}
  </div>
);

const AboutContent = () => {
  return (
    <div className="space-y-5 md:space-y-8 max-w-xl">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          About us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Lawn care that feels personal. We blend modern equipment with old-school reliability to keep every property we service photo-ready.
        </p>
      </div>

      <ServicesList className="space-y-3" />

      <DesktopContactCard className="mt-6" />
    </div>
  );
};

export const About2 = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-1 flex flex-col gap-5">
          <ResponsiveImage
            src={homeImage}
            alt="Kelowna lawn freshly cut by Jordan's Lawn Care"
            overlay
          />
          <AboutHighlights className="hidden md:grid" />
        </div>
        <div className="w-full md:w-1/2 order-2 md:order-2 mt-8 md:mt-0 space-y-5 md:space-y-6">
          <AboutContent />
          <AboutHighlights className="grid md:hidden" />
          <MobileContactCard />
        </div>
      </div>
    </section>
  );
};

export default About2;
