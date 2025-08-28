"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { LocationService } from "@/service/location/location.service";
import { Location } from "@/entities/Property.entity";

interface LocationSelectorProps {
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export function LocationSelector({ selectedLocation, onLocationSelect }: LocationSelectorProps) {
  const [open, setOpen] = useState(false);
  const locations = LocationService.getAllLocations();

  const handleLocationSelect = (location: Location) => {
    onLocationSelect(location);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex-1 px-6 py-4 cursor-pointer hover:bg-gray-50 border-r border-gray-200 transition-colors">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-xs font-semibold text-black">Onde</div>
              <div className="text-sm text-gray-500">
                {selectedLocation 
                  ? `${selectedLocation.city}, ${selectedLocation.state}`
                  : "Buscar destinos"
                }
              </div>
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Buscar cidades..." />
          <CommandList>
            <CommandEmpty>Nenhuma cidade encontrada.</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={`${location.city}-${location.state}`}
                  value={`${location.city} ${location.state}`}
                  onSelect={() => handleLocationSelect(location)}
                  className="cursor-pointer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{location.city}, {location.state}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
