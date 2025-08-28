import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

interface OnlyAvailableSelectorProps {
    onChange: (value: boolean) => void;
    checked: boolean;
}

export function OnlyAvailableSelector({ onChange, checked }: OnlyAvailableSelectorProps) {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="only-available" className="text-neutral-500">Apenas disponíveis</Label>
      <Switch id="only-available" checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
