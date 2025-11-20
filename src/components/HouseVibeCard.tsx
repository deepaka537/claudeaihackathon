import type { Roommate } from "../types";

interface HouseVibeCardProps {
  roommates: Roommate[];
}

export function HouseVibeCard({ roommates }: HouseVibeCardProps) {
  const avgStress = roommates.reduce((sum, r) => sum + r.stressLevel, 0) / roommates.length;

  let vibeLabel = "Balanced";
  let vibeEmoji = "⚖️";
  let vibeColor = "bg-blue-50 border-blue-300";
  let descriptionColor = "text-blue-700";

  if (avgStress >= 4.5) {
    vibeLabel = "🥵 Drowning Mode";
    vibeEmoji = "🥵";
    vibeColor = "bg-red-50 border-red-300";
    descriptionColor = "text-red-700";
  } else if (avgStress >= 3.5) {
    vibeLabel = "😤 Chaos Brewing";
    vibeEmoji = "😤";
    vibeColor = "bg-orange-50 border-orange-300";
    descriptionColor = "text-orange-700";
  } else if (avgStress >= 2.5) {
    vibeLabel = "🤪 Busy Week";
    vibeEmoji = "🤪";
    vibeColor = "bg-yellow-50 border-yellow-300";
    descriptionColor = "text-yellow-700";
  } else if (avgStress <= 1.5) {
    vibeLabel = "😁 Chill Vibes";
    vibeEmoji = "😁";
    vibeColor = "bg-green-50 border-green-300";
    descriptionColor = "text-green-700";
  }

  return (
    <div className={`rounded-lg shadow p-6 border ${vibeColor}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{vibeEmoji}</span>
        <h3 className={`text-2xl font-bold ${descriptionColor}`}>{vibeLabel}</h3>
      </div>
      <p className={`text-sm ${descriptionColor} opacity-80`}>
        Average stress level: {avgStress.toFixed(1)} / 5
      </p>
    </div>
  );
}
