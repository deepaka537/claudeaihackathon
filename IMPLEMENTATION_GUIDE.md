# ChoreSense Implementation Guide

## Overview

**ChoreSense** is a complete, functional UI prototype for a roommate chore scheduling app built with React, TypeScript, and Tailwind CSS. All features are interactive and use mock data—no backend required to demo.

## ✨ What You Get

A fully working web app with:
- 6 complete pages with React Router navigation
- 12 reusable React components
- Full TypeScript type safety
- Tailwind CSS styling
- React Context state management
- Mock data for 3 roommates and 6 chores
- Interactive features (modals, buttons, forms, etc.)
- Responsive design

## 🚀 Quick Start

```bash
# 1. Navigate to project
cd /Users/mbpro13/Documents/hackathon

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# App is available at http://localhost:5173
```

## 📱 Pages to Explore

### 1. Dashboard (Home)
**URL:** `http://localhost:5173/`

What to do:
- View the weekly chore overview grid
- See the house vibe (based on roommate stress levels)
- Check the fairness chart showing effort distribution
- Click the house mood buttons (Chill, Busy, Chaos, Drowning, Finals) to change the vibe
- Read AI insights at the bottom

### 2. Schedule
**URL:** `http://localhost:5173/schedule`

What to do:
- See the full 7-day grid with assignments
- Hover over any chore card and click "Done" to mark it complete
- Click the "?" button on any card to see the "Why Me?" explanation
- Click "Ask AI to Generate Schedule" to simulate AI schedule generation
- Watch the fairness chart update in real-time

### 3. Swap
**URL:** `http://localhost:5173/swap`

What to do:
- Select a roommate from dropdown
- Select one of their chores to swap
- Click "Ask AI for Fair Swap Suggestions"
- See 2 AI-generated swap options with reasoning
- Click "Apply This Swap" to accept

### 4. Roommates
**URL:** `http://localhost:5173/roommates`

What to do:
- View 3 roommate cards with their stats
- See reliability score, stress level, and weekly capacity
- Click any card to view their full profile

### 5. Roommate Detail
**URL:** `http://localhost:5173/roommates/alex` (or `/sam` or `/jordan`)

What to do:
- View complete roommate profile
- See stats dashboard (reliability %, stress, capacity, this week's effort)
- Check this week's assigned chores
- View historical trend (past 4 weeks)
- See preferred chores
- View swap history

### 6. Notifications Demo
**URL:** `http://localhost:5173/notifications-demo`

What to do:
- Configure: Select roommate, chore, date, house mood, reliability
- Click "Generate Reminder Text"
- See AI-generated notification message in preview
- Message tone adapts based on house mood selected

## 🎯 Key Features to Test

### Feature 1: House Mood System
- Go to Dashboard
- Click different mood buttons (😁 Chill, 🤪 Busy, etc.)
- Notice how it changes the vibe indicator
- Go to Notifications Demo and generate text for different moods
- See how messages adapt (e.g., Finals mode = more supportive)

### Feature 2: Interactive Schedule
- Go to Schedule page
- **Hover** on any chore card
- Click "Done" to mark complete (card will show checkmark)
- Click "?" to see why that person was assigned
- Notice the "Why Me?" modal shows reasoning

### Feature 3: Fairness Tracking
- Go to Dashboard or Schedule
- Look at the Fairness Chart on the right
- Notice bars colored: Green (light), Yellow (medium), Red (overload)
- Values show effort points vs. weekly capacity
- Helps visualize fair distribution

### Feature 4: AI Suggestions
- Go to Swap page
- Select "Alex" as roommate
- Select "Dishes (Mon)"
- Click "Ask AI for Fair Swap Suggestions"
- See 2 suggestions with reasons
- Click "Apply This Swap" to update

### Feature 5: Roommate Profiles
- Go to Roommates page
- Click any roommate card
- See full profile with stats
- View this week's chores and effort total
- See past 4 weeks trend graph
- Check preferred chores and unavailable days

## 📊 Mock Data

### Roommates
1. **Alex** - High reliability (85%), low stress, likes dishes
2. **Sam** - Very reliable (90%), high stress (finals mode), lighter load
3. **Jordan** - Good reliability (70%), medium stress, high capacity

### Chores
- Dishes (5 effort)
- Bathroom (7 effort, heavy ⚠️)
- Vacuuming (6 effort)
- Trash (3 effort)
- Kitchen (8 effort, heavy ⚠️)
- Laundry (4 effort)

### Week
- Week of 2025-11-24 (Mon-Sun)
- 6 assignments distributed across week
- Each has AI reasoning

## 🛠️ Technical Details

### Architecture
```
App (with React Router)
├── HouseProvider (Context)
│   ├── Dashboard
│   ├── Schedule
│   ├── Swap
│   ├── Roommates
│   ├── Roommate Detail
│   └── Notifications Demo
└── Header (with navigation)
```

### State Management
```typescript
// Global state in HouseContext
{
  assignments: Assignment[];           // Current chores
  houseMood: HouseMood;                 // Chill/Busy/Chaos/Drowning/Finals
  updateAssignment(assignment);         // Update single assignment
  setAssignments(assignments);          // Replace all
  setHouseMood(mood);                   // Change mood
}
```

### Key Components
- `AssignmentCard` - Individual chore card with info
- `ScheduleGrid` - 7-day layout
- `FairnessChart` - Effort bars
- `WhyMeModal` - Explanation popup
- `SwapSuggestionList` - AI suggestions
- `RoommateCard` - Profile preview

## 🔧 Customization

### Change Mock Data
Edit `src/data/mockData.ts`:
```typescript
export const mockRoommates: Roommate[] = [
  // Add/edit roommates here
];

export const mockChores: Chore[] = [
  // Add/edit chores here
];

export const mockAssignments: Assignment[] = [
  // Edit weekly schedule here
];
```

### Add New Page
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```typescript
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add link in `src/components/Header.tsx`

### Change Colors
Edit `tailwind.config.js` or add utility classes directly in components.

## 📋 Checklist: What Works

✅ All 6 pages render and navigate correctly
✅ All 12 components display properly
✅ House mood selector changes state
✅ "Mark complete" updates assignments
✅ "Why Me?" modal shows explanation
✅ AI simulation with loading states
✅ Fairness chart updates in real-time
✅ Roommate detail pages show data
✅ Notification generator creates messages
✅ All buttons and forms functional
✅ Responsive on mobile/tablet/desktop
✅ No console errors
✅ TypeScript strict mode passing

## 🎨 Design Highlights

- **Color Coding**: Effort levels (green/yellow/red)
- **Avatars**: DiceBear auto-generated avatars for roommates
- **Emojis**: Mood indicators (😁🤪😤🥵🤯)
- **Icons**: Lucide React icons for visual interest
- **Gradients**: Modern gradient backgrounds
- **Shadows**: Hover effects and depth
- **Responsive**: Adapts to all screen sizes

## 🔌 Ready for Backend

To add real functionality:

### Step 1: Create Backend
```typescript
// server/index.ts
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

app.post('/api/generate-schedule', async (req, res) => {
  const { roommates, chores, history, houseMood } = req.body;
  
  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `Fair chore schedule prompt...${JSON.stringify({
        roommates, chores, history, houseMood
      })}`
    }]
  });
  
  res.json({ schedule: message.content });
});
```

### Step 2: Update Frontend
```typescript
// In SchedulePage.tsx
const response = await fetch('/api/generate-schedule', {
  method: 'POST',
  body: JSON.stringify({ roommates, chores, history, houseMood })
});
```

### Step 3: Add Environment Variables
```bash
# .env
ANTHROPIC_API_KEY=sk-ant-...
```

## 📚 File Guide

| File | Purpose |
|------|---------|
| `src/App.tsx` | Router setup |
| `src/context/HouseContext.tsx` | Global state |
| `src/types/index.ts` | TypeScript types |
| `src/data/mockData.ts` | Mock data |
| `src/components/*.tsx` | UI components |
| `src/pages/*.tsx` | Page components |
| `tailwind.config.js` | Tailwind config |

## 🚨 Troubleshooting

**App won't start:**
```bash
npm install
npm run dev
```

**Styling looks broken:**
- Check `tailwind.config.js` has correct content paths
- Check `src/index.css` imports `@tailwind` directives
- Clear browser cache

**TypeScript errors:**
```bash
npm run lint
```

**Want to build for production:**
```bash
npm run build
# Output in dist/
```

## 🎓 Learning Resources

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com
- **Vite**: https://vitejs.dev

## 🎉 Next Steps

1. **Demo the App**
   - Show Dashboard's fairness visualization
   - Demo the Schedule with "Why Me?" modal
   - Test Swap suggestions
   - View Roommate profiles

2. **Customize**
   - Edit mock data for your house
   - Change colors/styling
   - Add more pages/features

3. **Deploy**
   - `npm run build` to create dist folder
   - Deploy to Vercel, Netlify, or your server
   - Add backend for real AI integration

4. **Extend**
   - Add database persistence
   - Implement authentication
   - Connect real LLM API
   - Add photo uploads
   - Mobile app version

---

**ChoreSense is ready to demo and extend!** 🏠✨

Questions? Check `README.md` or `BUILD_SUMMARY.md` for more details.
