import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "../../constants/contact";

interface ContactInfoProps {
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <Link
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors"
      >
        <Phone className="w-6 h-6" />
        <span>{CONTACT_INFO.phone}</span>
      </Link>
      <Link
        href={`mailto:${CONTACT_INFO.email}?subject=Lawn Care Inquiry`}
        className="flex items-center space-x-2 text-lg md:text-xl font-bold text-teal-500 hover:text-teal-600 transition-colors"
      >
        <Mail className="w-6 h-6" />
        <span>{CONTACT_INFO.email}</span>
      </Link>
    </div>
  );
};