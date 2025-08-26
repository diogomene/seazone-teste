import { Property } from "../../entities/Property.entity";
import { PropertyFilter } from "./propertyFilter";


export interface PropertyDAO{
  getAllProperties(): Promise<Property[]>;
  getPropertyById(id: string): Promise<Property | null>;
  searchProperties(filter: PropertyFilter): Promise<Property[]>;
  rentProperty(id: string): Promise<boolean>;
}

