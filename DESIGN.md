---
name: Nexus Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424751'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#115fad'
  primary: '#00427e'
  on-primary: '#ffffff'
  primary-container: '#0059a7'
  on-primary-container: '#b6d1ff'
  inverse-primary: '#a6c8ff'
  secondary: '#3d608c'
  on-secondary: '#ffffff'
  secondary-container: '#a9cbfe'
  on-secondary-container: '#335682'
  tertiary: '#6e2f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#934100'
  on-tertiary-container: '#ffc4a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a6c8ff'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#004787'
  secondary-fixed: '#d3e3ff'
  secondary-fixed-dim: '#a6c9fb'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#234873'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-dark: '#002F59'
  accent-blue-vibrant: '#1A6AFF'
  text-muted: '#979797'
  divider-light: '#E5E9F0'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.4'
  headline-sm:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  subheading:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  menu-item:
    fontFamily: Poppins
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  button-label:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
  label-sm:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

The design system for Nexora Technology is built on the pillars of **Strategic Intelligence**, **Technological Precision**, and **Enterprise Reliability**. The brand evokes a sense of high-end engineering combined with an approachable, modern consulting presence. It is designed for CTOs, IT Directors, and corporate decision-makers who value clarity and efficiency.

The design style is **Corporate / Modern** with subtle **Glassmorphic** influences. It utilizes a structured layout with generous whitespace to convey a premium, high-fidelity experience. To reinforce the "futuristic" aspect, the system incorporates thin-gauge grid lines and circuit-inspired ornaments that guide the eye without cluttering the interface. Visuals are crisp, focusing on high-contrast typography and intentional use of the primary blue to signify action and innovation.

## Colors

The palette is anchored by **Primary Blue (#0059A7)**, used exclusively for interactive elements, primary call-to-actions, and brand-identifying icons. **Dark Navy (#002F59)** serves as the "Enterprise Grounding" color, providing high-contrast backgrounds for hero sections, footers, and primary headings when placed on white.

White (#FFFFFF) is the structural foundation, ensuring the "clean" and "professional" aesthetic required for software development documentation and marketing. For a futuristic edge, we introduce an **Accent Blue (#1A6AFF)** to be used sparingly for subtle gradients or high-energy hover states, and **Text Muted (#979797)** for secondary information to maintain a clear visual hierarchy.

## Typography

This design system uses **Poppins** as the exclusive typeface to maintain a geometric, modern, and friendly tone across all touchpoints. 

- **Headlines:** Use weights 600 or 700. Larger display type should have slightly tighter letter spacing for a more "designed" editorial feel.
- **Subheadings:** Set in weight 500 to 600 to provide a clear bridge between headlines and body text.
- **Body Text:** Always weight 400 for maximum readability. Line height is kept generous (1.6) to allow the "breathable" layout to flourish.
- **Navigation/Buttons:** Weights 500-600 are used to ensure these actionable items stand out from static content.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px central track on desktop, while background elements and sections bleed to the edges.

A strict **8px base grid** governs all spacing.
- **Grid:** 12-column grid for desktop with 24px gutters.
- **Section Spacing:** Generous vertical padding (120px+) is used between major homepage sections to reinforce the premium, "un-cluttered" positioning.
- **Micro-spacing:** Component-internal spacing (padding in cards or buttons) must always be a multiple of 8px to maintain mathematical harmony.
- **Sticky Navigation:** The header is pinned to the top with a subtle backdrop-blur (10px) to maintain a persistent sense of place as users explore.

## Elevation & Depth

Visual hierarchy is established using a combination of **Tonal Layers** and **Ambient Shadows**.

1.  **Base Layer:** Pure white or very light gray (#F8FAFC) for the main canvas.
2.  **Raised Layer (Cards):** Utilizes a very soft, diffused shadow (Blur: 30px, Y: 10px, Opacity: 5% of #002F59) to create a "lifting" effect.
3.  **Floating Elements:** Sticky navigation uses a higher elevation with a semi-transparent white background (85% opacity) and a backdrop-blur.
4.  **Accent Depth:** Subtle circuit lines and grid ornaments are placed behind content at 5-10% opacity, creating a "glass-pane" effect where the tech-inspired details sit on a lower Z-index than the actionable UI.

## Shapes

The shape language is defined by **Medium Roundedness**. 
- **Standard Cards:** 16px to 20px corner radius to soften the technical nature of the brand.
- **Input Fields & Small Components:** 8px corner radius for a more precise, functional appearance.
- **Buttons:** 8px or pill-shaped depending on the context; standard CTA buttons use an 8px radius to match input fields, while secondary "chips" use pill shapes.

## Components

### Buttons
- **Primary:** Solid Primary Blue (#0059A7) background, White text, 600 weight. Subtle lift shadow on hover.
- **Secondary:** Outlined in Primary Blue or Dark Navy. 2px border width.
- **Transition:** All buttons must have a 200ms ease-in-out transition on hover for color and shadow changes.

### Cards
- **Feature Cards:** White background, 20px border radius, soft ambient shadow. 
- **Dark Cards:** Dark Navy (#002F59) background with white text, used for high-impact technical callouts. Include a subtle 1px border (#FFFFFF 10% opacity) to define edges.

### Inputs
- **Field Style:** Clean white background with a 1px light gray border. On focus, the border transitions to Primary Blue with a 2px outer glow (Primary Blue at 20% opacity).
- **Labels:** Always Poppins, 500 weight, 14px size, positioned above the field.

### Navigation
- **Top Bar:** 80px height, sticky position. Uses Poppins 600 for menu items. Active states are indicated by a 2px Primary Blue bottom-border or a subtle weight shift.

### Icons & Ornaments
- **Icons:** Minimalist, 2px stroke weight linear icons in Primary Blue.
- **Grid Lines:** 1px width, #0059A7 at 5% opacity, used as a subtle background pattern to evoke technical blueprints.