import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const AddMedicationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Medication added",
        description: "Your medication has been successfully added to your schedule.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="space-y-2">
        <Label htmlFor="name">Medication Name</Label>
        <Input
          id="name"
          placeholder="Enter medication name"
          className="border-mint-200 focus:border-mint-400"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dosage">Dosage</Label>
        <Input
          id="dosage"
          placeholder="e.g., 1 tablet"
          className="border-mint-200 focus:border-mint-400"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          type="time"
          className="border-mint-200 focus:border-mint-400"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="instructions">Special Instructions</Label>
        <Textarea
          id="instructions"
          placeholder="Any special instructions..."
          className="border-mint-200 focus:border-mint-400"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-mint-500 hover:bg-mint-600 text-white transition-colors"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Medication"}
      </Button>
    </form>
  );
};