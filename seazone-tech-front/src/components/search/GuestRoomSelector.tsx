"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface GuestRoomSelectorProps {
  guests: number;
  bedrooms: number;
  onGuestChange: (type: 'guests' | 'bedrooms', action: 'increment' | 'decrement') => void;
}

export function GuestRoomSelector({ guests, bedrooms, onGuestChange }: GuestRoomSelectorProps) {
  const [open, setOpen] = useState(false);

  const getGuestText = () => {
    if (guests === 0 && bedrooms === 0) {
      return "Adicionar hóspedes";
    }
    
    const guestText = guests > 0 ? `${guests} hóspede${guests > 1 ? 's' : ''}` : '';
    const bedroomText = bedrooms > 0 ? `${bedrooms} quarto${bedrooms > 1 ? 's' : ''}` : '';
    
    return [guestText, bedroomText].filter(Boolean).join(', ');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex-1 px-6 py-4 cursor-pointer hover:bg-gray-50 border-r border-gray-200 transition-colors">
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-xs font-semibold text-black">Quem</div>
              <div className="text-sm text-gray-500">
                {getGuestText()}
              </div>
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-6" align="start">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-black">Hóspedes</div>
              <div className="text-sm text-gray-500">Quantas pessoas irão?</div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-full p-0 border-gray-300 hover:border-black transition-colors"
                onClick={() => onGuestChange('guests', 'decrement')}
                disabled={guests === 0}
              >
                -
              </Button>
              <span className="w-8 text-center font-medium">{guests}</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-full p-0 border-gray-300 hover:border-black transition-colors"
                onClick={() => onGuestChange('guests', 'increment')}
              >
                +
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-black">Quartos</div>
              <div className="text-sm text-gray-500">Quantos quartos você precisa?</div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-full p-0 border-gray-300 hover:border-black transition-colors"
                onClick={() => onGuestChange('bedrooms', 'decrement')}
                disabled={bedrooms === 0}
              >
                -
              </Button>
              <span className="w-8 text-center font-medium">{bedrooms}</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-full p-0 border-gray-300 hover:border-black transition-colors"
                onClick={() => onGuestChange('bedrooms', 'increment')}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
