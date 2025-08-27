"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export function SearchInput() {
  return (
    <div className="w-3xl">
      <div className="flex flex-row">
        <Label htmlFor="search">
          <span className="text-neutral-500 text-2xl">Que lugar </span>
          <span className="text-orange-500 font-bold text-2xl">
            você está buscando hoje?
          </span>
        </Label>
      </div>
      <Input
        id="search"
        placeholder="O lugar em que eu quero estar é..."
        className="border border-gray-400 mt-3.5"
      />
    </div>
  );
}
