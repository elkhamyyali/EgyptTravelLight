import React from "react";
import {
  FaClock,
  FaGlobeAmericas,
  FaLock,
  FaCalendarAlt,
} from "react-icons/fa";
import { TourDetail } from "@/types/tour"; // Import the TourDetail interface

interface TripInfoProps {
  DetailTour: TourDetail; // Use the TourDetail interface for typing
}

const TripInfo: React.FC<TripInfoProps> = ({ DetailTour }) => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-start mt-3 lg:mt-4 ">Overview</h2>
      <div
        className="font-segoe mt-5 text-xl"
        dangerouslySetInnerHTML={{
          __html: DetailTour.description ?? "No description available.",
        }}
      />
      <hr className="mt-2" />
    </div>
  );
};

export default TripInfo;
