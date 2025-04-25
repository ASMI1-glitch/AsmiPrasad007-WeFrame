// app/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header
      className="fixed top-0 z-50 bg-white border-b"
      style={{
        width: '1192px',
        height: '80px',
        left: '248px',
        borderBottom: '1px solid #EAECF0',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', // Move the images to the right
      }}
    >
      {/* Keeping everything intact, just moved to the right */}
      <div className="flex items-center gap-4">
        {/* Actions.png image */}
        <img
          src="/images/Actions.png"
          alt="Actions"
          className="w-10 h-9" // width 40px, height 36px
        />
        {/* Avatar.png image */}
        <img
          src="/images/Avatar.png"
          alt="User"
          className="w-10 h-9 rounded-full" // width 40px, height 36px
        />
      </div>
    </header>
  );
}
