

export interface Property {
  id: number
  title: string
  type: Type
  location: Location
  pricePerNight: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  sizeM2: number
  isAvailable: boolean
  rating: number
  reviewsCount: number
  amenities: Amenities[]
  images: string[]
  host: Host
}

export type Type = "Apartamento" | "Casa" | "Studio" | "Cobertura" | "Chalé" | "Loft" | "Sítio"

export type Amenities = 'aquecimento' | 'lavadora' | 'churrasqueira' | 'jacuzzi' | 'smart-tv' | 'wifi' | 'vista-mar' | 'cozinha-equipada' | 'pet-friendly' | 'piscina' | 'lareira' | 'varanda' | 'academia' | 'ar-condicionado' | 'garagem'

export interface Location {
  city: string
  state: string
  country: string
}

export interface Host {
  name: string
  superHost: boolean
  since: string
}
