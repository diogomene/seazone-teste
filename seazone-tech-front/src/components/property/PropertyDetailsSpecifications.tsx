import { Type } from "@/entities/Property.entity";
import { Bath, Bed, Square, Users } from "lucide-react";
import { propertyTypes } from "../search/PropertyTypeItens";
import { ReactNode } from "react";

export interface PropertyDetailsSpecificationsProps {
    type: Type;
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;
    sizeM2: number;
}

export function PropertyDetailsSpecifications({
  type,
  maxGuests,
  bedrooms,
  bathrooms,
  sizeM2,
}: PropertyDetailsSpecificationsProps) {
  const propertyTypesItems = propertyTypes.reduce((acc, item) => {
    acc[item.type] = {
      label: item.label,
      icon: item.icon,
    };
    return acc;
  }, {} as Record<string, { label: string; icon: ReactNode }>);
  return (
    <div className="border-t pt-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          {propertyTypesItems[type] ? propertyTypesItems[type].icon : <Square className="w-5 h-5 text-gray-600" />}
          <span className="text-gray-700">{type}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">{maxGuests} hóspedes</span>
        </div>

        <div className="flex items-center space-x-2">
          <Bed className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">{bedrooms} quartos</span>
        </div>

        <div className="flex items-center space-x-2">
          <Bath className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">{bathrooms} banheiros</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <Square className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">{sizeM2}m² de área</span>
        </div>
      </div>
    </div>
  );
}
