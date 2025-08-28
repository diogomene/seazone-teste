import { Location } from "@/entities/Property.entity";

export interface SearchFilters {
  location: Location | null;
  guests: number;
  bedrooms: number;
}

export interface SearchProps {
  onSearch?: (filters: SearchFilters) => void;
  initialFilters?: Partial<SearchFilters>;
}
