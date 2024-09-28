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
import BlogSection from "@/components/organisms/BlogSection";

import fetchData from "@/helper/FetchData";
import { TourPackage, ToursData } from "@/types/tour";
import { Destination } from "./blogs";
import ViatorBenefits from "@/components/organisms/OffersSection";
import ExploreEgyptSection from "@/components/molecules/NewHome";
import RelatedBlog from "@/components/molecules/Blogs/RelatedBlog";

type Blog = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

interface HomeProps {
  toursData: ToursData; // Tours data for general tours
  excursionData: TourPackage[]; // Rename for excursion tours data
  blogData: {
    data: Blog[]; // blogData will contain a data array
  };
  Destinations: Destination[];
}

export default function Home({
  toursData,
  excursionData,
  blogData,
  Destinations,
}: HomeProps) {
  // Limit Destinations to a maximum of 8
  const limitedDestinations = Destinations.slice(0, 8);

  return (
    <>
      <HeroSection />
      <ViatorBenefits />
      <WhyUsSection />
      {/* <ToursSection toursData={toursData} /> */}
      <ExcursionsSection toursData={excursionData} /> {/* Use excursionData */}
      <DestinationSection Destinations={limitedDestinations} />{" "}
      {/* Pass limited destinations */}
      <AttractionsSection />
      <WhyUsSection />
      <AdventuresSection />
      <ExploreEgyptSection />
      <PeaopleSaySection />
      {/* Add Blog Section */}
      <div>
        <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
          Blogs
        </div>
        <RelatedBlog blogData={blogData} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const toursData: ToursData = await fetchData("tours");
  const excursionData = await fetchData("tours?type=excursion"); // Rename this variable
  const Destinations = await fetchData("cities");
  const blogData = await fetchData("blogs");

  return {
    props: {
      toursData: toursData,
      excursionData: excursionData.data as TourPackage[], // Pass the renamed variable
      blogData: blogData,
      Destinations: Destinations.data,
    },
  };
}
