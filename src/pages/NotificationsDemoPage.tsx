import { useState } from "react";
import { mockRoommates, mockChores } from "../data/mockData";
import type { HouseMood } from "../types";
import { MessageSquare, Sparkles } from "lucide-react";

export function NotificationsDemoPage() {
  const [selectedRoommateId, setSelectedRoommateId] = useState(mockRoommates[0].id);
  const [selectedChoreId, setSelectedChoreId] = useState(mockChores[0].id);
  const [dueDate, setDueDate] = useState("2025-11-24");
  const [houseMood, setHouseMood] = useState<HouseMood>("busy");
  const [reliability, setReliability] = useState(0.8);
  const [generatedText, setGeneratedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const roommate = mockRoommates.find((r) => r.id === selectedRoommateId);
      const chore = mockChores.find((c) => c.id === selectedChoreId);

      const templates = [
        `Hey ${roommate?.name}! 👋 Just a friendly reminder: ${chore?.name} is due on ${dueDate}. You've got this! ✨`,
        `${roommate?.name}, it's time for ${chore?.name}! Due: ${dueDate}. Thanks for keeping the house running! 🏠`,
        `Heads up ${roommate?.name}! Don't forget about ${chore?.name} (${dueDate}). Great work staying on top of things! 💪`,
      ];

      if (houseMood === "finals") {
        setGeneratedText(
          `${roommate?.name}, I know you're busy with finals... ${chore?.name} is due ${dueDate}. Take your time! 📚`
        );
      } else if (houseMood === "drowning") {
        setGeneratedText(
          `${roommate?.name}, ${chore?.name} is due on ${dueDate}. No rush if you need help! 🆘`
        );
      } else {
        setGeneratedText(templates[Math.floor(Math.random() * templates.length)]);
      }

      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Notification Generator</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Config Panel */}
          <div className="bg-white rounded-lg shadow p-8 border border-gray-200 h-fit">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Configure</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roommate
                </label>
                <select
                  value={selectedRoommateId}
                  onChange={(e) => setSelectedRoommateId(e.target.value)}
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
                  Chore
                </label>
                <select
                  value={selectedChoreId}
                  onChange={(e) => setSelectedChoreId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  {mockChores.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  House Mood
                </label>
                <select
                  value={houseMood}
                  onChange={(e) => setHouseMood(e.target.value as HouseMood)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="chill">😁 Chill</option>
                  <option value="busy">🤪 Busy</option>
                  <option value="chaos">😤 Chaos</option>
                  <option value="drowning">🥵 Drowning</option>
                  <option value="finals">🤯 Finals</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reliability Score
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={reliability}
                  onChange={(e) => setReliability(parseFloat(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-600 mt-1">
                  {(reliability * 100).toFixed(0)}%
                </p>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Reminder Text
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow p-8 border border-blue-200 h-fit">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              Preview
            </h2>

            {generatedText ? (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                  <p className="text-gray-800 text-lg leading-relaxed">{generatedText}</p>
                </div>

                <div className="bg-white rounded-lg p-4 text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">To:</span>
                    <span>{mockRoommates.find((r) => r.id === selectedRoommateId)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Chore:</span>
                    <span>{mockChores.find((c) => c.id === selectedChoreId)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Due:</span>
                    <span>{dueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tone:</span>
                    <span className="capitalize">{houseMood} mode</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Send Notification
                </button>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>Configure and generate a reminder to see the preview</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">How It Works</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Configure the roommate, chore, and house mood</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Click "Generate Reminder Text" to use AI</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Preview the generated message</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Send the notification to the roommate</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
