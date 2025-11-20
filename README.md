# ChoreSense 🏠

A fully functional React + TypeScript UI prototype for a roommate chore scheduling and fairness app, powered by mock data and interactive components.

## Features

✅ **Dashboard** - High-level view of your house with weekly overview, fairness balance, and AI insights
✅ **Interactive Schedule** - Weekly grid view with drag-and-drop-ready cards, "Why Me?" explanations
✅ **Chore Swapping** - Request fair swaps with AI-powered suggestions
✅ **Roommate Profiles** - View roommate details, reliability, stress levels, and swap history
✅ **House Mood Selector** - Set the vibe (Chill, Busy, Chaos, Drowning, Finals Mode)
✅ **Notifications Demo** - Generate contextualized reminder messages
✅ **Fairness Visualization** - Track effort distribution across roommates

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Icons**: Lucide React
- **State Management**: React Context Hooks
- **Build Tool**: Vite

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
# The app will be available at http://localhost:5173
```

## Project Structure

```
src/
├── components/              # 12 reusable UI components
│   ├── AssignmentCard.tsx   # Draggable chore cards
│   ├── AiInsightCard.tsx    # Smart recommendations
│   ├── FairnessChart.tsx    # Effort distribution
│   ├── Header.tsx           # Navigation bar
│   ├── HouseMoodSelector.tsx# 5 mood buttons
│   ├── HouseVibeCard.tsx    # Stress level indicator
│   ├── RoommateCard.tsx     # Profile preview
│   ├── ScheduleGrid.tsx     # Weekly grid layout
│   ├── SwapSuggestionList.tsx
│   ├── UpcomingChoresList.tsx
│   ├── WeeklyChoreGrid.tsx  # Dashboard overview
│   └── WhyMeModal.tsx       # Explanation popup
├── pages/                   # 6 full pages
│   ├── DashboardPage.tsx
│   ├── SchedulePage.tsx
│   ├── SwapPage.tsx
│   ├── RoommatesPage.tsx
│   ├── RoommateDetailPage.tsx
│   └── NotificationsDemoPage.tsx
├── context/                 # Global state
│   └── HouseContext.tsx
├── data/                    # Mock data
│   └── mockData.ts
└── types/                   # TypeScript interfaces
    └── index.ts
```

## Pages & Features

### 1. Dashboard (`/`)
- 📊 **Weekly Chore Overview**: Grid view of all assignments by day
- 😊 **House Vibe**: Real-time stress indicator (Chill/Busy/Chaos/Drowning/Finals)
- ⚖️ **Fairness Chart**: Effort points per roommate with color-coded capacity
- 📋 **Upcoming Chores**: Next 5 tasks with assignee and effort
- 💡 **AI Insights**: Smart personalized recommendations
- 🎛️ **Mood Selector**: Set house vibe (affects all other pages)

### 2. Schedule (`/schedule`)
- 📅 **Interactive Grid**: 7-column weekly layout
- 🎴 **Assignment Cards**: Chore name, assignee avatar, effort level
- ❓ **"Why Me?" Modal**: Click to see AI reasoning for assignment
- ✅ **Mark Complete**: Hover to reveal "Done" button
- 🤖 **Generate Schedule**: Simulate AI schedule generation (with loading)
- 📊 **Fairness Preview**: Real-time effort distribution

### 3. Chore Swap (`/swap`)
- 👤 **Select Identity**: Choose which roommate you are
- 🧹 **Pick Chore**: Select from your assigned chores
- 💬 **Current Info**: Display effort, day, assignee
- ✨ **AI Suggestions**: Get 2 fair swap recommendations
- 🔄 **Apply Swap**: One-click swap application
- 📝 **Reasoning**: See why swaps are recommended

### 4. Roommates (`/roommates`)
- 🎴 **Roommate Grid**: 3-column card layout
- 📈 **Profile Stats**: Reliability bar, stress dots, capacity
- 🔗 **Click to Detail**: Navigate to full profile

### 5. Roommate Detail (`/roommates/:id`)
- 🖼️ **Profile Header**: Avatar, name, mood emoji
- 📊 **Stats Dashboard**: 4 key metrics in colored boxes
- 📝 **This Week**: Current chores and effort
- 📈 **Historical Graph**: Last 4 weeks trend
- 💬 **Swap History**: Recent swaps with dates
- 🏷️ **Preferences**: Favorite chores and unavailable days

### 6. Notifications Demo (`/notifications-demo`)
- ⚙️ **Configuration Panel**: Roommate, chore, date, mood, reliability
- 🎲 **Generate Button**: Simulate AI message generation
- 💬 **Live Preview**: Styled notification bubble
- 🚀 **Send Action**: Trigger notification
- 🎯 **Mood Adaptation**: Messages change based on house mood

## Mock Data

**3 Roommates:**
- Alex: High reliability (0.85), low stress, dishes expert
- Sam: Very reliable (0.9), high stress (finals mode), light load
- Jordan: Good reliability (0.7), medium stress, high capacity

**6 Chores:**
- Dishes (5 pts)
- Bathroom (7 pts, heavy)
- Vacuuming (6 pts)
- Trash (3 pts)
- Kitchen (8 pts, heavy)
- Laundry (4 pts)

**Weekly Assignments:** Pre-loaded for week of 2025-11-24

## How It Works

### State Management
Uses React Context to manage global state:
```typescript
interface HouseContextType {
  assignments: Assignment[];          // Current week's chores
  houseMood: HouseMood;               // Chill/Busy/Chaos/Drowning/Finals
  setAssignments: (a: Assignment[]) => void;
  updateAssignment: (a: Assignment) => void;
  setHouseMood: (m: HouseMood) => void;
}
```

### Data Types
```typescript
// Roommate: Profile with reliability, stress, capacity
type Roommate = {
  id: string;
  name: string;
  reliability: number;      // 0–1
  stressLevel: number;      // 1–5
  weeklyCapacity: number;   // effort pts
  unavailableDays: string[];
};

// Chore: Task with effort and frequency
type Chore = {
  id: string;
  name: string;
  baseEffort: number;       // 1–10
  grossness: number;        // 1–5
  isHeavy?: boolean;        // >= 7 effort
};

// Assignment: Weekly task assignment
type Assignment = {
  week: string;             // ISO date
  choreId: string;
  assignedTo: string;       // roommate id
  day: string;              // Mon–Sun
  completed: boolean;
  reason?: string;          // AI explanation
};
```

### Mocked AI Features
All "AI" features use simulated delays and predefined responses:

1. **Generate Schedule** (1.5s delay)
   - Adds "[AI-Generated]" prefix to reasons
   - Demonstrates async workflow

2. **Swap Suggestions** (1.5s delay)
   - Returns 2 mock suggestions with reasons
   - Shows fairness-based recommendations

3. **Reminder Text** (1.2s delay)
   - Template-based message generation
   - Adapts tone based on house mood

## Interactivity Demo

✅ **House Mood**: Click buttons to change (affects recommendations)
✅ **Mark Complete**: Hover on cards, click "Done"
✅ **View Reasons**: Click "?" on any chore
✅ **Schedule Generation**: Click "Ask AI..." button (simulated)
✅ **Swap Requests**: Fill form and click "Ask AI for Suggestions"
✅ **Profile Navigation**: Click any roommate card
✅ **Notification Preview**: Select options and generate

## Building & Deployment

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- iOS Safari 15+
- Chrome Mobile 90+

## UI/UX Highlights

🎨 **Design System:**
- Color-coded effort levels (green/yellow/red)
- Gradient backgrounds for visual hierarchy
- Responsive grid layouts
- Smooth hover and transition effects
- Accessible button states
- Dark/light border treatments

📱 **Responsive:**
- Mobile-first design
- Flex/grid layouts
- Touch-friendly buttons
- Stack on small screens

✨ **Interactivity:**
- Loading states with spinners
- Modal popups for details
- Hover effects and transitions
- Click handlers for all actions
- Real-time updates to state

## Future Enhancement Ideas

To make this a production app:

1. **Backend API**
   - Node.js/Express server
   - Real Claude API integration
   - PostgreSQL database
   - Authentication (JWT)

2. **Real Features**
   - Photo uploads for chore proof
   - Push notifications
   - Recurring chore templates
   - Penalty/reward system

3. **Advanced UI**
   - Dark mode toggle
   - Customizable themes
   - Analytics dashboard
   - Mobile app (React Native)

---

**Built during hackathon. All data is mocked, no backend required.**

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
