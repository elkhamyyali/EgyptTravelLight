import React from "react";
import MyPage from "@/components/templates/MyPage";
import BookingFormDesktop from "@/components/atoms/BookForm/BookingFormDesktop";
import fetchData from "@/helper/FetchData";
import { GetServerSidePropsContext } from "next";
import { TourDetail } from "@/types/tour";
import DetailsSection from "@/components/templates/DetailsSection";

interface ImageGalleryProps {
  DetailTour: TourDetail;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ DetailTour }) => {
  console.log("🚀 ~ DetailTour:", DetailTour);

  // Function to scroll to the top minus 100 pixels
  const scrollToTop = () => {
    window.scrollTo({
      top: 300, // Scroll to 100 pixels less than the current scroll position
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#FAFAFA] md:pt-5 md:px-16">
        <div className="w-full md:w-1/3 p-2 pt-2 md:pt-44 order-2">
          <BookingFormDesktop DetailTour={DetailTour} />
        </div>

        <div className="w-full md:w-2/3 mt-16 p-0 md:pl-0 md:mt-24 order-1">
          <MyPage DetailTour={DetailTour} />
        </div>
      </div>

      {/* Third Div for Centered Text, placed after the flex container */}
      <div className="w-full p-4 lg:px-20 bg-[#FAFAFA]">
        <DetailsSection DetailTour={DetailTour} />
      </div>

      {/* Button to Scroll to Top */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden">
        <button
          onClick={scrollToTop}
          className="w-full bg-blue-600 text-white py-4 rounded-none shadow-md hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default ImageGallery;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  const DetailTour = await fetchData(`tours/${id}`);

  return {
    props: {
      DetailTour: DetailTour.data,
    },
  };
}
