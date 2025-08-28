"use client";

import { Location } from "@/entities/Property.entity";
import { Skeleton } from "../ui/skeleton";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";

type URLString = string
interface PropertyCardProps {
  title: string;
  location: Location;
  pricePerNight: number;
  rating: number;
  ratingCount: number;
  isAvailable: boolean;
  image?: URLString;
}

export function PropertyCard(props: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
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

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {props.location.city}, {props.location.state}, {props.location.country}
          </span>
        </div>

        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium text-gray-700">
            {props.rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500 ml-1">
            ({props.ratingCount})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              R$ {props.pricePerNight}
            </span>
            <span className="text-sm text-gray-600 ml-1">por noite</span>
          </div>

          <div
            className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${
                          props.isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                    `}
          >
            {props.isAvailable ? "Disponível" : "Indisponível"}
          </div>
        </div>
      </div>
    </div>
  );
}
