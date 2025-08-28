import { Button } from "../ui/button";

export interface PropertyBookCardProps {
  pricePerNight: number;
  isAvailable: boolean;
  onBook: () => void;
  bookingLoading: boolean;
}

export function PropertyBookCard({
  pricePerNight,
  isAvailable,
  onBook,
  bookingLoading,
}: PropertyBookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">
            R$ {pricePerNight.toLocaleString("pt-BR")}
          </div>
          <div className="text-gray-600">por noite</div>
        </div>

        <Button
          onClick={onBook}
          disabled={!isAvailable || bookingLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          size="lg"
        >
          {bookingLoading
            ? "Processando..."
            : isAvailable
            ? "Reservar agora"
            : "Indisponível"}
        </Button>

        <div className="text-center text-sm text-gray-500">
          {isAvailable
            ? "Confirmação imediata"
            : "Esta propriedade não está disponível"}
        </div>
      </div>
    </div>
  );
}
