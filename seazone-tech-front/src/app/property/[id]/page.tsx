"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Property } from "@/entities/Property.entity";
import { PropertyService } from "@/service/property/property.service";
import { PropertyImageCarousel } from "@/components/property/PropertyImageCarousel";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { PropertyBookCard } from "@/components/property/PropertyBookCard";

export default function PropertyDetailPage() {
  const router = useRouter();
  const params = useParams();
  const propertyId = params.id as string;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!propertyId) return;

      try {
        setLoading(true);
        setError(null);
        const propertyService = new PropertyService();
        const result = await propertyService.getPropertyById(propertyId);
        
        if (!result) {
          setError("Propriedade não encontrada");
          return;
        }

        setProperty(result);
      } catch (err) {
        console.error("Erro ao buscar propriedade:", err);
        setError(err instanceof Error ? err.message : "Erro ao carregar propriedade");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const handleGoBack = () => {
    router.back();
  };

  const handleBookProperty = async () => {
    if (!property || !property.isAvailable) return;

    try {
      setBookingLoading(true);
      const propertyService = new PropertyService();
      const success = await propertyService.rentProperty(propertyId);
      
      if (success) {
        toast.success("Reserva realizada com sucesso!", {
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        setProperty(prev => prev ? { ...prev, isAvailable: false } : null);
      } else {
        toast.error("Erro ao realizar reserva. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro ao fazer reserva:", err);
      toast.error("Erro ao realizar reserva. Tente novamente.");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header skeleton */}
          <div className="flex items-center space-x-4">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-8 w-32" />
          </div>
          
          {/* Image carousel skeleton */}
          <Skeleton className="w-full h-80 lg:h-96 rounded-lg" />
          
          {/* Content skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{error || "Propriedade não encontrada"}</h1>
          <Button onClick={handleGoBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 lg:p-8 space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleGoBack}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Button>
        </div>

        <PropertyImageCarousel images={property.images} propertyTitle={property.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyDetails property={property} />
          </div>

          <div className="lg:col-span-1">
            <PropertyBookCard
              pricePerNight={property.pricePerNight}
              isAvailable={property.isAvailable}
              onBook={handleBookProperty}
              bookingLoading={bookingLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
