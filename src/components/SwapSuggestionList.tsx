import { Check } from "lucide-react";
import type { SwapSuggestion } from "../types";

interface SwapSuggestionListProps {
  suggestions: SwapSuggestion[];
  onApply?: (suggestion: SwapSuggestion, index: number) => void;
  isLoading?: boolean;
}

export function SwapSuggestionList({
  suggestions,
  onApply,
  isLoading = false,
}: SwapSuggestionListProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-8 border border-gray-200 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Generating AI swap suggestions...</p>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return (
      <div className="bg-blue-50 rounded-lg shadow p-8 border border-blue-200 text-center">
        <p className="text-gray-700">Click "Ask AI for Fair Swap Suggestions" to get recommendations.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">AI Swap Suggestions</h3>
      {suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600 hover:shadow-lg transition"
        >
          <p className="text-gray-700 mb-4">{suggestion.reason}</p>
          <div className="bg-gray-50 rounded p-4 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Changes:</p>
            <ul className="space-y-2">
              {suggestion.changes.map((change, changeIdx) => (
                <li key={changeIdx} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-medium">{change.chore}</span>
                  <span className="text-gray-400">•</span>
                  <span>{change.from}</span>
                  <span className="text-gray-400">→</span>
                  <span>{change.to}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => onApply?.(suggestion, idx)}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Apply This Swap
          </button>
        </div>
      ))}
    </div>
  );
}
