"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";

import { Amenities } from "@/entities/Property.entity";
import { amenitiesOptions } from "./AmenitiesItens";

interface AmenitiesSelectorProps {
  selectedAmenities?: Amenities[];
  onAmenitiesChange?: (amenities: Amenities[]) => void;
}


export function AmenitiesSelector({ 
  selectedAmenities = [], 
  onAmenitiesChange 
}: AmenitiesSelectorProps) {
  const [internalSelectedAmenities, setInternalSelectedAmenities] = useState<Amenities[]>(selectedAmenities);

  const handleAmenityToggle = (amenity: Amenities) => {
    const newSelectedAmenities = internalSelectedAmenities.includes(amenity)
      ? internalSelectedAmenities.filter(a => a !== amenity)
      : [...internalSelectedAmenities, amenity];
    
    setInternalSelectedAmenities(newSelectedAmenities);
    onAmenitiesChange?.(newSelectedAmenities);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <span className="text-neutral-500 text-xl">Que comodidades você precisa?</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3.5">
        {amenitiesOptions.map(({ amenity, icon, label }) => (
          <Toggle
            key={amenity}
            variant="outline"
            size="default"
            pressed={internalSelectedAmenities.includes(amenity)}
            onPressedChange={() => handleAmenityToggle(amenity)}
            className="flex flex-col items-center justify-center p-4 h-20 min-w-[120px] data-[state=on]:bg-orange-100 data-[state=on]:text-orange-700 data-[state=on]:border-orange-300 hover:bg-orange-50"
          >
            {icon}
            <span className="text-xs mt-1 font-medium">{label}</span>
          </Toggle>
        ))}
      </div>
    </div>
  );
}