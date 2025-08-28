"use client";

import { SearchInput } from "@/components/search/SearchInput";
import { PropertyTypeSelector } from "@/components/search/PropertyTypeSelector";
import { AmenitiesSelector } from "@/components/search/AmenitiesSelector";
import { SearchFilters } from "@/types/search";
import { useState } from "react";
import { Amenities, Type } from "@/entities/Property.entity";

export default function SearchPage() {
  const [type, setType] = useState<Type | undefined>(undefined);
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const handleSearch = (filters: SearchFilters) => {
    console.log('Filtros de busca:', filters, amenities, type);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-4xl space-y-8">
        <SearchInput onSearch={handleSearch} />
        <PropertyTypeSelector selectedType={type} onTypeChange={setType} />
        <AmenitiesSelector selectedAmenities={amenities} onAmenitiesChange={setAmenities} />
      </div>
    </div>
  );
}
