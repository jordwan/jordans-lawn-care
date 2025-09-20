import Link from "next/link";
import { CONTACT_INFO } from "../../constants/contact";

export const RequestQuoteBar = () => {
  return (
    <section className="mt-12 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500">
      <div className="mx-auto flex flex-col gap-4 px-4 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Ready to transform your lawn?
          </p>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">
            Fast quotes from a local Kelowna crew.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-teal-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Request a quote
          </Link>
          <Link
            href={`tel:${CONTACT_INFO.phone}`}
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call {CONTACT_INFO.phone}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteBar;
