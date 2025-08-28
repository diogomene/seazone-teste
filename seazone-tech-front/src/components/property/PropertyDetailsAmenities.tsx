import { ReactNode } from "react";
import { amenitiesOptions } from "../search/AmenitiesItens";

interface PropertyDetailsAmenitiesProps {
  amenities: string[];
}

export function PropertyDetailsAmenities({
  amenities,
}: PropertyDetailsAmenitiesProps) {
  const amenitiesIcons = amenitiesOptions.reduce((acc, amenity) => {
    acc[amenity.amenity] = { icon: amenity.icon, label: amenity.label };
    return acc;
  }, {} as Record<string, { icon: ReactNode; label: string }>);

  return (
    <div className="border-t pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Comodidades</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {amenities.map((amenity) => {
          const amenityInfo =
            amenitiesIcons[
              amenity.toLowerCase() as keyof typeof amenitiesIcons
            ];
          const Icon = amenityInfo.icon;

          return (
            <div
              key={amenity}
              className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50"
            >
              {Icon}
              <span className="text-gray-700">{amenityInfo.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
