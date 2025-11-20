import type { Assignment } from "../types";
import { mockChores, mockRoommates } from "../data/mockData";
import { X } from "lucide-react";

interface WhyMeModalProps {
  assignment: Assignment | null;
  onClose: () => void;
}

export function WhyMeModal({ assignment, onClose }: WhyMeModalProps) {
  if (!assignment) return null;

  const chore = mockChores.find((c) => c.id === assignment.choreId);
  const roommate = mockRoommates.find((r) => r.id === assignment.assignedTo);

  if (!chore || !roommate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Why {roommate.name}?</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">{chore.name}</p>
          <p className="text-gray-700">
            {assignment.reason ||
              "This assignment was optimized for fairness and availability."}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-2 mb-4">
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase">Roommate Details</p>
            <div className="mt-2 space-y-1 text-sm">
              <p>
                <span className="font-medium">Reliability:</span>{" "}
                {(roommate.reliability * 100).toFixed(0)}%
              </p>
              <p>
                <span className="font-medium">Weekly Capacity:</span> {roommate.weeklyCapacity}{" "}
                pts
              </p>
              <p>
                <span className="font-medium">Stress Level:</span> {roommate.stressLevel} / 5
              </p>
              {roommate.unavailableDays.length > 0 && (
                <p>
                  <span className="font-medium">Unavailable:</span> {roommate.unavailableDays.join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
