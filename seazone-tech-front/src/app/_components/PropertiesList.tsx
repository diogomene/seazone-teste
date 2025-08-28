"use client";

import { useEffect, useState } from "react";
import { Property } from "@/entities/Property.entity";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyService } from "@/service/property/property.service";
import { PropertyFilter } from "@/service/property/propertyFilter";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { CircleX } from "lucide-react";

export interface PropertiesListProps {
  propertyFilter: PropertyFilter;
  searchTrigger?: number; // Tive que usar para forçar pesquisa
}

export function PropertiesList({
  propertyFilter,
  searchTrigger,
}: PropertiesListProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const propertyService = new PropertyService();

    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await propertyService.searchProperties(propertyFilter);
        setProperties(result);
      } catch (err) {
        console.error("Erro ao buscar propriedades:", err);
        setError(
          // err instanceof Error ? err.message : "Erro ao carregar propriedades"
          "Erro ao carregar propriedades"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [propertyFilter, searchTrigger]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
              <Skeleton className="rounded-lg w-full">
                <div className="h-80 bg-gray-300 animate-pulse rounded-lg"></div>
              </Skeleton>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    toast(error, {
      icon: <CircleX color="red"/>
    })
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          Nenhuma propriedade encontrada com os filtros selecionados.
        </p>
        <p className="text-gray-500 mt-2">Tente ajustar os filtros de busca.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          location={property.location}
          pricePerNight={property.pricePerNight}
          rating={property.rating}
          ratingCount={property.reviewsCount}
          isAvailable={property.isAvailable}
          image={property.images?.[0]}
        />
      ))}
    </div>
  );
}
