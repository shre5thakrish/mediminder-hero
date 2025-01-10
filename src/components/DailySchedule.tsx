import { MedicationCard } from "./MedicationCard";

const mockSchedule = [
  {
    name: "Aspirin",
    dosage: "1 tablet",
    time: "08:00",
    instructions: "Take with food",
  },
  {
    name: "Vitamin D",
    dosage: "2 tablets",
    time: "09:30",
    instructions: "Take after breakfast",
  },
];

export const DailySchedule = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Today's Schedule</h2>
        <div className="text-sm font-medium text-mint-500">
          {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div className="space-y-4">
        {mockSchedule.map((medication, index) => (
          <MedicationCard key={index} {...medication} />
        ))}
      </div>
    </div>
  );
};