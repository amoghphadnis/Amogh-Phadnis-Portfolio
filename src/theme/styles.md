# Amogh Portfolio Design System

## Design Objective

The portfolio should communicate engineering capability before visual decoration.

It must feel:

- Professional
- Technical
- Modern
- Structured
- Confident
- Minimal
- Deliberate

Visual effects should reinforce hierarchy, interaction, or storytelling. They must never compete with project content.

## Design References

- Jigar Sable — portfolio information architecture
- Behance Full-stack Developer Portfolio — visual presentation

These references are inspiration only. No layout, copy, assets, or distinctive visual treatment should be reproduced directly.

## Color

### Dark mode

- Background: `#121212`
- Surface: `#1a202c` / `rgba(26, 32, 44, 0.9)`
- Surface glass: `rgba(26, 32, 44, 0.8)`
- Primary text: `#59ebcb`
- Secondary text: `#e0e7ef`
- Muted text: `#94a3b8`
- Accent gradient: `linear-gradient(135deg, #0172af, #74febd)`
- Card gradient: `linear-gradient(135deg, #103ce7, #64e9ff)`
- Glow: `rgba(89, 235, 203, 0.25)`

### Light mode

- Background: `#ffffff`
- Surface: `#f8fafc`
- Surface glass: `rgba(255, 255, 255, 0.9)`
- Primary text: `#2c3f50`
- Secondary text: `#1e293b`
- Muted text: `#64748b`
- Accent gradient: `linear-gradient(135deg, #0172af, #74febd)`
- Card gradient: `linear-gradient(135deg, #0172af, #74febd)`
- Glow: `rgba(1, 114, 175, 0.2)`

## Typography

- Display: `Roboto, sans-serif`, 700, 2.5rem
- H1: `Roboto, sans-serif`, 700, 2rem
- H2: `Roboto, sans-serif`, 600, 1.75rem
- H3: `Roboto, sans-serif`, 600, 1.5rem
- H4: `Roboto, sans-serif`, 600, 1.25rem
- Body: `Roboto, sans-serif`, 400, 1rem
- Code: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

## Spacing

- xs: `4px`
- sm: `8px`
- md: `16px`
- lg: `24px`
- xl: `32px`
- 2xl: `48px`
- 3xl: `64px`

## Border Radius

- Cards: `12px`
- Buttons: `12px`
- Inputs: `8px`
- Chips: `16px`
- Avatar: `50%`

## Shadows

- Card: `0px 4px 10px rgba(0, 0, 0, 0.2)`
- Card hover: `0px 6px 16px rgba(0, 0, 0, 0.3)`
- Header: `0px 4px 12px rgba(0, 0, 0, 0.1)`

## Motion

### Duration

- Fast: `150ms`
- Normal: `300ms`
- Slow: `500ms`

### Easing

- Default: `ease`
- Reveal: `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover: `ease-in-out`

### Animation Rules

- No perpetual motion unless meaningful.
- Respect `prefers-reduced-motion`.
- Hover animations should be ≤ 300ms.
- Page reveals should be subtle.
- No animated backgrounds.

## Components

- Hero: large name, role, one-line positioning, two CTAs.
- EngineeringHighlight: icon + title + short description.
- ProjectCard: image, title, category, short description, tech chips, hover lift + glow.
- ProjectGrid: grouped by category, category heading.
- ArchitectureDiagram: vertical flow of steps with connecting line.
- Timeline: vertical stepper with years and roles.
- Badge: rounded chip for technology or category.
- Button: rounded 12px, gradient fill, black text.
