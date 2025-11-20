import { useEffect, useState } from "react";
import { mockAssignments, mockRoommates, mockChores } from "../data/mockData";
import { useHouse } from "../context/HouseContext";
import { SwapSuggestionList } from "../components/SwapSuggestionList";
import type { SwapSuggestion } from "../types";
import { Sparkles } from "lucide-react";

export function SwapPage() {
  const { assignments, setAssignments } = useHouse();
  const [selectedRoommateId, setSelectedRoommateId] = useState(mockRoommates[0].id);
  const [selectedChoreId, setSelectedChoreId] = useState("");
  const [suggestions, setSuggestions] = useState<SwapSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (assignments.length === 0) {
      setAssignments(mockAssignments);
    }
  }, []);

  // Get chores assigned to selected roommate
  const roommateChores = assignments.filter((a) => a.assignedTo === selectedRoommateId);

  const handleGetSuggestions = () => {
    setIsLoading(true);
    // Simulate AI call
    setTimeout(() => {
      const mockSuggestions: SwapSuggestion[] = [
        {
          reason: "Sam has had fewer heavy chores lately and is in finals mode. This swap would help balance the load.",
          changes: [
            {
              chore: "Kitchen Deep Clean",
              from: selectedRoommateId,
              to: "jordan",
            },
          ],
        },
        {
          reason: "Jordan has high capacity and excellent reliability. They can take bathroom duty.",
          changes: [
            {
              chore: "Bathroom Cleaning",
              from: "jordan",
              to: selectedRoommateId,
            },
          ],
        },
      ];
      setSuggestions(mockSuggestions);
      setIsLoading(false);
    }, 1500);
  };

  const handleApplySwap = (suggestion: SwapSuggestion) => {
    // Apply the swap
    const newAssignments = assignments.map((a) => {
      const change = suggestion.changes.find(
        (c) => mockChores.find((ch) => ch.name === c.chore)?.id === a.choreId
      );
      if (change) {
        if (a.assignedTo === change.from) {
          return { ...a, assignedTo: change.to };
        }
      }
      return a;
    });
    setAssignments(newAssignments);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Chore Swap & Negotiation</h1>

        <div className="bg-white rounded-lg shadow p-8 border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Request a Swap</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Identity
              </label>
              <select
                value={selectedRoommateId}
                onChange={(e) => {
                  setSelectedRoommateId(e.target.value);
                  setSuggestions([]);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {mockRoommates.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chore to Swap Out
              </label>
              <select
                value={selectedChoreId}
                onChange={(e) => setSelectedChoreId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select a chore...</option>
                {roommateChores.map((a) => {
                  const chore = mockChores.find((c) => c.id === a.choreId);
                  return (
                    <option key={`${a.choreId}-${a.day}`} value={a.choreId}>
                      {chore?.name} ({a.day})
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {selectedChoreId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Current Assignment</h3>
              {roommateChores
                .filter((a) => a.choreId === selectedChoreId)
                .map((a) => {
                  const chore = mockChores.find((c) => c.id === a.choreId);
                  const roommate = mockRoommates.find((r) => r.id === a.assignedTo);
                  return (
                    <div key={`${a.choreId}-${a.day}`} className="text-sm text-gray-700">
                      <p>
                        <span className="font-medium">{chore?.name}</span> → {roommate?.name}
                      </p>
                      <p>
                        <span className="font-medium">Effort:</span> {chore?.baseEffort} pts
                      </p>
                      <p>
                        <span className="font-medium">Day:</span> {a.day}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}

          <button
            onClick={handleGetSuggestions}
            disabled={!selectedChoreId || isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Ask AI for Fair Swap Suggestions
          </button>
        </div>

        <SwapSuggestionList
          suggestions={suggestions}
          isLoading={isLoading}
          onApply={handleApplySwap}
        />
      </div>
    </div>
  );
}
