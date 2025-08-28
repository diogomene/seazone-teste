import { Location } from "@/entities/Property.entity";
import locationsData from "@/mock/locations.json";

export class LocationService {
  private static locations: Location[] = locationsData as Location[];

  static getAllLocations(): Location[] {
    return this.locations;
  }

  static searchLocations(query: string): Location[] {
    if (!query) return this.locations;
    
    const searchTerm = query.toLowerCase().trim();
    return this.locations.filter(location => 
      location.city.toLowerCase().includes(searchTerm) ||
      location.state.toLowerCase().includes(searchTerm)
    );
  }

  static getLocationByCityAndState(city: string, state: string): Location | undefined {
    return this.locations.find(location => 
      location.city.toLowerCase() === city.toLowerCase() &&
      location.state.toLowerCase() === state.toLowerCase()
    );
  }
}
