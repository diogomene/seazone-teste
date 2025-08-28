"use client";

import { useState } from "react";
import { Location } from "@/entities/Property.entity";
import { SearchFilters, SearchProps } from "@/types/search";
import { LocationSelector } from "./LocationSelector";
import { GuestRoomSelector } from "./GuestRoomSelector";
import { SearchButton } from "./SearchButton";

export function SearchInput({ onSearch, initialFilters }: SearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: null,
    guests: 0,
    bedrooms: 0,
    ...initialFilters,
  });

  const handleLocationSelect = (location: Location) => {
    setFilters(prev => ({ ...prev, location }));
  };

  const handleGuestChange = (type: 'guests' | 'bedrooms', action: 'increment' | 'decrement') => {
    setFilters(prev => ({
      ...prev,
      [type]: action === 'increment' 
        ? prev[type] + 1 
        : Math.max(0, prev[type] - 1)
    }));
  };

  const handleSearch = () => {
    onSearch?.(filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center space-y-4">
        
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden w-full max-w-3xl">
          <LocationSelector 
            selectedLocation={filters.location}
            onLocationSelect={handleLocationSelect}
          />
          
          <GuestRoomSelector
            guests={filters.guests}
            bedrooms={filters.bedrooms}
            onGuestChange={handleGuestChange}
          />
          
          <SearchButton onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}
