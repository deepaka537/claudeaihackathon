# 🎮 ChoreSense: Interactive Walkthrough

## Getting Started (Right Now!)

### Step 1: Open the App
The app is already running at: **http://localhost:5173**

### Step 2: You'll See
- Beautiful header with "ChoreSense" logo
- Navigation menu with 5 links
- Dashboard content below

---

## 🏠 Dashboard Tour (/)

### What You See
- **House Vibe Card** - Top left, shows house stress level
- **House Mood Selector** - Top right, 5 colored mood buttons
- **Weekly Chore Overview** - Grid showing all tasks by day
- **Fairness Chart** - Effort distribution per roommate
- **Upcoming Chores** - Next 5 tasks to complete
- **AI Insights** - Smart recommendation box

### Try This
1. **Change the mood** - Click different mood buttons
   - Notice the vibe card changes color
   - "Drowning" mode = red and warning
   - "Chill" mode = green and relaxed

2. **View the fairness chart** - Right sidebar
   - Green bars = good load
   - Yellow bars = approaching capacity
   - Red bars = overloaded

3. **Check upcoming tasks** - Lower right box
   - Shows next 5 chores
   - Click to see details (coming soon)

---

## 📅 Schedule Tour (/schedule)

### What You See
- **7-day grid** - Mon through Sun columns
- **Chore cards** - Each chore in a colored box
- **Effort badges** - Yellow badge shows effort points
- **Roommate avatars** - Small profile picture on each card
- **"Ask AI" button** - Top right to generate schedule

### Try This
1. **Hover on a card** - See "Done" button appear
   - Click it to mark complete
   - Card gets a checkmark

2. **Click the "?" button** - Opens "Why Me?" modal
   - Shows AI reasoning
   - Displays roommate stats
   - Explains fairness logic
   - Close with "Got it" button

3. **Click "Ask AI..." button** - Simulates schedule generation
   - Shows loading spinner
   - Takes 1.5 seconds
   - Updates reasons with [AI-Generated]

---

## 🔄 Swap Tour (/swap)

### What You See
- **Configuration panel** - Left side
  - Roommate dropdown
  - Chore selector
  - Current assignment info

- **Suggestions panel** - Right side
  - Shows AI suggestions
  - Displays reasoning
  - Apply buttons

### Try This
1. **Select a roommate** - From dropdown (Alex, Sam, or Jordan)

2. **Select a chore** - Pick from their assignments
   - Shows current effort
   - Shows assignee
   - Shows day

3. **Click "Ask AI..."** - Gets suggestions
   - Shows loading spinner (1.5s)
   - Returns 2 swap options
   - Each has a reason
   - Shows who gets what

4. **Click "Apply This Swap"** - Updates schedule
   - Changes take effect
   - Can go back to Schedule to see

---

## 👥 Roommates Tour (/roommates)

### What You See
- **3 roommate cards** - In a grid
- **Stats on each card:**
  - Avatar and name
  - Reliability bar (%)
  - Stress dots (1-5)
  - Weekly capacity
  - Mood emoji

### Try This
1. **Click any card** - Goes to profile page
   - See more detailed info
   - See this week's chores
   - See past 4 weeks trend
   - See preferred chores
   - See unavailable days

2. **Explore each roommate:**
   - **Alex** - High reliability, low stress
   - **Sam** - Very reliable, high stress (finals)
   - **Jordan** - Good reliability, highest capacity

3. **Go back** - Navigation breadcrumb at top

---

## 👤 Roommate Detail Tour (/roommates/:id)

### What You See
- **Profile header** - Avatar, name, mood emoji
- **Stats dashboard** - 4 boxes with key metrics
  - Reliability percentage
  - Stress level (1-5)
  - Weekly capacity (points)
  - This week's effort total

- **This week section** - Assigned chores list
  - Chore name
  - Day assigned
  - Effort points

- **Historical graph** - Past 4 weeks
  - Visual bars showing trend
  - Average calculation
  - Effort consistency

- **Preferences** - Favorite chores
  - Tagged items

### Try This
1. **View metrics** - See color-coded stats
2. **Check chores** - See assigned tasks
3. **Track trends** - See historical effort
4. **Note preferences** - See likes/dislikes
5. **Back link** - Return to roommates list

---

## 🔔 Notifications Tour (/notifications-demo)

### What You See
- **Config panel** - Left side with form
  - Roommate dropdown
  - Chore selector
  - Date picker
  - House mood selector
  - Reliability slider

- **Preview panel** - Right side
  - Shows generated message
  - Displays details
  - Send button

### Try This
1. **Select roommate** - Dropdown (Alex, Sam, Jordan)

2. **Select chore** - Pick from available chores

3. **Set date** - Pick a date

4. **Choose house mood** - 5 options
   - Notice how mood changes message tone
   - Finals = more supportive
   - Drowning = more caring

5. **Adjust reliability** - Slider 0-100%

6. **Click "Generate"** - Creates message
   - Shows loading spinner (1.2s)
   - Displays generated text
   - Shows message metadata

7. **Read the preview** - Notice tone adaptation
   - Different messages for different moods
   - Personalized to roommate

---

## 🎯 Key Interactions to Try

### Interaction 1: State Persistence
1. Go to Dashboard
2. Click mood button (e.g., "Finals Mode")
3. Navigate to Schedule
4. Notice mood indicator still shows selected mood
5. Navigate to Swap
6. Mood persists across pages

### Interaction 2: Real-time Updates
1. Go to Dashboard
2. Check fairness chart
3. Go to Schedule
4. Mark several chores as complete
5. Go back to Dashboard
6. Notice chart has NOT changed (completion is session-only)

### Interaction 3: Modal Experience
1. Go to Schedule
2. Click "?" on any chore
3. Modal opens with explanation
4. Read the reasoning
5. Click "Got it" to close
6. Notice page still shows

### Interaction 4: Form Validation
1. Go to Swap
2. Try selecting chore without roommate (disabled)
3. Select roommate first
4. Now chore dropdown enables
5. Select chore
6. Button becomes enabled

### Interaction 5: Loading States
1. Go to Schedule
2. Click "Ask AI to Generate Schedule"
3. Watch spinner animate
4. Wait 1.5 seconds
5. Notice schedule updates

---

## 💡 What to Look For

### UI Polish
- ✅ Smooth hover effects
- ✅ Color transitions
- ✅ Proper spacing
- ✅ Clean typography
- ✅ Responsive layout
- ✅ Consistent styling

### Interaction Quality
- ✅ Buttons feel responsive
- ✅ Forms work smoothly
- ✅ Modals are clean
- ✅ Loaders provide feedback
- ✅ State updates instantly
- ✅ Navigation is smooth

### Data Display
- ✅ Information clearly organized
- ✅ Numbers make sense
- ✅ Colors are meaningful
- ✅ Icons help understanding
- ✅ Avatars personalize
- ✅ Charts are readable

---

## 🎨 Design Elements to Notice

### Color System
- **Green** (60) - Light/easy tasks
- **Yellow** (100) - Medium tasks
- **Red** (150) - Heavy/hard tasks
- **Blue** (600) - Primary actions
- **Purple** (600) - AI/special actions

### Typography
- **Headers** - Bold, 2xl-4xl
- **Labels** - Medium, gray-700
- **Body** - Regular, gray-600
- **Caps** - Uppercase, small, subtle

### Spacing
- **Padding** - Consistent p-2, p-4, p-6
- **Gaps** - Consistent gap-2, gap-4, gap-6
- **Margins** - Consistent mb-4, mb-8

### Effects
- **Hover** - Slight lift and shadow
- **Focus** - Blue ring
- **Transition** - Smooth 200-300ms
- **Animation** - Gentle fade/slide

---

## 📱 Test Responsive Design

### Desktop (Full Experience)
1. Open http://localhost:5173
2. See full multi-column layout
3. All sidebars visible
4. Grid shows all columns

### Tablet (Medium Screen)
1. Press F12 to open DevTools
2. Click responsive mode
3. Set to iPad (768px)
4. Notice layout adapts
5. Sidebars stack
6. Grid might overflow

### Mobile (Small Screen)
1. Set to iPhone 12 (390px)
2. See vertical stack
3. Full-width content
4. Touch-friendly buttons
5. Single column layout

---

## 🔍 Debug Mode Tips

### Open Console
- Press F12 (Windows) or Cmd+Option+I (Mac)
- See no red errors (should be clean)
- Check Network tab for requests

### React DevTools
- Install browser extension
- Click React tab
- Inspect component tree
- See props and state

### Performance
- Open DevTools
- Go to Performance tab
- Click record
- Do some interactions
- Stop and analyze
- Should be fast (<500ms)

---

## 🎓 What to Learn

### React Patterns
- See functional components
- Notice hooks usage
- Check context implementation
- See props flow

### TypeScript
- Notice type safety
- See interface usage
- Check type inference
- Look at generics

### Tailwind CSS
- Observe utility classes
- See responsive design
- Notice color system
- Check spacing system

### Component Design
- See reusability
- Notice composition
- Check prop interfaces
- Look at state management

---

## 🚀 Next: Try the Features

### Feature Deep Dive

#### 1. Mark Chores Complete
- Go to Schedule
- Hover on any card
- Click "Done"
- See checkmark
- Notice visual feedback

#### 2. Understand Fairness
- Go to Dashboard
- Look at chart
- Each bar = person
- Height = effort load
- Color = capacity status

#### 3. Get AI Reasoning
- Go to Schedule
- Click "?" on any card
- See explanation
- Notice stats displayed
- Understand fairness logic

#### 4. Make Swaps
- Go to Swap
- Pick roommate and chore
- Get suggestions
- Apply one
- See change

#### 5. View Profiles
- Go to Roommates
- Click a card
- See full details
- View trends
- Check preferences

---

## 📊 Data to Examine

### Roommates
- **Alex** - Reliable, low stress, dishes expert
- **Sam** - Very reliable, high stress, finals mode
- **Jordan** - Good reliability, highest capacity

### Chores
- **Dishes** - 5 effort (easy)
- **Bathroom** - 7 effort (heavy ⚠️)
- **Vacuuming** - 6 effort (medium)
- **Trash** - 3 effort (very easy)
- **Kitchen** - 8 effort (heavy ⚠️)
- **Laundry** - 4 effort (easy)

### Week
- **Date** - 2025-11-24 (Nov 24 - Nov 30)
- **Assignments** - 6 chores across 7 days
- **Effort Distribution** - Balanced across roommates

---

## ✅ Quality Checklist

### Visual Quality
- ✅ No layout breaks
- ✅ Consistent styling
- ✅ Professional appearance
- ✅ Readable text
- ✅ Clear hierarchy
- ✅ Smooth animations

### Functional Quality
- ✅ All buttons work
- ✅ Forms submit
- ✅ Navigation works
- ✅ State updates
- ✅ Modals open/close
- ✅ Data displays

### Code Quality
- ✅ No console errors
- ✅ No TypeScript errors
- ✅ Clean component structure
- ✅ Proper state management
- ✅ Good naming
- ✅ Clear organization

---

## 🎉 Congratulations!

You've now explored:
- ✅ All 6 pages
- ✅ All 12 components
- ✅ All interactive features
- ✅ Design system
- ✅ Data model
- ✅ State management

**You understand ChoreSense!** 🏠✨

---

## 🚀 What's Next?

### Option 1: Extend It
- Add new roommates
- Add new chores
- Modify mock data
- Change styling
- Add new pages

### Option 2: Deploy It
- Run `npm run build`
- Deploy to Vercel/Netlify
- Share with others
- Get feedback

### Option 3: Learn From It
- Study component patterns
- Learn React hooks
- Understand TypeScript
- Master Tailwind CSS
- See state management

### Option 4: Backend It
- Add Express server
- Connect Claude API
- Add database
- Add authentication
- Go production

---

**Happy exploring! 🎉**

Start at http://localhost:5173 and have fun! 🏠✨
