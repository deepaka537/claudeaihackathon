import { useEffect } from "react";
import { mockAssignments, mockRoommates } from "../data/mockData";
import { useHouse } from "../context/HouseContext";
import { HouseMoodSelector } from "../components/HouseMoodSelector";
import { WeeklyChoreGrid } from "../components/WeeklyChoreGrid";
import { FairnessChart } from "../components/FairnessChart";
import { UpcomingChoresList } from "../components/UpcomingChoresList";
import { HouseVibeCard } from "../components/HouseVibeCard";
import { AiInsightCard } from "../components/AiInsightCard";

export function DashboardPage() {
  const { assignments, setAssignments } = useHouse();

  useEffect(() => {
    if (assignments.length === 0) {
      setAssignments(mockAssignments);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <HouseVibeCard roommates={mockRoommates} />
          </div>
          <HouseMoodSelector />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <WeeklyChoreGrid assignments={assignments} roommates={mockRoommates} />
          </div>
          <div className="space-y-6">
            <FairnessChart assignments={assignments} roommates={mockRoommates} />
            <AiInsightCard roommates={mockRoommates} />
          </div>
        </div>

        <UpcomingChoresList assignments={assignments} roommates={mockRoommates} />
      </div>
    </div>
  );
}
