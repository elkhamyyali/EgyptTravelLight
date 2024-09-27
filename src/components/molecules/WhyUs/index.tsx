import React from "react";
import Image from "next/image";
import backgroundImage from "../../../../public/assets/phar.jpg"; // Adjust the path as needed
import Slider from "react-slick";
import useIsMobile from "../../../hooks/useIsMobile"; // Adjust the import path as needed
import { FaStar, FaTag, FaShieldAlt, FaChartLine } from "react-icons/fa"; // Import icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components (Only for desktop view)
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        left: "10px",
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
        cursor: "pointer",
      }}
    ></div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        right: "10px",
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
        cursor: "pointer",
      }}
    ></div>
  );
};

type CardData = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const cardData: CardData[] = [
  {
    title: "Private tours all over Egypt",
    description:
      "Choose a vacation as unique as you are. Any tours can be chosen to meet your wants and needs whether you're touring the classic attractions or new areas of interest. Our seasoned, knowledgeable professionals are well-equipped with the knowledge to make your private tour a memorable experience that is entirely your own.",
    icon: <FaStar className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Team of speakers with your own language ",
    description:
      "You're reading this page in English, but did you know we also have guides and tour leaders speak French, German, Arabic, Russian, Portuguese, Spanish, Italian, Chinese, and Japanese? We guide travelers from all over the world and are dedicated to providing top-services in their native languages. Your inquiries, reservation",
    icon: <FaTag className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Safety and security commitment",
    description:
      "Our team is keeping travelers safe a top priority. We're always in the know while we're on the go, so we can stay aware of any events that might affect your security and adjust plans accordingly. You'll be with your tour guide at all times during tour hours, So no worries",
    icon: <FaShieldAlt className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Concern for value and time",
    description:
      "We respect that your vacation is an investment of time and money and we want to help you get the most of it. Our team will help you to offer tour packages at extremely competitive prices, so you can see more and do more on your trip",
    icon: <FaChartLine className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
  {
    title: "Excellence in service",
    description:
      "Quality is our top priority, and our team of fun and friendly experts are the secret ingredient to an amazing expedition. You'll be awed by the sights on your itinerary, but it's our personable and knowledgeable Egyptologists that will really help make your experience true",
    icon: <FaChartLine className="text-[#C7AC4F] text-2xl mx-auto mb-4" />,
  },
];

const WhyUs: React.FC = () => {
  const isMobile = useIsMobile();

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    className: "center",
    draggable: true,
    arrows: !isMobile,
    nextArrow: !isMobile ? <CustomNextArrow /> : undefined,
    prevArrow: !isMobile ? <CustomPrevArrow /> : undefined,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-2 md:p-4 gap-6 w-full">
        <div className="text-center text-white font-segoe text-2xl md:text-special-offer mb-5 mt-3">
          Why Saray El Nile Tours
        </div>

        {isMobile ? (
          <Slider {...sliderSettings} className="w-full max-w-screen-2xl">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#3C3A37] p-3 border-white border-x rounded-sm shadow-lg text-center flex flex-col justify-between h-[300px]"
              >
                <div>{card.icon}</div>
                <h3 className="text-xl text-[#C7AC4F] font-segoe mb-4">
                  {card.title}
                </h3>
                <p className="text-white font-segoe text-sm md:text-base overflow-y-auto flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-screen-2xl">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#3C3A37] p-6 rounded-sm shadow-lg text-center flex flex-col justify-between min-h-[320px]"
              >
                {card.icon}
                <h3 className="text-xl text-[#C7AC4F] font-segoe mb-4">
                  {card.title}
                </h3>
                <p className="text-white font-segoe text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUs;