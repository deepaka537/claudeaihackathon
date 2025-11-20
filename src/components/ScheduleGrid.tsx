import type { Assignment, Roommate } from "../types";
import { AssignmentCard } from "./AssignmentCard";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface ScheduleGridProps {
  assignments: Assignment[];
  roommates: Roommate[];
  onMarkComplete?: (assignment: Assignment) => void;
  onShowReason?: (assignment: Assignment) => void;
}

export function ScheduleGrid({
  assignments,
  roommates,
  onMarkComplete,
  onShowReason,
}: ScheduleGridProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Weekly Schedule</h3>
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${DAYS.length}, 1fr)` }}>
        {DAYS.map((day) => {
          const dayAssignments = assignments.filter((a) => a.day === day);
          return (
            <div key={day} className="space-y-3">
              <h4 className="font-bold text-center text-gray-700 p-2 bg-blue-50 rounded-lg">
                {day}
              </h4>
              <div className="space-y-2 min-h-[300px]">
                {dayAssignments.map((assignment) => {
                  const roommate = roommates.find((r) => r.id === assignment.assignedTo);
                  if (!roommate) return null;

                  return (
                    <AssignmentCard
                      key={`${assignment.choreId}-${assignment.day}`}
                      assignment={assignment}
                      roommate={roommate}
                      onMarkComplete={onMarkComplete}
                      onShowReason={onShowReason}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
