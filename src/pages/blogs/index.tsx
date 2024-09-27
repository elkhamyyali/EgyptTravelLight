import React from "react";
import HeroBlog from "@/components/molecules/Blogs/HeroBlog";
import DestinationSection from "@/components/organisms/DestinationSection";
import BlogSection from "@/components/organisms/BlogSection";
import fetchData from "@/helper/FetchData";
import InterestsSection from "@/components/molecules/Blogs/Intersts";

type Blog = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

export type Destination = {
  id: number;
  name: string;
  panar_image: string;
  image?: string; // Optional property if it's sometimes missing
};

type Props = {
  blogData: {
    data: Blog[]; // blogData will contain a data array
  };
  Destinations: Destination[];
};

const BLogs: React.FC<Props> = ({ blogData, Destinations }) => {
  return (
    <div>
      <HeroBlog />
      <InterestsSection />
      {/* <DestinationSection Destinations={Destinations} /> */}
      <BlogSection blogData={blogData} />
    </div>
  );
};

export async function getServerSideProps() {
  const blogData = await fetchData("blogs"); // Fetch blogs data
  const Destinations = await fetchData("cities"); // Fetch destinations data

  return {
    props: {
      blogData: blogData, // blogData should already be in the correct format
      Destinations: Destinations.data, // Ensure Destinations is an array of data
    },
  };
}

export default BLogs;
