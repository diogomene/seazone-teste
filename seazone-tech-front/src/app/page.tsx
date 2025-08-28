"use client";

import { useState } from "react";
import { SearchHeader } from "@/components/search/SearchHeader";
import { SearchFiltersExpanded } from "@/components/search/SearchFiltersExpanded";
import { PropertiesList } from "./_components/PropertiesList";
import { SearchFilters } from "@/types/search";
import { Amenities, Type } from "@/entities/Property.entity";
import { PropertyFilter } from "@/service/property/propertyFilter";

export default function Home() {
  const [type, setType] = useState<Type | undefined>(undefined);
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2200]);
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);
  
  const [showExpandedFilters, setShowExpandedFilters] = useState(false);
  
  const [searchTrigger, setSearchTrigger] = useState(0);
  
  const [currentSearchFilters, setCurrentSearchFilters] = useState<SearchFilters>({
    location: null,
    guests: 0,
    bedrooms: 0
  });

  const handleSearch = (filters: SearchFilters) => {
    setCurrentSearchFilters(filters);
    
    if (showExpandedFilters) {
      setShowExpandedFilters(false);
    }
    
    setSearchTrigger(prev => prev + 1);
  };

  const handleToggleFilters = () => {
    setShowExpandedFilters(!showExpandedFilters);
  };

  const createPropertyFilter = (): PropertyFilter => {
    const [minPrice, maxPrice] = priceRange;
    
    return new PropertyFilter({
      city: currentSearchFilters.location?.city,
      state: currentSearchFilters.location?.state,
      minGuests: currentSearchFilters.guests || undefined,
      minBedrooms: currentSearchFilters.bedrooms || undefined,
      priceRange: {
        min: minPrice,
        max: maxPrice
      },
      type: type,
      amenities: amenities,
      onlyAvailable
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-6xl space-y-8">
        <SearchHeader
          onSearch={handleSearch}
          onlyAvailable={onlyAvailable}
          setOnlyAvailable={setOnlyAvailable}
          onToggleFilters={handleToggleFilters}
          showFilterIcon={true}
        />
        
        <SearchFiltersExpanded
          type={type}
          setType={setType}
          amenities={amenities}
          setAmenities={setAmenities}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isVisible={showExpandedFilters}
        />
        
        <div className="w-full">
          <PropertiesList 
            propertyFilter={createPropertyFilter()} 
            searchTrigger={searchTrigger}
          />
        </div>
      </div>
    </div>
  );
}
