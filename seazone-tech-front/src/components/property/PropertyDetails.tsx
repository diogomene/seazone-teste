import { Property } from "@/entities/Property.entity";
import { PropertyDetailsSpecifications } from "./PropertyDetailsSpecifications";
import { PropertyDetailHeader } from "./PropertyDetailsHeader";
import { PropertyDetailsHost } from "./PropertyDetailsHost";
import { PropertyDetailsAmenities } from "./PropertyDetailsAmenities";

interface PropertyDetailsProps {
  property: Property;
}


export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      <PropertyDetailHeader
        title={property.title}
        location={property.location}
        pricePerNight={property.pricePerNight}
        isAvailable={property.isAvailable}
        rating={property.rating}
        reviewsCount={property.reviewsCount}
      />

      <PropertyDetailsSpecifications
        type={property.type}
        maxGuests={property.maxGuests}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        sizeM2={property.sizeM2}
      />

      <PropertyDetailsHost
        name={property.host.name}
        since={property.host.since}
        superHost={property.host.superHost}
      />

      {property.amenities && property.amenities.length > 0 && (
        <PropertyDetailsAmenities amenities={property.amenities} />
      )}
    </div>
  );
}
