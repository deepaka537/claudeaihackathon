# ChoreSense: Component & Type Documentation

## Component Hierarchy

```
App (React Router)
├── Header
│   └── Navigation links to all pages
├── Routes
│   ├── DashboardPage /
│   │   ├── HouseMoodSelector
│   │   ├── HouseVibeCard
│   │   ├── WeeklyChoreGrid
│   │   ├── FairnessChart
│   │   ├── UpcomingChoresList
│   │   └── AiInsightCard
│   │
│   ├── SchedulePage /schedule
│   │   ├── ScheduleGrid
│   │   │   └── AssignmentCard (multiple)
│   │   ├── FairnessChart
│   │   └── WhyMeModal
│   │
│   ├── SwapPage /swap
│   │   └── SwapSuggestionList
│   │
│   ├── RoommatesPage /roommates
│   │   └── RoommateCard (grid)
│   │
│   ├── RoommateDetailPage /roommates/:id
│   │   └── (profile display)
│   │
│   └── NotificationsDemoPage /notifications-demo
│       └── (form + preview)
│
└── HouseProvider (Context)
    └── Global state management
```

## Components Breakdown

### Presentation Components

#### 1. Header
**File:** `src/components/Header.tsx`
**Props:** None
**State:** None
**Purpose:** Navigation bar with links to all pages
**Features:**
- Logo with icon
- 5 navigation links
- Hover effects
- Responsive design

```typescript
// Usage
<Header />
```

#### 2. HouseMoodSelector
**File:** `src/components/HouseMoodSelector.tsx`
**Props:** None
**State:** Uses context (houseMood, setHouseMood)
**Purpose:** 5 mood buttons for house vibe
**Features:**
- Chill, Busy, Chaos, Drowning, Finals modes
- Emoji indicators
- Active state styling
- Updates global state

```typescript
// Usage
<HouseMoodSelector />
```

#### 3. HouseVibeCard
**File:** `src/components/HouseVibeCard.tsx`
**Props:**
```typescript
{
  roommates: Roommate[]
}
```
**Purpose:** Display house vibe based on stress levels
**Features:**
- Color-coded vibe (green = chill, red = drowning)
- Stress level calculation
- Dynamic emoji and label
- Responsive layout

```typescript
// Usage
<HouseVibeCard roommates={mockRoommates} />
```

#### 4. FairnessChart
**File:** `src/components/FairnessChart.tsx`
**Props:**
```typescript
{
  assignments: Assignment[];
  roommates: Roommate[]
}
```
**Purpose:** Show effort distribution per roommate
**Features:**
- Horizontal bars for each roommate
- Color coding (green/yellow/red based on capacity)
- Shows effort vs. capacity
- Real-time calculation

```typescript
// Usage
<FairnessChart assignments={assignments} roommates={roommates} />
```

#### 5. WeeklyChoreGrid
**File:** `src/components/WeeklyChoreGrid.tsx`
**Props:**
```typescript
{
  assignments: Assignment[];
  roommates: Roommate[]
}
```
**Purpose:** Dashboard overview of weekly schedule
**Features:**
- 7-column grid for days
- Color-coded effort (green/yellow/red)
- Shows roommate avatar
- Compact chore info

```typescript
// Usage
<WeeklyChoreGrid assignments={assignments} roommates={roommates} />
```

#### 6. UpcomingChoresList
**File:** `src/components/UpcomingChoresList.tsx`
**Props:**
```typescript
{
  assignments: Assignment[];
  roommates: Roommate[]
}
```
**Purpose:** Show next 5 upcoming chores
**Features:**
- Sorted by day
- Shows day, chore name, assignee, effort
- Completion indicator
- Hover effects

```typescript
// Usage
<UpcomingChoresList assignments={assignments} roommates={roommates} />
```

#### 7. AiInsightCard
**File:** `src/components/AiInsightCard.tsx`
**Props:**
```typescript
{
  roommates: Roommate[]
}
```
**Purpose:** Show personalized AI recommendations
**Features:**
- Smart insight generation
- Based on stress, reliability, capacity
- Markdown-style formatting
- Lightbulb icon

```typescript
// Usage
<AiInsightCard roommates={roommates} />
```

#### 8. ScheduleGrid
**File:** `src/components/ScheduleGrid.tsx`
**Props:**
```typescript
{
  assignments: Assignment[];
  roommates: Roommate[];
  onMarkComplete?: (assignment: Assignment) => void;
  onShowReason?: (assignment: Assignment) => void;
}
```
**Purpose:** Full interactive weekly schedule
**Features:**
- 7 columns for days
- AssignmentCard children
- Callbacks for interactions
- Min-height for visual balance

```typescript
// Usage
<ScheduleGrid
  assignments={assignments}
  roommates={roommates}
  onMarkComplete={handleMarkComplete}
  onShowReason={setSelectedReason}
/>
```

#### 9. AssignmentCard
**File:** `src/components/AssignmentCard.tsx`
**Props:**
```typescript
{
  assignment: Assignment;
  roommate: Roommate;
  onMarkComplete?: (assignment: Assignment) => void;
  onShowReason?: (assignment: Assignment) => void;
}
```
**Purpose:** Individual chore card
**Features:**
- Chore name, effort, assignee avatar
- "Done" button on hover
- "?" button for explanation
- Completion checkmark
- Color-coded effort badge

```typescript
// Usage
<AssignmentCard
  assignment={assignment}
  roommate={roommate}
  onMarkComplete={handleComplete}
  onShowReason={handleShowReason}
/>
```

#### 10. WhyMeModal
**File:** `src/components/WhyMeModal.tsx`
**Props:**
```typescript
{
  assignment: Assignment | null;
  onClose: () => void;
}
```
**Purpose:** Modal showing why person was assigned chore
**Features:**
- Displays AI reasoning
- Shows roommate stats (reliability, capacity, stress, unavailable)
- Close button
- Styled modal overlay

```typescript
// Usage
<WhyMeModal assignment={selectedReason} onClose={handleClose} />
```

#### 11. SwapSuggestionList
**File:** `src/components/SwapSuggestionList.tsx`
**Props:**
```typescript
{
  suggestions: SwapSuggestion[];
  onApply?: (suggestion: SwapSuggestion, index: number) => void;
  isLoading?: boolean;
}
```
**Purpose:** Display AI-generated swap suggestions
**Features:**
- Shows loading spinner
- Multiple suggestion cards
- Reason text for each
- Apply button per suggestion
- Empty state message

```typescript
// Usage
<SwapSuggestionList
  suggestions={suggestions}
  isLoading={isLoading}
  onApply={handleApplySwap}
/>
```

#### 12. RoommateCard
**File:** `src/components/RoommateCard.tsx`
**Props:**
```typescript
{
  roommate: Roommate
}
```
**Purpose:** Clickable card preview of roommate
**Features:**
- Avatar image
- Name and mood
- Reliability bar
- Stress level indicator (5 dots)
- Weekly capacity display
- Link to detail page

```typescript
// Usage
<RoommateCard roommate={roommate} />
```

---

## Type Definitions

### Core Types
**File:** `src/types/index.ts`

#### Roommate
```typescript
interface Roommate {
  id: string;                           // Unique identifier
  name: string;                         // Display name
  avatarUrl?: string;                   // Profile image URL
  reliability: number;                  // 0–1 (0% to 100%)
  stressLevel: number;                  // 1–5
  weeklyCapacity: number;               // Effort points target
  unavailableDays: string[];            // ["Mon", "Fri"]
  preferredChores?: string[];           // Array of chore IDs
  moodTag?: "chill" | "busy" | "chaos" | "finals";
}
```

#### Chore
```typescript
interface Chore {
  id: string;                           // Unique identifier
  name: string;                         // Display name
  description?: string;                 // Details
  baseEffort: number;                   // 1–10 scale
  grossness: number;                    // 1–5 (how disgusting)
  minFrequencyWeeks: number;            // How often (1 = weekly)
  preferredDay?: string;                // Ideal day ("Sun")
  isHeavy?: boolean;                    // Derived from effort >= 7
}
```

#### Assignment
```typescript
interface Assignment {
  week: string;                         // ISO date "2025-11-24"
  choreId: string;                      // Links to Chore.id
  assignedTo: string;                   // Links to Roommate.id
  day: string;                          // "Mon" – "Sun"
  completed: boolean;                   // Mark done
  proofImageUrl?: string;               // Optional photo proof
  completedAt?: string;                 // ISO timestamp
  reason?: string;                      // AI explanation
}
```

#### HouseRules
```typescript
interface HouseRules {
  maxEffortSpread: number;              // Max diff between roommates
  avoidRepeatHeavy: boolean;            // Don't repeat heavy chores
  maxHeavyPerWeek: number;              // Max heavy chores per person
}
```

#### EffortRecord
```typescript
interface EffortRecord {
  roommateId: string;
  totalEffort: number;
}
```

#### ScheduleResponse
```typescript
interface ScheduleResponse {
  week: string;                         // ISO date
  schedule: Assignment[];               // Full week of assignments
  summary: {
    effortByPerson: EffortRecord[];     // Effort per roommate
    fairnessNotes: string[];            // AI reasoning
  };
}
```

#### SwapSuggestion
```typescript
interface SwapSuggestion {
  reason: string;                       // Why this swap
  changes: Array<{
    chore: string;                      // Chore name
    from: string;                       // From roommate name
    to: string;                         // To roommate name
  }>;
}
```

#### HouseMood & Related
```typescript
type HouseMood = "chill" | "busy" | "chaos" | "drowning" | "finals";
type RoommateMoodTag = "chill" | "busy" | "chaos" | "finals";

interface HouseState {
  houseMood: HouseMood;
  lastUpdated: string;
}
```

---

## Context API

### HouseContext
**File:** `src/context/HouseContext.tsx`

```typescript
interface HouseContextType {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  houseMood: HouseMood;
  setHouseMood: (mood: HouseMood) => void;
  updateAssignment: (updated: Assignment) => void;
}

// Usage in components
const { assignments, setAssignments, houseMood, setHouseMood } = useHouse();
```

---

## Page Components

### DashboardPage
**File:** `src/pages/DashboardPage.tsx`
**Route:** `/`
**Features:**
- Initializes assignments from mock data
- Displays all dashboard components
- Grid layout for responsive design

### SchedulePage
**File:** `src/pages/SchedulePage.tsx`
**Route:** `/schedule`
**Features:**
- Interactive schedule grid
- Mark complete functionality
- Show "Why Me?" modal
- Simulate schedule generation

### SwapPage
**File:** `src/pages/SwapPage.tsx`
**Route:** `/swap`
**Features:**
- Roommate selection dropdown
- Chore selection from assignments
- AI suggestion generation
- Apply swaps

### RoommatesPage
**File:** `src/pages/RoommatesPage.tsx`
**Route:** `/roommates`
**Features:**
- Grid of roommate cards
- Click to navigate to detail

### RoommateDetailPage
**File:** `src/pages/RoommateDetailPage.tsx`
**Route:** `/roommates/:id`
**Features:**
- Full profile display
- Stats dashboard
- This week's chores
- Historical trends
- Preferred chores
- Swap history

### NotificationsDemoPage
**File:** `src/pages/NotificationsDemoPage.tsx`
**Route:** `/notifications-demo`
**Features:**
- Configuration form
- Message generation
- Live preview
- Send notification button

---

## Data Layer

### mockData.ts
**File:** `src/data/mockData.ts`

Exports:
- `mockRoommates: Roommate[]` - 3 roommates
- `mockChores: Chore[]` - 6 chores
- `mockAssignments: Assignment[]` - Weekly schedule
- `mockHouseRules: HouseRules` - Fairness constraints
- `mockHouseState: HouseState` - Current vibe
- `mockHistoricalEffort` - Past 4 weeks data

---

## State Flow

```
User Interaction
      ↓
Component Handler
      ↓
Update Context via useHouse()
      ↓
Global State Changes
      ↓
Components Re-render
      ↓
UI Updates
```

Example:
```typescript
// In SchedulePage
const { updateAssignment } = useHouse();

const handleMarkComplete = (assignment: Assignment) => {
  updateAssignment({
    ...assignment,
    completed: true,
    completedAt: new Date().toISOString()
  });
};
```

---

## Styling Approach

**All components use Tailwind CSS classes:**
- Responsive grid/flex layouts
- Color utilities (bg-, text-, border-)
- Spacing (p-, m-, gap-)
- Effects (hover:, transition, shadow-)
- State management (disabled:)

**Color Scheme:**
- Primary: Blue (600-700)
- Success: Green
- Warning: Yellow
- Danger: Red
- Background: Gray (50-100)
- Text: Gray (600-900)

---

## Component Reusability

### Shared Props Patterns
```typescript
// Display props
{ roommate: Roommate }
{ chore: Chore }
{ assignment: Assignment }

// State management props
{ isLoading?: boolean }
{ onClose: () => void }

// Callback props
{ onMarkComplete?: (a: Assignment) => void }
{ onApply?: (s: SwapSuggestion) => void }
```

### Composition Example
```typescript
// Flexible card component
<AssignmentCard
  assignment={a}
  roommate={r}
  onMarkComplete={handleComplete}
  onShowReason={handleReason}
/>
```

---

## Performance Considerations

✅ **Optimizations:**
- Components only re-render when context changes
- No unnecessary computations in render
- Event handlers properly memoized
- Efficient grid layouts
- Lazy modal rendering

💡 **Future improvements:**
- Memoize components with React.memo
- Use useCallback for handlers
- Virtualize large lists
- Code-split pages

---

## Testing Notes

### Component Testing
```typescript
import { render } from '@testing-library/react';
import { RoommateCard } from './RoommateCard';

test('renders roommate name', () => {
  render(<RoommateCard roommate={mockRoommates[0]} />);
  // assertions...
});
```

### Integration Testing
```typescript
test('swap suggestion applies correctly', () => {
  // Navigate to swap page
  // Select roommate and chore
  // Get suggestions
  // Apply swap
  // Verify state updated
});
```

---

This documentation covers all 12 components, 7 types, 6 pages, and the complete component hierarchy.
