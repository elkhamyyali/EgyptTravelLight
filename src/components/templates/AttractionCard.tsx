import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import defaultImage from "../../../public/assets/camels.jpeg";
import { FaStar, FaRegStar } from "react-icons/fa";

interface AttractionCardProps {
  id: number;
  title: string;
  location?: string;
  price: number;
  image: StaticImageData;
  rating: number;
  duration: string;
  ageRange: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  id,
  title,
  location,
  price,
  image,
  rating,
  duration,
  ageRange,
}) => {
  return (
    <Link href={`/${id}`}>
      <div className="group flex transition-all ease-in-out flex-col cursor-pointer overflow-hidden bg-transparent md:max-w-xs max-w-sm sm:mx-2 mx-3 my-2 sm:my-4 lg:my-6">
        <div className="relative h-60 w-full">
          <Image
            src={image.url || defaultImage}
            width={0}
            height={0}
            alt={title}
            className="w-full rounded-md h-full object-cover transition-transform duration-300 ease-in-out transform  group-hover:shadow-xl"
          />
        </div>
        <div className="flex-1 pt-3 flex flex-col h-72">
          <h3 className="font-semibold text-lg font-segoe text-black mb-1 truncate group-hover:underline">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 font-segoe">{location}</p>

          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }, (_, index) =>
              index < rating ? (
                <FaStar key={index} className="text-yellow-400" />
              ) : (
                <FaRegStar key={index} className="text-gray-300" />
              )
            )}
          </div>

          <p className="text-gray-600 text-sm mb-2">
            Duration: {duration} days
          </p>

          <p className="text-gray-600 text-sm mb-2">Age Range: {ageRange}</p>

          <div className="mt-auto text-left">
            <p className="text-black font-semibold text-lg font-segoe">
              From ${price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AttractionCard;
