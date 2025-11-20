import { mockRoommates } from "../data/mockData";
import { RoommateCard } from "../components/RoommateCard";

export function RoommatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Roommates</h1>
        <p className="text-gray-600 mb-8">Click on any roommate to view their profile and swap history</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRoommates.map((roommate) => (
            <RoommateCard key={roommate.id} roommate={roommate} />
          ))}
        </div>
      </div>
    </div>
  );
}
