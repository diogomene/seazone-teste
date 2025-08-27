import { SearchInput } from "@/components/search/SearchInput";
import { PropertyTypeSelector } from "@/components/search/PropertyTypeSelector";

export function SearchPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full max-w-4xl space-y-8">
        <SearchInput />
        <PropertyTypeSelector />
      </div>
    </div>
  );
}
