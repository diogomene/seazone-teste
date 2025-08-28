import { Location } from "@/entities/Property.entity";
import { Star, MapPin } from "lucide-react";

interface PropertyLocationProps {
  location: Location;
  className?: string;
}

export function PropertyLocation({ location, className = "" }: PropertyLocationProps) {
  return (
    <div className={`flex items-center text-gray-600 ${className}`}>
      <MapPin className="w-4 h-4 mr-1" />
      <span className="text-sm">
        {location.city}, {location.state}, {location.country}
      </span>
    </div>
  );
}

interface PropertyRatingProps {
  rating: number;
  reviewsCount: number;
  className?: string;
}

export function PropertyRating({ rating, reviewsCount, className = "" }: PropertyRatingProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
      <span className="text-sm font-medium text-gray-700">
        {rating.toFixed(1)}
      </span>
      <span className="text-sm text-gray-500 ml-1">
        ({reviewsCount} avaliações)
      </span>
    </div>
  );
}

interface PropertyPriceProps {
  pricePerNight: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PropertyPrice({ pricePerNight, className = "", size = "md" }: PropertyPriceProps) {
  const sizeClasses = {
    sm: "text-md",
    md: "text-lg",
    lg: "text-2xl"
  };

  return (
    <div className={className}>
      <span className={`${sizeClasses[size]} font-bold text-gray-900`}>
        R$ {pricePerNight.toLocaleString('pt-BR')}
      </span>
      <span className="text-sm text-gray-600 ml-1">por noite</span>
    </div>
  );
}

interface PropertyAvailabilityProps {
  isAvailable: boolean;
  className?: string;
}

export function PropertyAvailability({ isAvailable, className = "" }: PropertyAvailabilityProps) {
  return (
    <div
      className={`
        px-2 py-1 rounded-full text-xs font-medium
        ${isAvailable
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
        }
        ${className}
      `}
    >
      {isAvailable ? "Disponível" : "Indisponível"}
    </div>
  );
}
