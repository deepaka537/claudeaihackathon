import type { Assignment, Roommate } from "../types";
import { mockChores } from "../data/mockData";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface WeeklyChoreGridProps {
  assignments: Assignment[];
  roommates: Roommate[];
}

function getEffortColor(effort: number): string {
  if (effort <= 3) return "bg-green-100 border-green-300";
  if (effort <= 6) return "bg-yellow-100 border-yellow-300";
  return "bg-red-100 border-red-300";
}

function getEffortBadgeColor(effort: number): string {
  if (effort <= 3) return "bg-green-500";
  if (effort <= 6) return "bg-yellow-500";
  return "bg-red-500";
}

export function WeeklyChoreGrid({ assignments, roommates }: WeeklyChoreGridProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200 overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Overview</h3>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${DAYS.length}, minmax(150px, 1fr))` }}>
        {/* Header row with days */}
        {DAYS.map((day) => (
          <div key={day} className="font-bold text-center text-gray-700 p-2 bg-gray-100 rounded">
            {day}
          </div>
        ))}

        {/* Assignments grid */}
        {DAYS.map((day) => {
          const dayAssignments = assignments.filter((a) => a.day === day);
          return (
            <div key={`cell-${day}`} className="space-y-2 min-h-[200px]">
              {dayAssignments.map((assignment) => {
                const chore = mockChores.find((c) => c.id === assignment.choreId);
                const roommate = roommates.find((r) => r.id === assignment.assignedTo);
                if (!chore || !roommate) return null;

                return (
                  <div
                    key={`${assignment.choreId}-${assignment.day}`}
                    className={`p-3 rounded-lg border-2 text-xs hover:shadow-md transition cursor-pointer ${getEffortColor(
                      chore.baseEffort
                    )}`}
                  >
                    <p className="font-semibold text-gray-800 truncate">{chore.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <img
                        src={roommate.avatarUrl}
                        alt={roommate.name}
                        className="w-4 h-4 rounded-full"
                      />
                      <span className="text-gray-600 truncate">{roommate.name}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <span className={`text-white text-xs font-bold px-2 py-0.5 rounded ${getEffortBadgeColor(chore.baseEffort)}`}>
                        {chore.baseEffort}
                      </span>
                      {chore.isHeavy && <span className="text-lg">⚠️</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
