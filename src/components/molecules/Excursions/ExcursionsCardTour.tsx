import { TourPackage } from "@/types/tour";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { BsClock, BsFillCircleFill, BsHeart, BsMap } from "react-icons/bs";

interface ExcursionsProps {
  toursData: TourPackage[];
}

export default function ExcursionsCardTour({ toursData }: ExcursionsProps) {
  const dataToDisplay = toursData;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {dataToDisplay?.length ? (
          dataToDisplay.map((excursion: TourPackage) => (
            <div key={excursion.id} className="px-[5px] md:px-[5px] mb-3">
              <Link href={`/top-packages/${excursion.id}`}>
                <div className="px-[4px] mb-3">
                  <div className="group flex flex-col max-w-lg mx-auto cursor-pointer border hover:shadow-xl border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white transition-all duration-300 ease-in-out">
                    <div className="relative overflow-hidden">
                      <Image
                        className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
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
                      <h2 className="font-segoe text-xl mb-2 truncate group-hover:underline">
                        {excursion.title}
                      </h2>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <BsClock size={16} className="mr-1" />
                        <span>{excursion.duration} days</span>
                      </div>
                      <div className="text-sm">
                        <span className="line-through text-gray-500">
                          From ${excursion.min_price}
                        </span>
                      </div>
                      <div className="mt-1">
                        <span className="font-segoe text-xl text-black">
                          From $
                          {excursion.tour_prices[0]?.prices[0]?.price || "N/A"}
                        </span>
                        <span className="text-gray-600 text-sm"> / Person</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-4 mt-10">
            <p className="flex justify-center font-extrabold ">
              Not Found Data
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
