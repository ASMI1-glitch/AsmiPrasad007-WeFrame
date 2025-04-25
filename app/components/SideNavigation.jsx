'use client';
import React from 'react';

const navItems = [
  { label: 'Home', active: true },
  { label: 'Stages & Checklist' },
  { label: 'Upload Docs' },
  { label: 'Preferred Vendors' },
  { label: 'Tech Stack' },
  { label: 'Targets' },
  { label: 'Zee Sales Targets' },
  { label: 'MAI Settings' },
  { label: 'Pending Questions', badge: '3' },
];

export default function SideNavigation() {
  return (
    <aside className="w-[248px] h-screen bg-[#11455D] shadow-md fixed top-0 left-0 z-50 overflow-hidden flex flex-col">
      {/* Ellipse Blur Background */}
      <div className="absolute w-[710px] h-[710px] opacity-30 bg-[#279DD4] blur-[323px] top-0 left-0 -z-10"></div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col pt-8 px-4 pb-4 gap-8 animate-fadeIn">
        <nav className="flex flex-col gap-6 pt-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full h-9 px-4 py-2 rounded-sm text-white text-sm font-medium transition-all duration-200 ${
                item.active
                  ? 'bg-[#FFFFFF1A] text-[#2FBCFE]'
                  : 'bg-transparent text-white/60 hover:bg-white/10'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-xs bg-[#F9FAFB] border border-[#EAECF0] text-gray-900 rounded-full px-2 py-[2px]">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Logout Button - Sticky Bottom */}
      <div className="animate-fadeInLate px-4 pb-6">
        <button className="w-full flex items-center justify-between h-[36px] px-[16px] py-[8px] rounded-[8px] bg-gray-500 text-white text-sm font-medium hover:bg-gray-400 transition">
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
