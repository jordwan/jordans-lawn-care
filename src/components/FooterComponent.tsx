import Image from "next/image";
import Link from "next/link";
import jlcLogo2 from "../assets/jcl-logo.jpg";
import { CONTACT_INFO, SERVICE_AREAS } from "../constants/contact";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700">
      <div className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-5 max-w-sm">
            <Link href="/" className="inline-flex">
              <Image
                src={jlcLogo2}
                alt="Jordan's Lawn Care Logo"
                width={180}
                height={72}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600">
              Premium lawn care throughout {SERVICE_AREAS.join(", ")} with reliable scheduling and meticulous results every visit.
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="block w-fit rounded-full bg-teal-500 px-4 py-1.5 font-semibold text-white shadow-sm transition hover:bg-teal-400"
              >
                {CONTACT_INFO.phone}
              </Link>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="block w-fit rounded-full border border-teal-200 px-4 py-1.5 font-semibold text-teal-600 transition hover:border-teal-300 hover:text-teal-700"
              >
                {CONTACT_INFO.email}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 text-sm md:grid-cols-2 md:gap-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Quick links
              </p>
              <nav className="grid gap-2 text-base font-medium">
                <Link href="/" className="transition hover:text-teal-600">
                  Home
                </Link>
                <Link href="/services" className="transition hover:text-teal-600">
                  Services
                </Link>
                <Link href="/about" className="transition hover:text-teal-600">
                  About
                </Link>
                <Link href="/contact" className="transition hover:text-teal-600">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Service area
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {SERVICE_AREAS.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 text-sm text-slate-500 sm:flex-row sm:justify-between sm:px-6">
          <p>&copy; {currentYear} Jordan&apos;s Lawn Care. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              Facebook
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              Twitter
            </Link>
          </div>
          <Link
            href="http://jordwan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition hover:text-teal-600"
          >
            Website by jordwan
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
