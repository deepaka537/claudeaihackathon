import { useEffect, useState } from "react";
import { mockAssignments, mockRoommates } from "../data/mockData";
import { useHouse } from "../context/HouseContext";
import { ScheduleGrid } from "../components/ScheduleGrid";
import { WhyMeModal } from "../components/WhyMeModal";
import { FairnessChart } from "../components/FairnessChart";
import type { Assignment } from "../types";
import { RefreshCw, Sparkles } from "lucide-react";

export function SchedulePage() {
  const { assignments, setAssignments, updateAssignment } = useHouse();
  const [selectedReason, setSelectedReason] = useState<Assignment | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (assignments.length === 0) {
      setAssignments(mockAssignments);
    }
  }, []);

  const handleMarkComplete = (assignment: Assignment) => {
    updateAssignment({
      ...assignment,
      completed: true,
      completedAt: new Date().toISOString(),
    });
  };

  const handleGenerateSchedule = () => {
    setIsGenerating(true);
    // Simulate AI generation with a slight delay
    setTimeout(() => {
      // In a real app, this would call an API
      // For now, just shuffle assignments a bit to simulate new schedule
      const newAssignments = assignments.map((a) => ({
        ...a,
        reason: `[AI-Generated] ${a.reason}`,
      }));
      setAssignments(newAssignments);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Weekly Schedule</h1>
          <button
            onClick={handleGenerateSchedule}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Ask AI to Generate Schedule
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <ScheduleGrid
              assignments={assignments}
              roommates={mockRoommates}
              onMarkComplete={handleMarkComplete}
              onShowReason={setSelectedReason}
            />
          </div>
          <div>
            <FairnessChart assignments={assignments} roommates={mockRoommates} />
          </div>
        </div>

        <WhyMeModal assignment={selectedReason} onClose={() => setSelectedReason(null)} />
      </div>
    </div>
  );
}
