"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface PriceRangeSelectorProps {
  selectedPriceRange?: [number, number];
  onPriceRangeChange?: (priceRange: [number, number]) => void;
  minPrice?: number;
  maxPrice?: number;
}

export function PriceRangeSelector({ 
  selectedPriceRange = [190, 2200], 
  onPriceRangeChange,
  minPrice = 190,
  maxPrice = 2200
}: PriceRangeSelectorProps) {
  const [internalPriceRange, setInternalPriceRange] = useState<[number, number]>(selectedPriceRange);

  const handlePriceChange = (value: number[]) => {
    const newPriceRange: [number, number] = [value[0], value[1]];
    setInternalPriceRange(newPriceRange);
    onPriceRangeChange?.(newPriceRange);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <span className="text-neutral-500 text-xl">Qual sua faixa de preço por noite?</span>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Mínimo</div>
            <div className="text-xl font-semibold text-gray-900">
              {formatPrice(internalPriceRange[0])}
            </div>
          </div>
          <div className="flex-1 mx-4 h-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Máximo</div>
            <div className="text-xl font-semibold text-gray-900">
              {formatPrice(internalPriceRange[1])}
            </div>
          </div>
        </div>
        
        <div className="px-2">
          <Slider
            value={internalPriceRange}
            onValueChange={handlePriceChange}
            min={minPrice}
            max={maxPrice}
            step={10}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{formatPrice(minPrice)}</span>
            <span>{formatPrice(maxPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
