import { Property } from "../../entities/Property.entity";
import { PropertyDAO } from "./property.dao";
import { PropertyFilter } from "./propertyFilter";

export class PropertyService implements PropertyDAO {
  getBaseUrl = `${process.env.API_URL}/properties`;
  bookBaseUrl = `${process.env.API_URL}/bookings`;
  async getAllProperties(): Promise<Property[]> {
    const res = await fetch(this.getBaseUrl);
    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Erro ao buscar propriedades");
    }

    return data;
  }

  async getPropertyById(id: string): Promise<Property | null> {
    const res = await fetch(`${this.getBaseUrl}/${id}`);
    if (res.status === 404) {
      throw new Error("Propriedade não encontrada");
    }
    const data = await res.json();
    return data;
  }

  async searchProperties(filter: PropertyFilter): Promise<Property[]> {
    const query = await filter.toQuery();
    const res = await fetch(`${this.getBaseUrl}?${query}`);
    const data = await res.json();
    return data;
  }

  async rentProperty(id: string): Promise<boolean> {
    const res = await fetch(`${this.bookBaseUrl}`, {
      method: "POST",
      body: JSON.stringify({
        id: id
      }),
    });
    return res.ok;
  }
}
