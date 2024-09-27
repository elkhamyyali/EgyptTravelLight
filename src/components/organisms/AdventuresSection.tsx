import React from "react";
import Adventures from "../molecules/Adventures/Adventures";

type Props = {};

const AdventuresSection = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        Adventures For Everyone
      </div>
      <div>
        <Adventures />
      </div>
    </div>
  );
};

export default AdventuresSection;
