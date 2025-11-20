import { useState } from "react";
import type { Assignment, Roommate } from "../types";
import { mockChores } from "../data/mockData";
import { HelpCircle, CheckCircle2 } from "lucide-react";

interface AssignmentCardProps {
  assignment: Assignment;
  roommate: Roommate;
  onMarkComplete?: (assignment: Assignment) => void;
  onShowReason?: (assignment: Assignment) => void;
}

export function AssignmentCard({
  assignment,
  roommate,
  onMarkComplete,
  onShowReason,
}: AssignmentCardProps) {
  const chore = mockChores.find((c) => c.id === assignment.choreId);
  const [isHovered, setIsHovered] = useState(false);

  if (!chore) return null;

  const effortColor =
    chore.baseEffort <= 3
      ? "bg-green-100 text-green-800"
      : chore.baseEffort <= 6
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800";

  return (
    <div
      className="relative bg-white rounded-lg border-2 border-gray-200 p-4 hover:shadow-lg transition cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {assignment.completed && (
        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      )}

      <h4 className="font-semibold text-gray-800 text-sm mb-2 pr-6">{chore.name}</h4>

      <div className="flex items-center gap-2 mb-3">
        <img
          src={roommate.avatarUrl}
          alt={roommate.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-xs text-gray-600 font-medium">{roommate.name}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold px-2 py-1 rounded ${effortColor}`}>
          {chore.baseEffort} pts {chore.isHeavy && "⚠️"}
        </span>
        {isHovered && (
          <button
            onClick={() => onShowReason?.(assignment)}
            className="text-blue-600 hover:text-blue-800 transition"
            title="Why me?"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        )}
      </div>

      {isHovered && !assignment.completed && (
        <div className="mt-2 flex gap-2">
          <button
            onClick={() => onMarkComplete?.(assignment)}
            className="flex-1 text-xs bg-green-500 text-white py-1 rounded hover:bg-green-600 transition"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
