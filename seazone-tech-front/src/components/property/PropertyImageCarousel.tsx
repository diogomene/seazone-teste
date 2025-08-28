import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface PropertyImageCarouselProps {
  images: string[];
  propertyTitle: string;
}

export function PropertyImageCarousel({ images, propertyTitle }: PropertyImageCarouselProps) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center rounded-lg">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-80 lg:h-96 w-full">
                <Image
                  src={image}
                  alt={`${propertyTitle} - Imagem ${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-lg w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </>
        )}
      </Carousel>
      
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      )}
    </div>
  );
}
