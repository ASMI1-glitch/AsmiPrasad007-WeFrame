// File: app/page.tsx (assuming you're using the new app directory structure in Next.js 13+)

import Desktop from './components/Desktop';

export default function Page() {
  return (
    // Container div: relative positioning to allow absolute elements inside if needed
    // min-h-screen ensures it takes at least full viewport height
    <div className="relative min-h-screen">
      {/* Desktop Component: Renders the main UI for the desktop and mobile view */}
      <Desktop />
    </div>
  );
}
