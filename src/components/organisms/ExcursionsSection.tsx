import React from "react";
import Excursions from "../molecules/Excursions/Excursions";
import ExcursionsHome from "./ExcursionsHome";

type Props = {
  toursData: any; // Adjust this type according to your actual data structure
};

const ExcursionsSection: React.FC<Props> = ({ toursData }) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        Top Excursions
      </div>
      <div>
        <ExcursionsHome toursData={toursData} />{" "}
        {/* Passing toursData correctly */}
      </div>
    </div>
  );
};

export default ExcursionsSection;
