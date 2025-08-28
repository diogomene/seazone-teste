"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Type } from "@/entities/Property.entity";
import { propertyTypes } from "./PropertyTypeItens";

interface PropertyTypeSelectorProps {
  selectedType?: Type;
  onTypeChange?: (type: Type | undefined) => void;
}

export function PropertyTypeSelector({ 
  selectedType, 
  onTypeChange 
}: PropertyTypeSelectorProps) {
  const [internalSelectedType, setInternalSelectedType] = useState<Type | undefined>(selectedType);

  const handleTypeToggle = (type: Type) => {
    const newSelectedType = internalSelectedType === type ? undefined : type;
    
    setInternalSelectedType(newSelectedType);
    onTypeChange?.(newSelectedType);
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
            pressed={internalSelectedType === type}
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