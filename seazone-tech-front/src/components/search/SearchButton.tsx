"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";

interface SearchButtonProps {
  onSearch: () => void;
  disabled?: boolean;
}

export function SearchButton({ onSearch, disabled = false }: SearchButtonProps) {
  return (
    <div className="px-2">
      <Button
        onClick={onSearch}
        disabled={disabled}
        className="h-12 w-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white p-0 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}
