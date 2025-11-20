import type { Roommate, Chore, Assignment, HouseRules, HouseState } from "../types";

export const mockRoommates: Roommate[] = [
  {
    id: "alex",
    name: "Alex",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    reliability: 0.85,
    stressLevel: 2,
    weeklyCapacity: 20,
    unavailableDays: [],
    preferredChores: ["dishes", "trash"],
    moodTag: "chill",
  },
  {
    id: "sam",
    name: "Sam",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sam",
    reliability: 0.9,
    stressLevel: 4,
    weeklyCapacity: 15,
    unavailableDays: ["Wed", "Thu"],
    preferredChores: ["vacuuming"],
    moodTag: "finals",
  },
  {
    id: "jordan",
    name: "Jordan",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
    reliability: 0.7,
    stressLevel: 3,
    weeklyCapacity: 25,
    unavailableDays: ["Sat"],
    preferredChores: ["bathroom", "laundry"],
    moodTag: "busy",
  },
];

export const mockChores: Chore[] = [
  {
    id: "dishes",
    name: "Dishes",
    description: "Wash, dry, and put away dishes",
    baseEffort: 5,
    grossness: 3,
    minFrequencyWeeks: 1,
    preferredDay: "daily",
    isHeavy: false,
  },
  {
    id: "bathroom",
    name: "Bathroom Cleaning",
    description: "Clean toilet, sink, shower/tub",
    baseEffort: 7,
    grossness: 5,
    minFrequencyWeeks: 1,
    preferredDay: "Sun",
    isHeavy: true,
  },
  {
    id: "vacuuming",
    name: "Vacuuming",
    description: "Vacuum all carpeted areas",
    baseEffort: 6,
    grossness: 2,
    minFrequencyWeeks: 1,
    preferredDay: "Fri",
    isHeavy: false,
  },
  {
    id: "trash",
    name: "Take Out Trash",
    description: "Collect and dispose of trash",
    baseEffort: 3,
    grossness: 4,
    minFrequencyWeeks: 2,
    preferredDay: "Mon",
    isHeavy: false,
  },
  {
    id: "kitchen",
    name: "Kitchen Deep Clean",
    description: "Clean counters, stovetop, microwave",
    baseEffort: 8,
    grossness: 3,
    minFrequencyWeeks: 2,
    preferredDay: "Sat",
    isHeavy: true,
  },
  {
    id: "laundry",
    name: "Laundry",
    description: "Wash common area linens and towels",
    baseEffort: 4,
    grossness: 1,
    minFrequencyWeeks: 1,
    preferredDay: "Wed",
    isHeavy: false,
  },
];

// Week starting 2025-11-24
export const mockAssignments: Assignment[] = [
  {
    week: "2025-11-24",
    choreId: "dishes",
    assignedTo: "alex",
    day: "Mon",
    completed: false,
    reason: "Alex prefers dishes and has good availability",
  },
  {
    week: "2025-11-24",
    choreId: "bathroom",
    assignedTo: "jordan",
    day: "Sun",
    completed: false,
    reason: "Jordan's highest capacity this week, bathroom was due",
  },
  {
    week: "2025-11-24",
    choreId: "vacuuming",
    assignedTo: "sam",
    day: "Fri",
    completed: false,
    reason: "Sam prefers vacuuming; Friday works with availability",
  },
  {
    week: "2025-11-24",
    choreId: "trash",
    assignedTo: "alex",
    day: "Mon",
    completed: false,
    reason: "Quick task, balanced with other assignments",
  },
  {
    week: "2025-11-24",
    choreId: "kitchen",
    assignedTo: "jordan",
    day: "Sat",
    completed: false,
    reason: "Heavy chore distributed fairly; Jordan has capacity",
  },
  {
    week: "2025-11-24",
    choreId: "laundry",
    assignedTo: "sam",
    day: "Wed",
    completed: false,
    reason: "Light task for Sam who is in finals mode",
  },
];

export const mockHouseRules: HouseRules = {
  maxEffortSpread: 8,
  avoidRepeatHeavy: true,
  maxHeavyPerWeek: 2,
};

export const mockHouseState: HouseState = {
  houseMood: "busy",
  lastUpdated: new Date().toISOString(),
};

// Historical effort tracking (simplified)
export const mockHistoricalEffort = {
  alex: [18, 19, 17, 20],
  sam: [15, 14, 16, 15],
  jordan: [22, 21, 23, 22],
};
