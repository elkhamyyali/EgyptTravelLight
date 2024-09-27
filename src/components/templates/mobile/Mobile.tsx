import React, { useState } from "react";
import MobileSidebar from "@/components/atoms/Filters/MobileSidebar";
import MobileSearchModal from "@/components/atoms/Search/MobileSearchModal";
import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";
import { ToursData } from "@/types/tour";

interface MobileProps {
  toursData: ToursData;
}

const Mobile: React.FC<MobileProps> = ({ toursData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // State management for filters
  const [price, setPrice] = useState<[number, number]>([0, 1000]);
  const [selectedDestination, setSelectedDestination] =
    useState<string>("Spain");
  const [selectedStarRating, setSelectedStarRating] =
    useState<string>("5 stars");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "Restaurant",
  ]);
  const [selectedAccommodationType, setSelectedAccommodationType] =
    useState<string>("Hotel");

  // Handle price change
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrice(newValue as [number, number]);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setPrice([0, 1000]);
    setSelectedDestination("");
    setSelectedStarRating("");
    setSelectedAmenities([]);
    setSelectedAccommodationType("");
  };

  return (
    <div className="bg-[#FAFAFA] h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 bg-[#FAFAFA] p-6 z-10">
        <div className="mt-16 flex justify-center items-center gap-3 w-full">
          <div className="">
            <MobileSearchModal />
          </div>
          <div className="">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-custom-gradient text-nowrap mb-1 p-3 text-white rounded-md"
            >
              Open Filter
            </button>
            <MobileSidebar
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              price={price}
              selectedDestination={selectedDestination}
              selectedStarRating={selectedStarRating}
              selectedAmenities={selectedAmenities}
              selectedAccommodationType={selectedAccommodationType}
              handlePriceChange={handlePriceChange}
              handleClearFilters={handleClearFilters}
              setSelectedDestination={setSelectedDestination}
              setSelectedStarRating={setSelectedStarRating}
              setSelectedAmenities={setSelectedAmenities}
              setSelectedAccommodationType={setSelectedAccommodationType}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto mt-[calc(40px+6rem)]">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <TravelPackagePage toursData={toursData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
