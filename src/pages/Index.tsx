import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddMedicationForm } from "@/components/AddMedicationForm";
import { DailySchedule } from "@/components/DailySchedule";
import { Plus } from "lucide-react";

const Index = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50 to-white p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">MedRemind</h1>
          <p className="text-gray-600">Keep track of your medications with ease</p>
        </header>

        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-mint-200 shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          {showAddForm ? "Close Form" : "Add New Medication"}
        </Button>

        {showAddForm && (
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-mint-100 shadow-lg">
            <AddMedicationForm />
          </div>
        )}

        <DailySchedule />
      </div>
    </div>
  );
};

export default Index;