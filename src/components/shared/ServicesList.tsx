import React from "react";
import { SERVICES } from "../../constants/contact";

interface ServicesListProps {
  className?: string;
}

export const ServicesList: React.FC<ServicesListProps> = ({ className = "" }) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {SERVICES.map((service, index) => (
        <li
          key={index}
          className="flex items-start space-x-2 text-lg text-gray-700"
        >
          <span className="text-teal-500 font-bold mt-1">•</span>
          <span className="text-xl text-gray-600 font-bold mt-1">
            {service}
          </span>
        </li>
      ))}
    </ul>
  );
};