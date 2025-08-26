'use client';

import { Location } from "@/entities/Property.entity";

interface PropertyCardProps {
    title: string;
    location: Location;
    pricePerNight: number;
    rating: number;
    ratingCount: number;
    isAvailable: boolean;
}
export function PropertyCard(props: PropertyCardProps) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.location.city}, {props.location.state}</p>
            <p>${props.pricePerNight} per night</p>
            <p>Rating: {props.rating} ({props.ratingCount} reviews)</p>
            <p>{props.isAvailable ? "Available" : "Not Available"}</p>
        </div>
    );
}