import { Link } from "react-router-dom";
import type { Roommate } from "../types";

interface RoommateCardProps {
  roommate: Roommate;
}

const getMoodEmoji = (mood?: string) => {
  switch (mood) {
    case "chill":
      return "😁";
    case "busy":
      return "🤪";
    case "chaos":
      return "😤";
    case "finals":
      return "🤯";
    default:
      return "😐";
  }
};

export function RoommateCard({ roommate }: RoommateCardProps) {
  return (
    <Link to={`/roommates/${roommate.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={roommate.avatarUrl}
            alt={roommate.name}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-gray-800">{roommate.name}</h3>
            <p className="text-sm text-gray-600">
              {getMoodEmoji(roommate.moodTag)} {roommate.moodTag || "Neutral"}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <p className="text-gray-600">Reliability</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${roommate.reliability * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {(roommate.reliability * 100).toFixed(0)}%
            </p>
          </div>

          <div>
            <p className="text-gray-600">Stress Level</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < roommate.stressLevel
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {roommate.stressLevel} / 5
            </p>
          </div>

          <div>
            <p className="text-gray-600">Weekly Capacity</p>
            <p className="text-lg font-semibold text-blue-600 mt-1">
              {roommate.weeklyCapacity} pts
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
