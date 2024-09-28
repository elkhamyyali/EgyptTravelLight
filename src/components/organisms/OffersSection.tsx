import React from "react";
import { Phone, Star, Calendar, Globe } from "lucide-react"; // Added Globe icon

const BenefitItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div
      className="rounded-full p-3 mb-4"
      style={{ backgroundColor: icon.color }}
    >
      {icon.component}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const ViatorBenefits = () => {
  const benefits = [
    {
      icon: {
        component: <Phone className="w-6 h-6 text-blue-900" />,
        color: "#FADADD",
      },
      title: "24/7 customer support",
      description: "No matter the time zone, we're here to help.",
    },
    {
      icon: {
        component: <Star className="w-6 h-6 text-blue-900" />,
        color: "#FFFACD",
      },
      title: "Millions of reviews",
      description:
        "Plan and book with confidence using reviews from fellow travelers.",
    },
    {
      icon: {
        component: <Calendar className="w-6 h-6 text-blue-900" />,
        color: "#F0F8FF",
      },
      title: "Plan your way",
      description:
        "Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.",
    },
    {
      icon: {
        component: <Globe className="w-6 h-6 text-blue-900" />, // New Globe icon
        color: "#E6E6FA",
      },
      title: "Worldwide destinations",
      description: "Explore tours and activities in destinations worldwide.",
    },
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why book with Viator?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default ViatorBenefits;
