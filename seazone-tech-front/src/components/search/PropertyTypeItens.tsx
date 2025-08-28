import { Type } from "@/entities/Property.entity";
import { 
  Building2, 
  Home, 
  Square, 
  Warehouse,
  TreePine,
  Building,
  Tent
} from "lucide-react";

export const propertyTypes: Array<{
  type: Type;
  icon: React.ReactNode;
  label: string;
}> = [
  {
    type: "Apartamento",
    icon: <Building className="w-5 h-5" />,
    label: "Apartamento"
  },
  {
    type: "Casa",
    icon: <Home className="w-5 h-5" />,
    label: "Casa"
  },
  {
    type: "Studio",
    icon: <Square className="w-5 h-5" />,
    label: "Studio"
  },
  {
    type: "Cobertura",
    icon: <Building2 className="w-5 h-5" />,
    label: "Cobertura"
  },
  {
    type: "Chalé",
    icon: <Tent className="w-5 h-5" />,
    label: "Chalé"
  },
  {
    type: "Loft",
    icon: <Warehouse className="w-5 h-5" />,
    label: "Loft"
  },
  {
    type: "Sítio",
    icon: <TreePine className="w-5 h-5" />,
    label: "Sítio"
  }
];