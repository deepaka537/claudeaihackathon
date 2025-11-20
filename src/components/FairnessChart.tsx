import type { Assignment, Roommate } from "../types";
import { mockChores } from "../data/mockData";

interface FairnessChartProps {
  assignments: Assignment[];
  roommates: Roommate[];
}

export function FairnessChart({ assignments, roommates }: FairnessChartProps) {
  // Calculate total effort per roommate for current week
  const effortMap: Record<string, number> = {};
  roommates.forEach((r) => {
    effortMap[r.id] = 0;
  });

  assignments.forEach((a) => {
    const chore = mockChores.find((c) => c.id === a.choreId);
    if (chore && effortMap[a.assignedTo] !== undefined) {
      effortMap[a.assignedTo] += chore.baseEffort;
    }
  });

  const maxEffort = Math.max(...Object.values(effortMap), 1);
  const roommateEffort = roommates.map((r) => ({
    name: r.name,
    effort: effortMap[r.id],
    capacity: r.weeklyCapacity,
  }));

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Effort Balance</h3>
      <div className="space-y-4">
        {roommateEffort.map((re) => (
          <div key={re.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">{re.name}</span>
              <span className="text-gray-600">
                {re.effort} / {re.capacity} pts
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  re.effort > re.capacity
                    ? "bg-red-500"
                    : re.effort >= re.capacity * 0.8
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
                style={{ width: `${(re.effort / maxEffort) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4 italic">
        Effort is based on chore difficulty (1-10 scale)
      </p>
    </div>
  );
}
