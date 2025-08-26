export interface Property {
  id: number
  title: string
  type: string
  location: Location
  pricePerNight: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  sizeM2: number
  isAvailable: boolean
  rating: number
  reviewsCount: number
  amenities: string[]
  images: string[]
  host: Host
}

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
