import { CalendarCheck, Shield } from "lucide-react";
import { format } from 'date-fns';

interface PropertyDetailsHostProps {
    name: string;
    since: string;
    superHost: boolean;
}

const SuperHostBadge = () => (
  <div className="flex items-center space-x-1">
    <Shield className="w-4 h-4 text-yellow-500" />
    <span className="text-xs text-yellow-700 font-medium">Superhost</span>
  </div>
);

export function PropertyDetailsHost({
  name,
  since,
  superHost,
}: PropertyDetailsHostProps) {
  return (
    <div className="border-t pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Anfitrião</h3>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-medium">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="font-medium text-gray-900">{name}</p>
            {superHost && <SuperHostBadge />}
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <CalendarCheck className="w-4 h-4" />
            <span>Host desde {format(new Date(since), 'dd/MM/yyyy')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
