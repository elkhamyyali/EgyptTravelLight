import React from "react";
import Included from "./Included";
import TourItinerary from "./Itinerary";
import PricePlans from "./PriceSection";
import UserProfilePage from "./Travelers";
import FAQ from "./Freq";
import Reviews from "./Reviews";
import RandomButtons from "./RandomButtons";
import { TourDetail } from "@/types/tour";
import TripInfo from "./Trip";

interface MyPagedeailsProps {
  DetailTour: TourDetail;
}
const DetailsSection: React.FC<MyPagedeailsProps> = ({ DetailTour }) => {
  return (
    <div>
      {" "}
      <div className="lg:px-28 pt-5">
        <TripInfo DetailTour={DetailTour} />
        <Included DetailTour={DetailTour} />
        <TourItinerary DetailTour={DetailTour} />
        {/* <PricePlans DetailTour={{ tour_prices: DetailTour.tour_prices }} /> */}
        <UserProfilePage />
        <FAQ DetailTour={DetailTour} />
        <Reviews />
        <RandomButtons DetailTour={{ tags: DetailTour.tags }} />
      </div>
    </div>
  );
};

export default DetailsSection;
