import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "../../constants/contact";

interface ServicesListProps {
  className?: string;
}

export const ServicesList: React.FC<ServicesListProps> = ({ className = "" }) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {SERVICES.map((service) => (
        <li key={service} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-500" aria-hidden />
          <span className="font-semibold text-gray-700">{service}</span>
        </li>
      ))}
    </ul>
  );
};
