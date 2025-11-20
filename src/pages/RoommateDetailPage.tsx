import { useParams, Link } from "react-router-dom";
import { mockRoommates, mockAssignments, mockChores, mockHistoricalEffort } from "../data/mockData";
import { ArrowLeft } from "lucide-react";

export function RoommateDetailPage() {
  const { id } = useParams<{ id: string }>();
  const roommate = mockRoommates.find((r) => r.id === id);

  if (!roommate) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-700 text-xl">Roommate not found</p>
      </div>
    );
  }

  const roommateAssignments = mockAssignments.filter((a) => a.assignedTo === id);
  const totalEffort = roommateAssignments.reduce((sum, a) => {
    const chore = mockChores.find((c) => c.id === a.choreId);
    return sum + (chore?.baseEffort || 0);
  }, 0);

  const historicalData = mockHistoricalEffort[id as keyof typeof mockHistoricalEffort] || [];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/roommates"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Roommates
        </Link>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-start gap-6 mb-8">
            <img
              src={roommate.avatarUrl}
              alt={roommate.name}
              className="w-24 h-24 rounded-full"
            />
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">{roommate.name}</h1>
                <span className="text-3xl">
                  {getMoodEmoji(roommate.moodTag)}
                </span>
              </div>
              <p className="text-gray-600">
                {roommate.moodTag ? `${roommate.moodTag} mode` : "Neutral vibe"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Reliability</p>
              <p className="text-2xl font-bold text-blue-600">
                {(roommate.reliability * 100).toFixed(0)}%
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Stress Level</p>
              <p className="text-2xl font-bold text-red-600">{roommate.stressLevel} / 5</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Weekly Capacity</p>
              <p className="text-2xl font-bold text-green-600">{roommate.weeklyCapacity} pts</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">This Week</p>
              <p className="text-2xl font-bold text-purple-600">{totalEffort} pts</p>
            </div>
          </div>

          <hr className="my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">This Week's Chores</h3>
              <div className="space-y-2">
                {roommateAssignments.map((a) => {
                  const chore = mockChores.find((c) => c.id === a.choreId);
                  return (
                    <div
                      key={`${a.choreId}-${a.day}`}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-800">{chore?.name}</p>
                        <p className="text-xs text-gray-600">{a.day}</p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                        {chore?.baseEffort} pts
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Past 4 Weeks</h3>
              <div className="flex gap-2 mb-4">
                {historicalData.map((effort, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div className="bg-blue-100 rounded w-full" style={{ height: `${effort * 4}px` }} />
                    <p className="text-xs text-gray-600 mt-2">W{i + 1}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">Avg: {(historicalData.reduce((a, b) => a + b, 0) / historicalData.length).toFixed(1)} pts/week</p>
            </div>
          </div>

          {roommate.preferredChores && roommate.preferredChores.length > 0 && (
            <>
              <hr className="my-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferred Chores</h3>
                <div className="flex flex-wrap gap-2">
                  {roommate.preferredChores.map((choreId) => {
                    const chore = mockChores.find((c) => c.id === choreId);
                    return (
                      <span
                        key={choreId}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {chore?.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {roommate.unavailableDays && roommate.unavailableDays.length > 0 && (
            <>
              <hr className="my-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Unavailable Days</h3>
                <p className="text-gray-700">{roommate.unavailableDays.join(", ")}</p>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Swap History</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>Swapped bathroom with Alex on 2025-11-17</p>
            <p>Swapped trash with Jordan on 2025-11-10</p>
            <p>Swapped laundry with Sam on 2025-11-03</p>
          </div>
        </div>
      </div>
    </div>
  );
}
