# ChoreSense: Common Tasks & Troubleshooting

## 🎬 Getting Started Fast

### First 5 Minutes
```bash
cd /Users/mbpro13/Documents/hackathon
npm install
npm run dev
# Open http://localhost:5173
```

### First 5 Actions
1. Click mood buttons on Dashboard to change house vibe
2. Go to Schedule and hover on chore cards
3. Click "?" on a card to see AI reasoning
4. Click "Done" to mark a chore complete
5. Visit Roommates and click a profile card

---

## 📝 Common Tasks

### Task 1: Add a New Roommate

**Edit `src/data/mockData.ts`:**

```typescript
export const mockRoommates: Roommate[] = [
  // ... existing roommates ...
  {
    id: "casey",
    name: "Casey",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=casey",
    reliability: 0.8,
    stressLevel: 2,
    weeklyCapacity: 18,
    unavailableDays: ["Wed"],
    preferredChores: ["laundry"],
    moodTag: "chill",
  },
];
```

**Then add assignments:**
```typescript
export const mockAssignments: Assignment[] = [
  // ... existing ...
  {
    week: "2025-11-24",
    choreId: "dishes",
    assignedTo: "casey",
    day: "Tue",
    completed: false,
    reason: "Casey prefers morning chores",
  },
];
```

Save and refresh browser—new roommate appears everywhere!

### Task 2: Add a New Chore

**Edit `src/data/mockData.ts`:**

```typescript
export const mockChores: Chore[] = [
  // ... existing chores ...
  {
    id: "windows",
    name: "Clean Windows",
    description: "Clean all interior windows",
    baseEffort: 7,
    grossness: 2,
    minFrequencyWeeks: 4,
    preferredDay: "Sat",
    isHeavy: true,
  },
];
```

**Add assignments:**
```typescript
{
  week: "2025-11-24",
  choreId: "windows",
  assignedTo: "jordan",
  day: "Sat",
  completed: false,
  reason: "Jordan requested this task",
}
```

Refresh—new chore appears in schedules and selectors!

### Task 3: Change House Rules

**Edit `src/data/mockData.ts`:**

```typescript
export const mockHouseRules: HouseRules = {
  maxEffortSpread: 5,          // Max 5 point difference
  avoidRepeatHeavy: true,       // No back-to-back heavy chores
  maxHeavyPerWeek: 1,           // Only 1 heavy chore per person
};
```

This affects AI reasoning (visible in modals).

### Task 4: Change Initial House Mood

**Edit `src/data/mockData.ts`:**

```typescript
export const mockHouseState: HouseState = {
  houseMood: "finals",  // Start with Finals Mode
  lastUpdated: new Date().toISOString(),
};
```

Then in `src/context/HouseContext.tsx`:

```typescript
const [houseMood, setHouseMood] = useState<HouseMood>("finals");  // Changed default
```

### Task 5: Update Roommate Avatars

Use any image URL:

```typescript
{
  id: "alex",
  name: "Alex",
  avatarUrl: "https://your-image-host.com/alex.jpg",  // Your own image
  // ...
}
```

Or use DiceBear with custom seeds:
```typescript
avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&style=circle",
```

---

## 🎨 Styling Customizations

### Change Primary Color (Blue → Purple)

**In components, replace:**
```typescript
// Before
className="bg-blue-600 text-white"

// After
className="bg-purple-600 text-white"
```

Or globally in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#9333ea', // purple-600
      }
    }
  }
}
```

### Change Effort Colors

**In `src/components/AssignmentCard.tsx`:**

```typescript
const effortColor =
  chore.baseEffort <= 3
    ? "bg-blue-100 text-blue-800"        // Changed from green
    : chore.baseEffort <= 6
      ? "bg-green-100 text-green-800"    // Changed from yellow
      : "bg-orange-100 text-orange-800"; // Changed from red
```

### Add Dark Mode

**Create `src/hooks/useDarkMode.ts`:**
```typescript
export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('dark') === 'true'
  );
  
  return { isDark, setIsDark };
}
```

Use in components:
```typescript
className={isDark ? "bg-gray-900 text-white" : "bg-white"}
```

---

## 🐛 Troubleshooting

### Issue: App Won't Start
**Error:** `npm: command not found`

**Solution:** Install Node.js from https://nodejs.org

```bash
node -v  # Should show v16+
npm -v   # Should show v8+
```

### Issue: Blank Page
**Symptom:** Browser shows blank screen

**Solution:**
1. Check browser console (F12) for errors
2. Check terminal for build errors
3. Try hard refresh (Cmd+Shift+R)
4. Restart dev server

```bash
npm run dev
```

### Issue: Styles Not Applied
**Symptom:** Tailwind classes not showing

**Solution 1:** Rebuild Tailwind
```bash
rm -rf node_modules/.vite
npm run dev
```

**Solution 2:** Check config paths in `tailwind.config.js`
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",  // Must match your files
]
```

### Issue: Components Not Rendering
**Symptom:** Page appears but components missing

**Solution:** Check imports in `App.tsx`
```typescript
import { DashboardPage } from "./pages/DashboardPage";  // Correct path
```

### Issue: State Not Updating
**Symptom:** Click button but nothing happens

**Solution:** Ensure using context hook
```typescript
import { useHouse } from "../context/HouseContext";

export function MyComponent() {
  const { houseMood, setHouseMood } = useHouse();  // Get context
  // ...
}
```

### Issue: Navigation Broken
**Symptom:** Links don't work or page doesn't load

**Solution:** Check React Router setup in `App.tsx`
```typescript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/schedule" element={<SchedulePage />} />
    {/* All routes must be defined */}
  </Routes>
</BrowserRouter>
```

### Issue: TypeScript Errors
**Symptom:** Red squiggles in editor

**Solution 1:** Run type check
```bash
npx tsc --noEmit
```

**Solution 2:** Fix imports for types
```typescript
import type { Roommate } from "../types";  // Use 'type' keyword
```

---

## 🔍 Debugging Tips

### Check Browser Console
```bash
# Open DevTools: F12 (Windows) or Cmd+Option+I (Mac)
# Look for red errors
# Check Network tab for failed requests
```

### Enable React DevTools
1. Install React DevTools browser extension
2. Open DevTools
3. Check component tree
4. Inspect component props and state

### Check Network
1. Open DevTools → Network tab
2. Click buttons
3. Watch for API calls (none should show since no backend)
4. Check for 404 errors

### Print Debugging
```typescript
console.log("Assignment:", assignment);
console.log("Roommates:", roommates);
console.log("Current mood:", houseMood);
```

---

## 📦 Deployment

### Deploy to Vercel (Free, Fast)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
# Select "Y" for Connect to Git
# Choose GitHub, GitLab, or Bitbucket
# Deploy

# Your app is now live!
```

### Deploy to Netlify (Free, Easy)

```bash
# 1. Build
npm run build

# 2. Drag dist/ folder to https://netlify.app/drop
# Done! Live URL appears

# Or use Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

**In `package.json`:**
```json
"homepage": "https://yourusername.github.io/choresense",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 🔌 Backend Integration

### Step 1: Create Backend

**Create `server/index.ts`:**
```typescript
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
app.use(express.json());

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

app.post('/api/generate-schedule', async (req, res) => {
  try {
    const { roommates, chores, history, houseMood } = req.body;
    
    const prompt = `
      You are a household chore scheduler. Create a fair weekly schedule:
      Roommates: ${JSON.stringify(roommates)}
      Chores: ${JSON.stringify(chores)}
      House Mood: ${houseMood}
      
      Return JSON with schedule array and fairness notes.
    `;
    
    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });
    
    res.json(message.content);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(3001, () => console.log('Server ready on :3001'));
```

**Create `server/package.json`:**
```json
{
  "name": "choresense-server",
  "type": "module",
  "scripts": {
    "dev": "node --loader ts-node/esm index.ts",
    "start": "node dist/index.js",
    "build": "tsc"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "latest"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "ts-node": "^10.9.0"
  }
}
```

### Step 2: Update Frontend

**In `src/pages/SchedulePage.tsx`:**

```typescript
const handleGenerateSchedule = async () => {
  setIsGenerating(true);
  try {
    const response = await fetch('http://localhost:3001/api/generate-schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        roommates: mockRoommates,
        chores: mockChores,
        history: mockHistoricalEffort,
        houseMood: houseMood
      })
    });
    
    const result = await response.json();
    // Update assignments with real AI result
    setAssignments(result.schedule);
  } finally {
    setIsGenerating(false);
  }
};
```

### Step 3: Environment Variables

**Create `.env` in root:**
```bash
VITE_API_URL=http://localhost:3001
ANTHROPIC_API_KEY=sk-ant-...
```

**Use in frontend:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📊 Performance Optimization

### Monitor Performance
```bash
npm run build
# Check dist/ size
```

### Reduce Bundle Size
```typescript
// Don't import unused components
import { AssignmentCard } from "../components/AssignmentCard";  // ✓ Used
// import { UnusedComponent } from "../components/Unused";      // ✗ Remove
```

### Enable Compression
```typescript
// In server, if added
import compression from 'compression';
app.use(compression());
```

---

## 🧪 Testing

### Run Tests (if added)
```bash
npm test
```

### Add Testing Example

**Create `src/components/__tests__/RoommateCard.test.tsx`:**
```typescript
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RoommateCard } from '../RoommateCard';
import { mockRoommates } from '../../data/mockData';

test('renders roommate name', () => {
  render(
    <BrowserRouter>
      <RoommateCard roommate={mockRoommates[0]} />
    </BrowserRouter>
  );
  expect(screen.getByText('Alex')).toBeInTheDocument();
});
```

---

## 📚 Resources & Links

### Documentation
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs/
- Tailwind: https://tailwindcss.com/docs
- React Router: https://reactrouter.com/docs
- Vite: https://vitejs.dev/guide/

### Tools
- VS Code: https://code.visualstudio.com
- TypeScript Playground: https://www.typescriptlang.org/play
- Tailwind Docs: https://tailwindcss.com/docs

### APIs
- Anthropic Claude: https://docs.anthropic.com
- DiceBear Avatars: https://www.dicebear.com

### Deployment
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- GitHub Pages: https://pages.github.com

---

## ✅ Pre-Launch Checklist

- [ ] All components render without errors
- [ ] Navigation works (all links functional)
- [ ] House mood selector updates state
- [ ] "Mark complete" works
- [ ] "Why Me?" modal opens and displays
- [ ] Swap suggestions generate (simulated)
- [ ] Roommate profiles load correctly
- [ ] Notifications generate messages
- [ ] Responsive design works on mobile
- [ ] No console errors (F12)
- [ ] TypeScript builds successfully (`npm run build`)
- [ ] README and docs are up to date

---

**Questions? Check COMPONENTS.md and IMPLEMENTATION_GUIDE.md for more details!** 🚀
