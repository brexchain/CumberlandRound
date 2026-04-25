# Cumberland54 Creative Lab - Handover Protocol v2.6

## 1. Technical Overview
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS 4.0 (using variable-based theme)
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Logic**: Client-side SPA with responsive state management.

## 2. Design System: "Fluid Machine"
The app uses a custom design system that blends industrial brutalism with fluid, high-end UI patterns.
- **Typography**: 
  - `font-display`: Outfit (Sans-serif, bold, high impact)
  - `font-mono`: JetBrains Mono (Technical/Metadata feel)
- **Colors**:
  - `brand-primary`: Dynamic Neon Lime (Dark) / Deep Blue (Light)
  - `brand-accent`: Crimson Red (#E11D48)
  - `brand-bg`: Deep Black / Off-White
- **Shape Language**: Large border radii (`rounded-[100px]`) for sections, pill-shaped buttons, and skew-transforms for industrial accents.

## 3. Key Functional Modules

### A. Theme Engine (`App.tsx` & `index.css`)
Uses a `.dark` class on the `document` element. All colors are mapped to CSS variables (`--brand-bg`, etc.) in `index.css` to ensure smooth transitions between light and dark modes via a single toggle in the `Navbar`.

### B. Machine Navigation (`Navbar.tsx`)
A hybrid navigation system:
1. **Top Bar**: Branding + Theme Toggle.
2. **Bottom Controller**: A mobile-optimized machine navigation bar that tracks scrolling using `getBoundingClientRect` to highlight the "Active Sector".

### C. Artistic Catalog (`Artists.tsx`)
- **WhatsApp Integration**: Uses `getWhatsAppBuyLink` helper.
- **Message Prefill**: Automatically generates a professional inquiry text: `"Hi [Name], ich bin über Cumberland54 auf dich gestoßen und würde gerne über ein Werk oder eine Zusammenarbeit anfragen!"`.
- **Phone Mapping**: Ensure phone numbers in the `artists` array are in international format (e.g., `49151...`).

### D. Vision Engine (`ManifestoGenerator.tsx`)
A simulated AI vision generator. It accepts user input and produces radical artist manifestos. The loading state mimics machine processing.

### E. Responsive Fixes
Important: Headings use fluid units like `text-[14vw]` combined with `md:text-[10rem]`. This prevents text-break issues on small screens while maintaining massive scale on desktops.

## 4. Developer Prompts (Copy-Paste for AI Assistant)

**To add a new Artist:**
> "Add a new artist to `src/components/Artists.tsx` with name '[NAME]', phone '[PHONE]', and role '[ROLE]'. Use Unsplash for placeholder images."

**To modify the Machinery/Equipment:**
> "Update the equipment list in `src/components/Equipment.tsx` to include a new section for '[CATEGORY]' with icon '[LUCIDE_ICON]'."

**To change theme colors:**
> "Edit the `:root` and `.dark` variables in `src/index.css` to update the primary brand color to '[COLOR_HEX]'."

## 5. Deployment Notes
- Port: 3000
- Build Command: `npm run build`
- Ensure `VITE_` environment variables are used if adding backend integrations.
