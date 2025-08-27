"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export function SearchInput() {
  return (
    <div className="w-3xl">
      <Label htmlFor="search">
        <span className="text-neutral-500 text-3xl">Que lugar</span><br/>
        <span className="text-orange-500 font-bold text-3xl">você está buscando hoje?</span>
      </Label>
      <Input id="search" placeholder="O lugar em que eu quero estar é..." className="border border-gray-400" />
    </div>
  );
}
