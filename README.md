# PolstarAI Website

A premium, cinematic website showcasing PolstarAI's constellation of intelligent AI agents. Built with modern web technologies and featuring sophisticated animations, interactive elements, and a unique visual identity.

## 🌟 Overview

This website represents PolstarAI's brand through a carefully crafted user experience that combines:
- **Premium animations** inspired by Apple, Otter.ai, Reka, Vapi, and Perplexity
- **Interactive constellation identity** that creates visual uniqueness
- **Smooth scroll interactions** for a cinematic feel
- **Living, breathing orb animations** that serve as the brand-defining element

## ✨ Key Features

### 1. AI Agent Carousel with Animated Orb

The centerpiece of the website is an interactive carousel showcasing 5 AI agents, each with its own animated orb.

#### Orb Animation Features:
- **Living, Breathing Animation**: Deep 8-second breathing cycle (1.00 → 1.08 scale)
- **Liquid Flow Effects**: Continuous, organic liquid-like surface animations
- **Intelligent Micro-movements**: Subtle position shifts that suggest awareness
- **Surface Ripples**: Liquid surface tension effects with rotating gradients
- **Multi-layered Depth**: Multiple gradient layers creating 3D-like depth
- **Color Crossfade**: Smooth 1500ms transitions between agent color palettes
- **Sparkle Effects**: 12 sparkles orbiting around the orb

#### Agent Color Palettes:
- **Solaria** (Hospitality): Warm coral (`#FF8C73`, `#FF4F5E`, `#FFB8A8`)
- **FinSight** (Financial): Financial blue (`#4B82F2`, `#6AD1F8`, `#A9C9FF`)
- **SamyBear** (Learning): Playful lavender/pink (`#A06BFF`, `#FF8BE7`, `#FFC8FF`)
- **Mahdi** (University): Academic green (`#3DD6A0`, `#1FBFA7`, `#8DF7CB`)
- **Ludovic** (Wealth): Luxury gold (`#BFA16E`, `#8C7448`, `#F2E6C9`)

#### Interactive Elements:
- Hover glow effects on agent tabs
- Smooth fade-in descriptions when switching agents
- Optional micro-sound effects (respects user preferences)
- Navigation arrows with subtle opacity transitions

### 2. Constellation Identity System

A unique visual identity system that creates a cohesive, premium experience across all sections.

#### Features:
- **Floating Dots**: Interactive nodes that connect on hover
- **Thin Neon Lines**: SVG-based lines linking stars with glow effects
- **Section-Specific Constellations**: Each section has its own color and density
- **Hover Interactions**: Lines brighten and thicken when hovering over nodes
- **Dynamic Patterns**: Constellations adapt to section context

#### Section Configurations:
- **Hero**: High density, SamyBear purple
- **Who We Are**: Medium density, Solaria coral
- **Why We Shine**: Low density, FinSight blue
- **AI Constellation**: High density, SamyBear purple
- **How It Works**: Medium density, Mahdi green
- **Why Polstar**: Medium density, Ludovic gold
- **Partners**: Low density, Pink accent
- **Contact**: Medium density, Cyan accent

### 3. Cursor Trail Navigation

Premium cursor trail effect that follows mouse movement:
- 8-point trail with gradual fade-out
- Size reduction over time
- Glow effects on each point
- Smooth requestAnimationFrame updates
- Non-intrusive, decorative element

### 4. Premium Scroll Animations

Apple-style section transitions that make scrolling feel cinematic:

#### Animation Types:
- **Fade-Up**: 60px upward movement with fade
- **Slide-Up**: 80px upward movement
- **Scale-In**: 0.92 → 1.0 scale transformation
- **Blur-In**: blur(20px) → blur(0px) transition
- **Fade-Up Blur**: Combined fade-up and blur effect

#### Features:
- Smooth 1.0-1.3s durations
- Staggered animations for lists/grids
- Respects `prefers-reduced-motion`
- Optimized with GSAP ScrollTrigger

### 5. Section-Specific Enhancements

#### Hero Section:
- Parallax space background
- Section-specific constellation
- Fade-in animations for content
- Smooth scroll-to-section navigation

#### Who We Are Section:
- Fade-up blur animation
- Scale-in for philosophy text
- Subtle star background
- Section separator

#### How It Works Section:
- Fade-up blur header
- Staggered slide-up cards
- Medium density constellation
- 6 technology pillars with icons

#### AI Constellation Section:
- Blur-in intro animation
- Fade-up carousel
- High density constellation
- Agent carousel with orb

#### Why Polstar Section:
- Fade-up title
- Blur-in content with stagger
- Scale-in security card
- Parallax background gradients
- Visual divider

#### Partners Section:
- Fade-up blur title
- Scale-in partner cards
- Blur-in caption
- Medium density constellation

#### Contact Section:
- Fade-up blur header
- Fade-up left text
- Scale-in form
- Low density constellation

#### Why We Shine Section:
- Horizontal glowing lines (top & bottom)
- Faint constellation background
- Gradient container around text
- Fade-up blur animation

### 6. Visual Enhancements

#### Subtle Star Backgrounds:
- Configurable density (low, medium, high)
- Pulsing animation
- Section-specific placement
- Non-intrusive decorative element

#### Section Separators:
- Animated gradient lines
- Scale-in animation on scroll
- Three variants: line, gradient, stars
- Visual anchors between sections

#### Parallax Backgrounds:
- Configurable speed (0-1)
- Smooth scroll-based movement
- Applied to hero and key sections
- Performance optimized

### 7. Responsive Design

- Mobile-first approach
- Responsive orb sizing (280px → 360px → 400px)
- Adaptive constellation densities
- Touch-friendly interactions
- Optimized animations for mobile

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3.1**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework

### Animation Libraries

- **GSAP 3.13.0**: Professional animation library
  - ScrollTrigger plugin for scroll-based animations
  - Timeline for complex sequences
  - Performance-optimized animations

- **Framer Motion 12.23.22**: React animation library
  - Used for component transitions
  - AnimatePresence for exit animations
  - Smooth page transitions

### UI Components

- **Radix UI**: Accessible component primitives
  - Accordion, Dialog, Dropdown, Select, etc.
  - Fully accessible and customizable

- **Lucide React**: Icon library
  - Consistent iconography
  - Tree-shakeable imports

### Styling

- **Tailwind CSS**: Utility-first CSS
- **Custom CSS**: Advanced animations and effects
- **CSS Custom Properties**: Dynamic theming
- **Backdrop Filters**: Glassmorphism effects

### Build Tools

- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **ESBuild**: Fast bundling

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── OrbitSphere.tsx          # Main animated orb component
│   │   ├── AgentsCarousel.tsx       # Agent carousel with tabs
│   │   ├── OrbSparkles.tsx          # Sparkle animation around orb
│   │   ├── ConstellationNetwork.tsx # Interactive constellation dots
│   │   ├── SectionConstellation.tsx # Section-specific constellations
│   │   ├── CursorTrail.tsx          # Cursor trail effect
│   │   ├── ScrollStars.tsx          # Scroll-based star movement
│   │   ├── ParallaxBackground.tsx   # Parallax effect component
│   │   ├── SectionSeparator.tsx     # Animated section dividers
│   │   ├── SubtleStarBackground.tsx # Subtle star field
│   │   ├── ConstellationBackground.tsx # Constellation with lines
│   │   ├── HeroSection.tsx          # Hero section
│   │   ├── WhoWeAreSection.tsx      # About section
│   │   ├── WhyWeShineSection.tsx    # Value proposition
│   │   ├── AIConstellationSection.tsx # Agent showcase
│   │   ├── HowItWorksSection.tsx    # Technology overview
│   │   ├── WhyPolstarSection.tsx    # Why choose Polstar
│   │   ├── PartnersSection.tsx      # Partners grid
│   │   ├── ContactSection.tsx       # Contact form
│   │   └── ... (other components)
│   ├── hooks/
│   │   ├── useScrollAnimation.tsx   # Basic scroll animations
│   │   └── usePremiumScrollAnimation.tsx # Premium Apple-style animations
│   ├── utils/
│   │   └── soundEffects.ts          # Micro-sound effects
│   ├── constants/
│   │   └── agentColors.ts           # Agent color palettes
│   ├── pages/
│   │   └── PolstarHome.tsx          # Main page
│   └── index.css                    # Global styles
└── package.json
```

## 🎨 Design Philosophy

### Premium & Cinematic
- Smooth, slow animations (6-8 second cycles)
- Soft edges and gradients
- No harsh transitions or fast movements
- "Calm tech" aesthetic inspired by Otter.ai

### Organic & Alive
- Breathing animations
- Liquid flow effects
- Intelligent micro-movements
- Surface ripples and organic shapes

### Unique Visual Identity
- Constellation system creates brand uniqueness
- Section-specific color palettes
- Interactive hover effects
- Cohesive visual language

### Performance First
- Optimized canvas rendering
- requestAnimationFrame for smooth 60fps
- Efficient SVG rendering
- Lazy loading where appropriate

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The development server runs on `http://localhost:5173` (or the next available port).

## 🎯 Key Components Explained

### OrbitSphere Component

The brand-defining animated orb that represents each AI agent.

**Features:**
- Canvas-based rendering for smooth animations
- Multi-layered gradients for depth
- Breathing animation (8-second cycle)
- Liquid flow effects
- Intelligent micro-movements
- Color crossfade between agents
- Responsive sizing

**Animation Layers:**
1. Atmospheric glow (breathing)
2. Outer glow (breathing)
3. Main orb body (liquid gradient)
4. Primary highlight (flowing)
5. Secondary highlight (counter-rotating)
6. Tertiary highlight (deep)
7. Surface ripple (liquid effect)
8. Inner core glow (breathing)

### AgentsCarousel Component

Interactive carousel for showcasing AI agents.

**Features:**
- Agent tabs with hover glow
- Navigation arrows
- Smooth agent switching
- Fade-in descriptions
- Sparkle effects around orb
- Optional sound effects

### ConstellationNetwork Component

Interactive constellation system for visual identity.

**Features:**
- Configurable node density
- SVG-based line rendering
- Hover interactions
- Dynamic line connections
- Color-coded per section

## 🎭 Animation Details

### Scroll Animations

All scroll animations use GSAP ScrollTrigger for performance:
- Trigger point: `top 85%` (starts when element is 85% from top)
- Duration: 1.0-1.3 seconds
- Easing: `power3.out` (smooth deceleration)
- Once: true (animates once on scroll)

### Orb Animations

Canvas-based animations running at 60fps:
- Breathing: 8-second sine wave cycle
- Liquid flow: Continuous rotation
- Micro-movements: Slow sine/cosine waves
- Surface ripple: Rotating gradient overlay

### Constellation Animations

- Node hover: 300ms transitions
- Line connections: Dynamic SVG rendering
- Sparkle effects: Continuous pulsing

## ♿ Accessibility

- Respects `prefers-reduced-motion`
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

MIT License - See LICENSE file for details

## 👥 Credits

Inspired by:
- **Otter.ai**: Calm tech aesthetic, agent carousel design
- **Apple**: Premium scroll animations, attention to detail
- **Reka**: Liquid, organic animations
- **Vapi**: Interactive orb designs
- **Perplexity**: Clean, modern interface
- **Apple Vision Pro**: Breathing, alive animations

## 🔮 Future Enhancements

Potential improvements:
- [ ] Add more agent-specific orb behaviors
- [ ] Enhanced constellation patterns
- [ ] More interactive hover effects
- [ ] Advanced parallax effects
- [ ] Performance optimizations
- [ ] Additional animation presets

---

Built with ❤️ by the PolstarAI team

#   p o l s t a r a i - w e b s i t e - b e t a  
 