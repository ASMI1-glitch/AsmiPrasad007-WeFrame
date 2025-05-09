import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SideNavigation from './components/SideNavigation';
import Header from './components/Header';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {/* Fixed Header */}
        <Header />

        <div className="flex min-h-screen pt-[56px] md:pt-0">
          {/* Sidebar for Desktop */}
          <aside className="hidden md:block fixed top-[64px] left-0 w-[248px] h-[calc(100vh-64px)] bg-white z-30 shadow-sm">
            <SideNavigation />
          </aside>

          {/* Main Content */}
          <main
            className="
              flex-1
              bg-gray-50
              w-full
              px-4 sm:px-5 md:px-8
              pt-2 pb-8
              md:ml-[248px]  /* Reserve space for sidebar on desktop */
              max-w-[1440px] mx-auto
            "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
