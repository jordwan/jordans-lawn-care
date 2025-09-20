import { CalendarDays, Leaf, Sparkles } from "lucide-react";
import homeImage from "../assets/mowing-service.jpg";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ServicesList } from "./shared/ServicesList";
import { DesktopContactCard } from "./shared/DesktopContactCard";
import { MobileContactCard } from "./shared/MobileContactCard";

const SERVICE_PACKAGES = [
  {
    icon: Leaf,
    title: "Weekly mow & trim",
    description: "Reliable 7-day rotations keep turf healthy and walkways spotless.",
  },
  {
    icon: Sparkles,
    title: "Seasonal cleanups",
    description: "Spring power raking, fall leaf removal, and garden bed refreshes.",
  },
  {
    icon: CalendarDays,
    title: "Strata programs",
    description: "Custom care plans with detailed reporting for property managers.",
  },
];

const Services2Content = () => {
  return (
    <div className="space-y-5 md:space-y-8 max-w-xl">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Our services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Flexible, year-round lawn care that scales from cozy backyards to multi-building strata communities.
        </p>
      </div>

      <ServicesList className="space-y-3" />

      <DesktopContactCard className="mt-6" />
    </div>
  );
};

const PackagesGrid = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${className}`}
    >
      {SERVICE_PACKAGES.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="mt-3 text-base font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  );
};

export const Services2 = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-1 flex flex-col gap-5">
          <ResponsiveImage
            src={homeImage}
            alt="Jordan's Lawn Care team mowing a residential property"
            overlay
          />
          <PackagesGrid className="hidden md:grid" />
        </div>
        <div className="w-full md:w-1/2 md:order-2 mt-8 md:mt-0 space-y-5 md:space-y-6">
          <Services2Content />
          <PackagesGrid className="grid md:hidden" />
          <MobileContactCard />
        </div>
      </div>
    </section>
  );
};

export default Services2;
