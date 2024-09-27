import {
  AdventuresSection,
  AttractionsSection,
  DestinationSection,
  ExcursionsSection,
  HeroSection,
  OffersSection,
  PeaopleSaySection,
  ToursSection,
  WhyUsSection,
} from "@/components/organisms";
import fetchData from "@/helper/FetchData";
import { ToursData } from "@/types/tour";

interface HomeProps {
  toursData: ToursData;
}

export default function Home({ toursData }: HomeProps) {
  console.log("🚀 ~ Home ~ toursData:", toursData);

  return (
    <>
      <HeroSection />
      <div className="p-3">
        <OffersSection />
      </div>
      <WhyUsSection />
      <div className="lg:pr-3 lg:pl-4  bg-[#FAFAFA]">
        <ToursSection toursData={toursData} />
      </div>

      {/* <DestinationSection /> */}
      {/* <AttractionsSection /> */}
      {/* <ExcursionsSection /> */}
      {/* <AdventuresSection /> */}
      <div className=" lg:px-3 bg-[#FAFAFA]">
        <PeaopleSaySection />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data: ToursData = await fetchData("tours");

  return {
    props: {
      toursData: data,
    },
  };
}
