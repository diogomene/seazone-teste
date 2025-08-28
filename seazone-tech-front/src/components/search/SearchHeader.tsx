"use client";

import { SearchInput } from "@/components/search/SearchInput";
import { OnlyAvailableSelector } from "@/components/search/OnlyAvailableSelector";
import { SearchFilters } from "@/types/search";
import { Filter } from "lucide-react";

interface SearchHeaderProps {
  onSearch: (filters: SearchFilters) => void;
  onlyAvailable: boolean;
  setOnlyAvailable: (value: boolean) => void;
  onToggleFilters?: () => void;
  showFilterIcon?: boolean;
}

export function SearchHeader({ 
  onSearch, 
  onlyAvailable, 
  setOnlyAvailable, 
  onToggleFilters, 
  showFilterIcon = false 
}: SearchHeaderProps) {
  return (
    <div className="flex justify-center align-center w-full" id="search-header">
      <div className="space-y-4 w-full max-w-3xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <SearchInput onSearch={onSearch} />
          </div>
          {showFilterIcon && (
            <button
              onClick={onToggleFilters}
              className="p-3 bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
              aria-label="Toggle filters"
            >
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
        <div className="flex justify-end pr-2">
          <OnlyAvailableSelector
            onChange={setOnlyAvailable}
            checked={onlyAvailable}
          />
        </div>
      </div>
    </div>
  );
}
