import Link from "next/link";
import { MapPin } from "lucide-react";
import homeImage from "../assets/big-house-lawn.png";
import { ResponsiveImage } from "./shared/ResponsiveImage";
import { ServicesList } from "./shared/ServicesList";
import { DesktopContactCard } from "./shared/DesktopContactCard";
import { MobileContactCard } from "./shared/MobileContactCard";
import { SERVICE_AREAS } from "../constants/contact";

const ContactContent = () => {
  return (
    <div className="space-y-5 md:space-y-8 max-w-xl">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Contact us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Tell us about your lawn and we&apos;ll build a maintenance plan that fits your property and budget.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          <MapPin className="h-4 w-4" aria-hidden />
          Service area
        </div>
        <p className="mt-2 text-sm text-gray-700">
          {SERVICE_AREAS.join(", ")} and neighbouring communities.
        </p>
        <Link
          href="https://maps.app.goo.gl/V1yXgHdHYxRaldRH8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex text-sm font-semibold text-teal-600 hover:text-teal-500"
        >
          View service area map
        </Link>
      </div>

      <DesktopContactCard className="mt-5" />
    </div>
  );
};

export const Contact = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 md:order-1 flex flex-col gap-5">
          <ResponsiveImage
            src={homeImage}
            alt="Homeowner speaking with Jordan's Lawn Care crew"
            overlay
          />
          <ServicesList className="hidden md:block space-y-3" />
        </div>
        <div className="w-full md:w-1/2 order-2 md:order-2 mt-8 md:mt-0 space-y-5 md:space-y-6">
          <ContactContent />
          <ServicesList className="block md:hidden space-y-3" />
          <MobileContactCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
