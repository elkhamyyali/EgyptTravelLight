import React from "react";
import Excursions from "../molecules/Excursions/Excursions";

type Props = {};

const ExcursionsSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        Top Excursions
      </div>
      <div>
        <Excursions />
      </div>
    </div>
  );
};

export default ExcursionsSection;
