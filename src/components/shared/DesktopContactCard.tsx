import Link from "next/link";
import { ContactInfo } from "./ContactInfo";
import { CONTACT_INFO } from "../../constants/contact";

interface DesktopContactCardProps {
  className?: string;
}

export const DesktopContactCard = ({ className = "" }: DesktopContactCardProps) => {
  return (
    <div
      className={`hidden md:flex flex-col gap-3 rounded-2xl bg-gray-900 px-6 py-5 text-white shadow-lg ${className}`}
    >
      <h2 className="text-2xl font-semibold">Ready for a quote?</h2>
      <p className="text-sm text-gray-200">
        Reach out today and we&apos;ll schedule a visit within one business day.
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
      <ContactInfo className="pt-1 text-white [&_a]:text-white [&_a:hover]:text-teal-200" />
    </div>
  );
};

export default DesktopContactCard;
