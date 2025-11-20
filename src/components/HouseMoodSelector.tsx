import type { HouseMood } from "../types";
import { useHouse } from "../context/HouseContext";

const moods: Array<{ mood: HouseMood; emoji: string; label: string }> = [
  { mood: "chill", emoji: "😁", label: "Chill" },
  { mood: "busy", emoji: "🤪", label: "Busy" },
  { mood: "chaos", emoji: "😤", label: "Chaos Brewing" },
  { mood: "drowning", emoji: "🥵", label: "Drowning" },
  { mood: "finals", emoji: "🤯", label: "Finals Mode" },
];

export function HouseMoodSelector() {
  const { houseMood, setHouseMood } = useHouse();

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">House Mood</h3>
      <div className="flex gap-2 flex-wrap">
        {moods.map(({ mood, emoji, label }) => (
          <button
            key={mood}
            onClick={() => setHouseMood(mood)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
              houseMood === mood
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="text-lg">{emoji}</span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
