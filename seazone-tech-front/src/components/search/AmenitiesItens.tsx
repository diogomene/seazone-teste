import { Amenities } from "@/entities/Property.entity";
import { 
  Thermometer, 
  WashingMachine, 
  Waves,
  Bubbles,
  Tv,
  Wifi,
  Beef,
  PawPrint,
  UtensilsCrossed,
  WavesLadder as Pool,
  FlameKindling,
  Building2,
  Dumbbell,
  Snowflake,
  Car
} from "lucide-react";

export const amenitiesOptions: Array<{
  amenity: Amenities;
  icon: React.ReactNode;
  label: string;
}> = [
  {
    amenity: "aquecimento",
    icon: <Thermometer className="w-5 h-5" />,
    label: "Aquecimento"
  },
  {
    amenity: "lavadora",
    icon: <WashingMachine className="w-5 h-5" />,
    label: "Lavadora"
  },
  {
    amenity: "churrasqueira",
    icon: <Beef className="w-5 h-5" />,
    label: "Churrasqueira"
  },
  {
    amenity: "jacuzzi",
    icon: <Bubbles className="w-5 h-5" />,
    label: "Jacuzzi"
  },
  {
    amenity: "smart-tv",
    icon: <Tv className="w-5 h-5" />,
    label: "Smart TV"
  },
  {
    amenity: "wifi",
    icon: <Wifi className="w-5 h-5" />,
    label: "Wi-Fi"
  },
  {
    amenity: "vista-mar",
    icon: <Waves className="w-5 h-5" />,
    label: "Vista Mar"
  },
  {
    amenity: "cozinha-equipada",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    label: "Cozinha Equipada"
  },
  {
    amenity: "pet-friendly",
    icon: <PawPrint className="w-5 h-5" />,
    label: "Pet Friendly"
  },
  {
    amenity: "piscina",
    icon: <Pool className="w-5 h-5" />,
    label: "Piscina"
  },
  {
    amenity: "lareira",
    icon: <FlameKindling className="w-5 h-5" />,
    label: "Lareira"
  },
  {
    amenity: "varanda",
    icon: <Building2 className="w-5 h-5" />,
    label: "Varanda"
  },
  {
    amenity: "academia",
    icon: <Dumbbell className="w-5 h-5" />,
    label: "Academia"
  },
  {
    amenity: "ar-condicionado",
    icon: <Snowflake className="w-5 h-5" />,
    label: "Ar Condicionado"
  },
  {
    amenity: "garagem",
    icon: <Car className="w-5 h-5" />,
    label: "Garagem"
  }
];
