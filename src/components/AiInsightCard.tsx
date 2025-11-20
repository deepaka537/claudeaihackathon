import type { Roommate } from "../types";
import { Lightbulb } from "lucide-react";

interface AiInsightCardProps {
  roommates: Roommate[];
}

export function AiInsightCard({ roommates }: AiInsightCardProps) {
  const insights: string[] = [];

  const busyRoommate = roommates.find((r) => r.stressLevel >= 4);
  if (busyRoommate) {
    insights.push(
      `${busyRoommate.name} is in ${busyRoommate.moodTag || "busy"} mode—lighter chores this week.`
    );
  }

  const leastReliable = roommates.reduce((min, r) =>
    r.reliability < min.reliability ? r : min
  );
  if (leastReliable.reliability < 0.75) {
    insights.push(
      `${leastReliable.name} has been less reliable lately. Consider offering support or checking in.`
    );
  }

  const highCapacity = roommates.find((r) => r.weeklyCapacity >= 23);
  if (highCapacity) {
    insights.push(
      `${highCapacity.name} is up for more this week—they have the most capacity.`
    );
  }

  const insight = insights.length > 0 ? insights[0] : "The house is in balance!";

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow p-6 border border-purple-200">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">AI Insight</h3>
          <p className="text-gray-700">{insight}</p>
        </div>
      </div>
    </div>
  );
}
