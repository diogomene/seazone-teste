"use client";

import { Location } from "@/entities/Property.entity";
import { Skeleton } from "../ui/skeleton";
import { PropertyLocation, PropertyRating, PropertyPrice, PropertyAvailability } from "./PropertyInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";

type URLString = string
interface PropertyCardProps {
  id: number;
  title: string;
  location: Location;
  pricePerNight: number;
  rating: number;
  ratingCount: number;
  isAvailable: boolean;
  image?: URLString;
}

export function PropertyCard(props: PropertyCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/property/${props.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        {
            props.image ? (
                <Image src={props.image} alt={props.title} className="object-cover w-full h-full" height={192} width={384} />
            ) : (
                <Skeleton className="w-full h-full" />
            )
        }
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {props.title}
        </h3>

        <PropertyLocation location={props.location} className="mb-2" />

        <PropertyRating 
          rating={props.rating} 
          reviewsCount={props.ratingCount} 
          className="mb-3" 
        />

        <div className="flex items-center justify-between">
          <PropertyPrice pricePerNight={props.pricePerNight} />
          <PropertyAvailability isAvailable={props.isAvailable} />
        </div>
      </div>
    </div>
  );
}
