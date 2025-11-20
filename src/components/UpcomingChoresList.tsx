import type { Assignment, Roommate } from "../types";
import { mockChores } from "../data/mockData";
import { CheckCircle2 } from "lucide-react";

const DAYS_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface UpcomingChoresListProps {
  assignments: Assignment[];
  roommates: Roommate[];
}

export function UpcomingChoresList({ assignments, roommates }: UpcomingChoresListProps) {
  // Sort by day and take first 5
  const upcoming = assignments
    .sort((a, b) => DAYS_ORDER.indexOf(a.day) - DAYS_ORDER.indexOf(b.day))
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Chores</h3>
      <div className="space-y-3">
        {upcoming.map((assignment) => {
          const chore = mockChores.find((c) => c.id === assignment.choreId);
          const roommate = roommates.find((r) => r.id === assignment.assignedTo);
          if (!chore || !roommate) return null;

          return (
            <div
              key={`${assignment.choreId}-${assignment.day}`}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex-shrink-0">
                {assignment.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                )}
              </div>
              <div className="flex-grow">
                <p className="font-medium text-gray-800">{chore.name}</p>
                <p className="text-sm text-gray-600">{assignment.day}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={roommate.avatarUrl}
                  alt={roommate.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs font-medium text-gray-600 bg-yellow-100 px-2 py-1 rounded">
                  {chore.baseEffort} pts
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
