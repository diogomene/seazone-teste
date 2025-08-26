import { Filter } from "../filter";

interface PropertyFilterProps {
  city?: string;
  state?: string;
  type?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  minGuests?: number;
  minBedrooms?: number;
  amenities?: string[];
  onlyAvailable?: boolean;
}

export class PropertyFilter extends Filter<PropertyFilterProps> {
  constructor(protected readonly filters: PropertyFilterProps) {
    super(filters);
  }

  public toQuery(): URLSearchParams{
    const query = new URLSearchParams();

    if (this.filters.onlyAvailable) {
      query.append("available", String(this.filters.onlyAvailable));
    }

    if (this.filters.priceRange?.min) {
      query.append("minPrice", String(this.filters.priceRange.min));
    }
    if (this.filters.priceRange?.max) {
      query.append("maxPrice", String(this.filters.priceRange.max));
    }

    if (this.filters.minGuests) {
      query.append("guests", String(this.filters.minGuests));
    }

    if (this.filters.minBedrooms) {
      query.append("bedrooms", String(this.filters.minBedrooms));
    }

    if (this.filters.amenities && this.filters.amenities.length > 0) {
      query.append("amenities", this.filters.amenities.join(","));
    }

    if (this.filters.city) {
      query.append("city", this.filters.city);
    }
    if (this.filters.state) {
      query.append("state", this.filters.state);
    }
    if (this.filters.type) {
      query.append("type", this.filters.type);
    }
    return query;
  }
}
