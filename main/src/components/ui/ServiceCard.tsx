import React from "react";
import type { ServiceCard as ServiceCardType } from "../../types";

interface ServiceCardProps {
  service: ServiceCardType;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <h3 className="font-bold text-xl mb-3 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
