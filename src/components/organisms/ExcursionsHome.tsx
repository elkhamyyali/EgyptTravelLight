import React from "react";
import Slider from "react-slick";
import { TourPackage } from "@/types/tour";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { BsClock, BsHeart, BsMap } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ExcursionsProps {
  toursData: TourPackage[];
}

export default function ExcursionsHome({ toursData }: ExcursionsProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden">
      {toursData?.length ? (
        <Slider {...settings}>
          {toursData.map((excursion: TourPackage) => (
            <div key={excursion.id} className="px-2">
              <Link href={`/top-packages/${excursion.id}`}>
                <div className="flex flex-col max-w-xl mx-auto cursor-pointer border border-gray-200 rounded-md overflow-hidden bg-white h-[500px] transition-all duration-300 ease-in-out group">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                      src={excursion.main_image.url}
                      alt={excursion.title}
                      width={100}
                      height={100}
                    />
                    <div className="absolute top-2 left-2 bg-black text-white text-xs font-segoe font-medium px-2 py-1 rounded">
                      Top Rated
                    </div>
                    <Button className="absolute top-2 right-2 text-white hover:text-red-500">
                      <BsHeart size={24} />
                    </Button>
                  </div>
                  <div className="flex flex-col flex-grow px-4 py-4">
                    <div className="flex items-center text-gray-600 text-sm mb-2 font-segoe">
                      <BsMap size={16} className="mr-1" />
                      <span className="font-segoe">
                        {excursion.destination}
                      </span>
                    </div>
                    <h2 className="font-segoe text-xl mb-2 truncate">
                      {excursion.title}
                    </h2>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <BsClock size={16} className="mr-1" />
                      <span>{excursion.duration} days</span>
                    </div>
                    <div className="flex items-center mb-4">
                      {/* Rating stars section can go here if needed */}
                    </div>
                    <div className="text-sm">
                      <span className="line-through text-gray-500">
                        From ${excursion.min_price}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="font-segoe text-xl text-blue-700">
                        From ${" "}
                        {excursion.tour_prices[0]?.prices[0]?.price || "N/A"}
                      </span>
                      <span className="text-gray-600 text-sm"> / Person</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="mt-10">
          <p className="flex justify-center font-extrabold">Not Found Data</p>
        </div>
      )}
    </div>
  );
}
