# PolstarAI Website - Technical Documentation

A modern, animated website showcasing PolstarAI's constellation of intelligent AI agents, with a focus on SamyBear - a child-centred AI companion. Built with React, TypeScript, Vite, and GSAP for premium animations.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Routing](#routing)
- [Key Components](#key-components)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)
- [Code Conventions](#code-conventions)

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18+ (recommended: 20+)
- **Package Manager**: `pnpm` (recommended) or `npm`
- **OS**: Windows, macOS, or Linux

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd "polstar-ai-final Website"

# Install dependencies
pnpm install

# Start development server
pnpm dev

# The app will be available at http://localhost:3001
```

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server (port 3001)
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm start            # Start production server

# Code Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier
```

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3.1** - UI framework
- **TypeScript 5.6.3** - Type safety
- **Vite 7.1.7** - Build tool & dev server
- **Wouter 3.3.5** - Lightweight routing
- **Tailwind CSS 4.1.14** - Utility-first CSS

### Animation Libraries

- **GSAP 3.13.0** - Professional animations
  - ScrollTrigger plugin for scroll-based animations
  - Timeline for complex sequences
- **Framer Motion 12.23.22** - React animations
  - Component transitions
  - AnimatePresence for exit animations

### UI Components

- **Radix UI** - Accessible component primitives
  - Accordion, Dialog, Dropdown, Select, Tabs, etc.
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Backend

- **Express.js** - Node.js server
- **ESBuild** - Fast bundling for server code

## 📁 Project Structure

```
polstar-ai-final Website/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── samybear/      # SamyBear-specific components
│   │   │   ├── ui/            # Reusable UI components (Radix)
│   │   │   └── ...            # Shared components
│   │   ├── pages/             # Page components
│   │   │   ├── SamyBearHome.tsx      # Main SamyBear homepage
│   │   │   ├── PolstarHome.tsx        # Original PolstarAI homepage
│   │   │   ├── AgentSamybear.tsx      # SamyBear detail page
│   │   │   ├── AgentSolaria.tsx       # Solaria detail page
│   │   │   ├── AgentFinsight.tsx      # FinSight detail page
│   │   │   └── AgentLinda.tsx         # Linda detail page
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── useScrollAnimation.tsx
│   │   │   └── usePremiumScrollAnimation.tsx
│   │   ├── constants/         # Constants and configs
│   │   │   └── agentColors.ts # Agent color palettes
│   │   ├── utils/             # Utility functions
│   │   │   └── soundEffects.ts
│   │   ├── contexts/          # React contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx            # Main app component with routing
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── public/                # Static assets
│   │   └── images/
│   │       └── agents/        # Agent images
│   └── index.html             # HTML template
│
├── server/                    # Backend server
│   └── index.ts               # Express server setup
│
├── shared/                    # Shared code
│   └── const.ts              # Shared constants
│
├── dist/                      # Build output
│   ├── index.js              # Bundled server
│   └── public/               # Static assets
│
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies & scripts
└── README.md                 # This file
```

## 🔄 Development Workflow

### Starting Development

1. **Install dependencies** (first time only):
   ```bash
   pnpm install
   ```

2. **Start dev server**:
   ```bash
   pnpm dev
   ```
   - Server runs on `http://localhost:3001` (or next available port)
   - Hot Module Replacement (HMR) enabled
   - Auto-reloads on file changes

3. **Access the application**:
   - Main SamyBear site: `http://localhost:3001/`
   - Original PolstarAI site: `http://localhost:3001/polstar`

### Development Tips

- **Port conflicts**: If port 3001 is busy, Vite will automatically use the next available port
- **Type checking**: Run `pnpm check` to verify TypeScript types
- **Code formatting**: Run `pnpm format` before committing
- **Component structure**: Follow the existing component patterns in `client/src/components`

## 🗺️ Routing

The application uses **Wouter** for client-side routing. Routes are defined in `client/src/App.tsx`:

```typescript
// Main routes
/                    → SamyBearHome (default homepage)
/polstar             → PolstarHome (original PolstarAI site)
/samybear            → SamyBearHome (alternative route)

// Agent detail pages
/agents/samybear     → AgentSamybear
/agents/solaria      → AgentSolaria
/agents/finsight     → AgentFinsight
/agents/linda        → AgentLinda

// Error handling
/404                 → NotFound
```

### Adding New Routes

1. Create page component in `client/src/pages/`
2. Import in `client/src/App.tsx`
3. Add route to `<Switch>` component:

```typescript
<Route path="/new-route" component={NewPage} />
```

## 🧩 Key Components

### Page Components

#### `SamyBearHome.tsx`
Main homepage featuring:
- Hero section (PolstarAI hero)
- Problem section
- Vertical AI Delivers section
- AI Constellation section
- Why Polstar section
- Contact section

#### `AgentSamybear.tsx`
SamyBear detail page with:
- Hero introduction
- Child-Centred by Design (UNICEF Pillars)
- How SamyBear Works (Features)
- Parent Onboarding Experience
- Parent Hub
- Engagement Metrics

### Shared Components

#### `AIConstellationSection.tsx`
Interactive agent carousel with:
- Animated orb/planet effects
- Agent tabs for navigation
- Arrow navigation
- "Learn more" buttons linking to detail pages

#### `ProblemSection.tsx`
2-column layout showing:
- Left: Title and subtitle
- Right: Three problem cards with icons

#### `UNICEFPillarsSection.tsx`
Grid of 9 cards representing UNICEF's requirements for child-centred AI

#### `FeaturesSection.tsx`
Expandable feature cards showing SamyBear capabilities

### Animation Components

#### `Orb.tsx`
Animated 3D-style orb representing agents:
- Breathing animation (8-second cycle)
- Liquid flow effects
- Color transitions between agents
- Sparkle effects

#### `SpaceBackground.tsx`
Animated space background with:
- Stars
- Shooting stars
- Nebula clouds

#### `ScrollStars.tsx`
Scroll-based star movement effects

#### `CursorTrail.tsx`
Cursor trail effect following mouse movement

### Hooks

#### `useScrollAnimation.tsx`
Basic scroll-triggered animations:
```typescript
const ref = useScrollAnimation({ 
  animation: 'fadeInUp', 
  delay: 0.1 
});
```

#### `usePremiumScrollAnimation.tsx`
Premium Apple-style animations with GSAP:
```typescript
const ref = usePremiumScrollAnimation({ 
  animation: 'fadeUp', 
  duration: 1.2,
  stagger: 0.1 
});
```

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS 4.x with utility classes:

```tsx
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
  {/* Content */}
</div>
```

### Custom CSS

Global styles in `client/src/index.css`:
- Custom animations
- Component-specific styles
- Responsive breakpoints

### Color System

Agent colors defined in `client/src/constants/agentColors.ts`:
- **SamyBear**: Purple/Pink (`#A06BFF`, `#FF8BE7`, `#FFC8FF`)
- **Solaria**: Coral (`#FF8C73`, `#FF4F5E`, `#FFB8A8`)
- **FinSight**: Blue (`#4B82F2`, `#6AD1F8`, `#A9C9FF`)
- **Linda**: Yellow/Gold (pricing agent)

## 🔨 Build & Deployment

### Production Build

```bash
# Build both client and server
pnpm build

# Output:
# - dist/public/     → Client static files
# - dist/index.js    → Server bundle
```

### Production Server

```bash
# Start production server
pnpm start

# Or manually:
NODE_ENV=production node dist/index.js
```

### Build Process

1. **Client build**: Vite bundles React app to `dist/public/`
2. **Server build**: ESBuild bundles Express server to `dist/index.js`
3. **Static assets**: Copied from `client/public/` to `dist/public/`

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=production
PORT=3000
```

## 🐛 Troubleshooting

### Port Already in Use

**Problem**: Port 3001 is already in use

**Solution**:
```bash
# Windows (PowerShell)
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3001 | xargs kill -9
```

Or let Vite use the next available port (it does this automatically).

### TypeScript Errors

**Problem**: Type errors in IDE

**Solution**:
```bash
# Check types
pnpm check

# Restart TypeScript server in IDE
# VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Build Failures

**Problem**: Build fails with errors

**Solution**:
```bash
# Clear cache and rebuild
rm -rf node_modules dist
pnpm install
pnpm build
```

### Hot Reload Not Working

**Problem**: Changes not reflecting in browser

**Solution**:
1. Check browser console for errors
2. Hard refresh: `Cmd/Ctrl + Shift + R`
3. Restart dev server: `pnpm dev`

### Animation Issues

**Problem**: Animations not working

**Solution**:
1. Check GSAP ScrollTrigger registration in component
2. Verify `ScrollTrigger.refresh()` is called after mount
3. Check browser console for GSAP errors

## 📝 Code Conventions

### File Naming

- **Components**: PascalCase (e.g., `SamyBearHome.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollAnimation.tsx`)
- **Utils**: camelCase (e.g., `soundEffects.ts`)
- **Constants**: camelCase (e.g., `agentColors.ts`)

### Component Structure

```typescript
// 1. Imports
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// 2. Types/Interfaces (if needed)
interface Props {
  title: string;
}

// 3. Component
export default function ComponentName({ title }: Props) {
  // 4. Hooks
  const ref = useScrollAnimation({ animation: 'fadeUp' });
  
  // 5. State
  const [state, setState] = useState();
  
  // 6. Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // 7. Handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // 8. Render
  return (
    <div ref={ref}>
      {/* JSX */}
    </div>
  );
}
```

### Import Order

1. React and React hooks
2. Third-party libraries
3. Internal components
4. Hooks
5. Utils
6. Types/Constants
7. Styles

### TypeScript

- Use TypeScript for all new files
- Define interfaces for component props
- Avoid `any` type - use `unknown` if needed
- Use type inference where possible

### Styling Guidelines

- Prefer Tailwind utility classes
- Use custom CSS only when necessary
- Maintain consistent spacing (4px grid)
- Use semantic color names from Tailwind

## 🔍 Common Tasks

### Adding a New Section

1. Create component in `client/src/components/`
2. Import in page component (`SamyBearHome.tsx` or `PolstarHome.tsx`)
3. Add section with proper spacing and background effects
4. Add scroll animations using hooks

### Modifying Agent Colors

Edit `client/src/constants/agentColors.ts`:

```typescript
export const agentColors = {
  education: {
    primary: '#A06BFF',
    secondary: '#FF8BE7',
    // ...
  },
  // ...
};
```

### Adding a New Agent

1. Add agent to `AgentsCarousel.tsx`:
```typescript
const agents: Agent[] = [
  // ... existing agents
  {
    name: 'New Agent',
    key: 'newagent',
    displayName: 'NewAgent',
    description: 'Agent description',
    route: '/agents/newagent',
  },
];
```

2. Create detail page: `client/src/pages/AgentNewagent.tsx`
3. Add route in `App.tsx`
4. Add colors to `agentColors.ts`

### Updating Content

- **Text content**: Edit component files directly
- **Images**: Add to `client/public/images/` and reference with `/images/...`
- **Styling**: Modify Tailwind classes or `index.css`

## 📚 Additional Resources

### Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Wouter Router](https://github.com/molefrog/wouter)

### Project-Specific

- Agent color palettes: `client/src/constants/agentColors.ts`
- Animation hooks: `client/src/hooks/`
- Component examples: `client/src/components/`

## 🤝 Contributing

### Before Committing

1. Run type check: `pnpm check`
2. Format code: `pnpm format`
3. Test in browser: `pnpm dev`
4. Verify build: `pnpm build`

### Git Workflow

1. Create feature branch from `main`
2. Make changes
3. Test thoroughly
4. Commit with descriptive messages
5. Push and create pull request

## 📞 Support

For technical issues or questions:
- Check this README first
- Review component code for examples
- Check browser console for errors
- Review build output for warnings

---

**Last Updated**: 2024
**Maintained by**: PolstarAI Tech Team
