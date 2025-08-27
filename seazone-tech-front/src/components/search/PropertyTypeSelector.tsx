"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { 
  Building2, 
  Home, 
  Square, 
  Warehouse,
  TreePine,
  Building,
  Tent
} from "lucide-react";
import { Type } from "@/entities/Property.entity";

interface PropertyTypeSelectorProps {
  selectedTypes?: Type[];
  onTypesChange?: (types: Type[]) => void;
}

const propertyTypes: Array<{
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

export function PropertyTypeSelector({ 
  selectedTypes = [], 
  onTypesChange 
}: PropertyTypeSelectorProps) {
  const [internalSelectedTypes, setInternalSelectedTypes] = useState<Type[]>(selectedTypes);

  const handleTypeToggle = (type: Type) => {
    const newSelectedTypes = internalSelectedTypes.includes(type)
      ? internalSelectedTypes.filter(t => t !== type)
      : [...internalSelectedTypes, type];
    
    setInternalSelectedTypes(newSelectedTypes);
    onTypesChange?.(newSelectedTypes);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <span className="text-neutral-500 text-xl">Que tipo de propriedade você procura?</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3.5">
        {propertyTypes.map(({ type, icon, label }) => (
          <Toggle
            key={type}
            variant="outline"
            size="default"
            pressed={internalSelectedTypes.includes(type)}
            onPressedChange={() => handleTypeToggle(type)}
            className="flex flex-col items-center justify-center p-4 h-20 min-w-[120px] data-[state=on]:bg-orange-100 data-[state=on]:text-orange-700 data-[state=on]:border-orange-300 hover:bg-orange-50"
          >
            {icon}
            <span className="text-xs mt-1 font-medium">{label}</span>
          </Toggle>
        ))}
      </div>
    </div>
  );
}