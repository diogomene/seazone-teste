"use client";

import { SearchInput } from "@/components/search/SearchInput";
import { PropertyTypeSelector } from "@/components/search/PropertyTypeSelector";
import { AmenitiesSelector } from "@/components/search/AmenitiesSelector";
import { PriceRangeSelector } from "@/components/search/PriceRangeSelector";
import { SearchFilters } from "@/types/search";
import { useState } from "react";
import { Amenities, Type } from "@/entities/Property.entity";
import { OnlyAvailableSelector } from "@/components/search/OnlyAvailableSelector";

export default function SearchPage() {
  const [type, setType] = useState<Type | undefined>(undefined);
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);

  const handleSearch = (filters: SearchFilters) => {
    console.log("Filtros de busca:", filters, amenities, type, priceRange, onlyAvailable);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex justify-center align-center" id="search-header">
          <div className="space-y-4 w-3xl">
            <SearchInput onSearch={handleSearch} />
            <div className="flex justify-end pr-2">
              <OnlyAvailableSelector
                onChange={setOnlyAvailable}
                checked={onlyAvailable}
              />
            </div>
          </div>
        </div>
        <PriceRangeSelector
          selectedPriceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
        <PropertyTypeSelector selectedType={type} onTypeChange={setType} />
        <AmenitiesSelector
          selectedAmenities={amenities}
          onAmenitiesChange={setAmenities}
        />
      </div>
    </div>
  );
}
