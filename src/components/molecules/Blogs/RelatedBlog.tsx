import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";
import BlogImage from "../../../../public/assets/firstImage.jpeg";
import { StaticImageData } from "next/image";

const mobileSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
};

const laptopSliderSettings = {
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  arrows: true,
  infinite: false, // Corrected the key
};
// Define static fallback data
const staticBlogData = {
  data: [
    {
      id: 1,
      title: "How to Travel on a Budget",
      content: "Tips and tricks to save money while exploring the world.",
      created_at: "2023-09-10",
      image: BlogImage,
    },
    {
      id: 2,
      title: "Top Destinations for 2024",
      content: "Discover the hottest travel spots for the upcoming year.",
      created_at: "2023-09-12",
      image: BlogImage,
    },
    {
      id: 3,
      title: "Packing Essentials for Every Traveler",
      content: "Don't forget these must-have items on your next trip.",
      created_at: "2023-09-15",
      image: BlogImage,
    },
  ],
};

type BlogData = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string | StaticImageData;
};

type Props = {
  blogData?: BlogData[] | { data?: BlogData[] };
};

const RelatedBlog: React.FC<Props> = ({ blogData }) => {
  // Ensure that blogData is always an array, either directly or within `data`.
  const dataToShow = Array.isArray(blogData)
    ? blogData
    : blogData?.data?.length
    ? blogData.data
    : staticBlogData.data;

  return (
    <div className="p-0">
      <div className="hidden md:block max-w-screen-xl mx-auto mb-3">
        <Slider {...laptopSliderSettings}>
          {dataToShow.map((blog) => (
            <div key={blog.id} className="ml-2">
              <Card
                imageSrc={blog.image}
                title={blog.title}
                content={blog.content}
                created_at={blog.created_at}
                id={blog.id.toString()}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="block md:hidden">
        <Slider {...mobileSliderSettings}>
          {dataToShow.map((blog) => (
            <div key={blog.id} className="px-0">
              <Card
                imageSrc={blog.image}
                title={blog.title}
                content={blog.content}
                created_at={blog.created_at}
                id={blog.id.toString()}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedBlog;
