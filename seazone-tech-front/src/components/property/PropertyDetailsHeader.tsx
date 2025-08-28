import { Location } from "@/entities/Property.entity";
import { PropertyAvailability, PropertyLocation, PropertyPrice, PropertyRating } from "./PropertyInfo";

interface PropertyDetailHeaderProps {
  title: string;
  location: Location;
  pricePerNight: number;
  isAvailable: boolean;
  rating: number;
  reviewsCount: number;
}

export function PropertyDetailHeader({
  title,
  location,
  pricePerNight,
  isAvailable,
  rating,
  reviewsCount,
}: PropertyDetailHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <PropertyLocation location={location} className="text-lg" />
        </div>

        <div className="flex flex-col lg:items-end gap-2">
          <PropertyPrice pricePerNight={pricePerNight} size="lg" />
          <PropertyAvailability isAvailable={isAvailable} />
        </div>
      </div>

      <PropertyRating
        rating={rating}
        reviewsCount={reviewsCount}
        className="text-base"
      />
    </div>
  );
}
