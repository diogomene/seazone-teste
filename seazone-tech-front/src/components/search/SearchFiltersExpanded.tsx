"use client";

import { PropertyTypeSelector } from "@/components/search/PropertyTypeSelector";
import { AmenitiesSelector } from "@/components/search/AmenitiesSelector";
import { PriceRangeSelector } from "@/components/search/PriceRangeSelector";
import { Type, Amenities } from "@/entities/Property.entity";

interface SearchFiltersExpandedProps {
  type: Type | undefined;
  setType: (type: Type | undefined) => void;
  amenities: Amenities[];
  setAmenities: (amenities: Amenities[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  isVisible: boolean;
}

export function SearchFiltersExpanded({
  type,
  setType,
  amenities,
  setAmenities,
  priceRange,
  setPriceRange,
  isVisible
}: SearchFiltersExpandedProps) {
  return (
    <div className={`
      overflow-hidden transition-all duration-500 ease-in-out flex justify-center
      ${isVisible 
        ? 'max-h-[1000px] opacity-100 transform translate-y-0' 
        : 'max-h-0 opacity-0 transform -translate-y-4'
      }
    `}>
      <div className="w-full max-w-4xl space-y-8 pt-8">
        <PriceRangeSelector
          selectedPriceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
        <PropertyTypeSelector 
          selectedType={type} 
          onTypeChange={setType} 
        />
        <AmenitiesSelector
          selectedAmenities={amenities}
          onAmenitiesChange={setAmenities}
        />
      </div>
    </div>
  );
}
