export type HouseMood = "chill" | "busy" | "chaos" | "drowning" | "finals";
export type RoommateMoodTag = "chill" | "busy" | "chaos" | "finals";

export interface Roommate {
  id: string;
  name: string;
  avatarUrl?: string;
  reliability: number; // 0-1
  stressLevel: number; // 1-5
  weeklyCapacity: number; // effort points target
  unavailableDays: string[]; // e.g., ["Mon", "Fri"]
  preferredChores?: string[]; // array of chore IDs
  moodTag?: RoommateMoodTag;
}

export interface Chore {
  id: string;
  name: string;
  description?: string;
  baseEffort: number; // 1-10
  grossness: number; // 1-5
  minFrequencyWeeks: number; // e.g., 1 = weekly
  preferredDay?: string; // e.g., "Sun"
  isHeavy?: boolean; // derived from weight >= 7
}

export interface Assignment {
  week: string; // ISO date string or "2025-11-24"
  choreId: string;
  assignedTo: string; // roommate id
  day: string; // e.g., "Mon"
  completed: boolean;
  proofImageUrl?: string;
  completedAt?: string;
  reason?: string; // human explanation
}

export interface HouseRules {
  maxEffortSpread: number;
  avoidRepeatHeavy: boolean;
  maxHeavyPerWeek: number;
}

export interface EffortRecord {
  roommateId: string;
  totalEffort: number;
}

export interface ScheduleResponse {
  week: string;
  schedule: Assignment[];
  summary: {
    effortByPerson: EffortRecord[];
    fairnessNotes: string[];
  };
}

export interface SwapSuggestion {
  reason: string;
  changes: Array<{
    chore: string;
    from: string;
    to: string;
  }>;
}

export interface HouseState {
  houseMood: HouseMood;
  lastUpdated: string;
}
