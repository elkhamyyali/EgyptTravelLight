import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import defaultImage from "../../../public/assets/camels.jpeg";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons

interface AttractionCardProps {
  id: number; // Use number if id is numeric
  title: string;
  location?: string; // Make location optional
  price: number;
  image: StaticImageData;
  rating: number; // Add a rating prop
  duration: string; // Add duration prop
  ageRange: string; // Add age range prop
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  id,
  title,
  location,
  price,
  image,
  rating, // Destructure rating from props
  duration,
  ageRange,
}) => {
  return (
    <Link href={`/top-packages/${id}`}>
      <div className="flex transition-all border border-gray-200 ease-in-out flex-col cursor-pointer shadow-md rounded-lg hover:border hover:border-yellow-900 overflow-hidden bg-white md:w-11/12 max-w-sm sm:mx-2 ml-3 my-2 sm:my-4 lg:my-6">
        <div className="relative h-60 w-full">
          {/* Image with Badge */}
          <Image
            src={image || defaultImage}
            width={0}
            height={0}
            alt={title}
            className="w-full h-full object-cover hover:shadow-xl"
          />

          {/* Badge */}
          <div className="absolute top-2 left-2 bg-custom-gradient text-white text-xs font-bold py-1 px-3 rounded-md shadow-lg">
            Featured
          </div>
        </div>
        <div className="flex-1 p-3 flex flex-col h-72">
          <h3 className="font-semibold text-lg font-segoe text-black mb-1 truncate">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 font-segoe">{location}</p>

          {/* Display rating as stars */}
          {/* <div className="flex items-center mb-2">
            {Array.from({ length: 5 }, (_, index) =>
              index < rating ? (
                <FaStar key={index} className="text-yellow-400" />
              ) : (
                <FaRegStar key={index} className="text-gray-300" />
              )
            )}
          </div> */}

          {/* Display duration */}
          <p className="text-gray-600 text-sm mb-2">
            Duration: {duration} days
          </p>

          {/* Display age range */}
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
