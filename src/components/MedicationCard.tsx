import { Card } from "@/components/ui/card";
import { Clock, Pill } from "lucide-react";

interface MedicationCardProps {
  name: string;
  dosage: string;
  time: string;
  instructions?: string;
}

export const MedicationCard = ({ name, dosage, time, instructions }: MedicationCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200 animate-fadeIn bg-white/80 backdrop-blur-sm border border-mint-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-mint-100 rounded-full">
            <Pill className="w-5 h-5 text-mint-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{dosage}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-mint-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{time}</span>
        </div>
      </div>
      {instructions && (
        <p className="mt-4 text-sm text-gray-600 border-t border-mint-100 pt-4">
          {instructions}
        </p>
      )}
    </Card>
  );
};