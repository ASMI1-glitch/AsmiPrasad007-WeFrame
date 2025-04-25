'use client'; // This makes the component a Client Component

import React from 'react';

export default function PendingQuestionAndAi() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1192px',
        background: '#F9FAFB',
        borderTop: '1px solid #D7DFE9',
        margin: '40px auto 0',
        display: 'flex',
        flexDirection: 'row',
        padding: '24px 32px',
        gap: '32px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left – Pending Questions */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {/* Header + divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '338px',
            paddingBottom: '12px',
            borderBottom: '1px solid #E9EFF6',
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '24px',
              color: '#0F172A',
              margin: 0,
              transition: 'color 0.3s ease',
            }}
          >
            Pending Questions
          </h3>
          <span
            style={{
              backgroundColor: '#3B82F6',
              borderRadius: '9999px',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              padding: '2px 8px',
              color: '#FFFFFF',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            }}
            className="badge"
          >
            02
          </span>
        </div>

        {/* Question List */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            animation: 'fadeIn 1.2s ease-out',
          }}
        >
          {/* Question 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              animation: 'slideInLeft 0.8s ease-out',
            }}
          >
            <img
              src="/images/Avatar (1).png"
              alt="Phoenix"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '0.75px solid #00000014',
                transition: 'transform 0.3s ease',
              }}
              className="avatar"
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#344054',
                  }}
                >
                  Phoenix Baker
                </span>
                <span
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#475467',
                  }}
                >
                  @phoenix
                </span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#334155' }}>
                What are the requirements for opening a new store?
              </p>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#94A3B8' }}>5min ago</p>
            </div>
          </div>

          {/* — limited-width separator to match header */}
          <div
            style={{
              width: '100%',
              maxWidth: '338px',
              height: '1px',
              background: '#E9EFF6',
              margin: '16px 0',
              opacity: '0.7',
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Question 2 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              animation: 'slideInRight 0.8s ease-out',
            }}
          >
            <img
              src="/images/Avatar (2).png"
              alt="Koray"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '0.75px solid #00000014',
                transition: 'transform 0.3s ease',
              }}
              className="avatar"
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#344054',
                  }}
                >
                  Koray Okumus
                </span>
                <span
                  style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#475467',
                  }}
                >
                  @koray
                </span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#334155' }}>
                How do I manage inventory effectively?
              </p>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#94A3B8' }}>4hr ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right – AI Chat Assistant */}
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          height: '169.56px',
          gap: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Logo & heading */}
        <div
          style={{
            width: '100%',
            maxWidth: '486px',
            height: '93.56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <img
            src="/images/Logo.png"
            alt="AI Logo"
            style={{ width: 32, height: 32 }}
            className="fadeInUp"
          />
          <div
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '38px',
              color: '#212121',
              textAlign: 'center',
              animation: 'slideInDown 1.2s ease-out',
            }}
          >
            Welcome to the AI Chat Assistant
          </div>
        </div>

        {/* Input & grey ➤ button */}
        <div
          style={{
            width: '100%',
            maxWidth: '680px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <input
            type="text"
            placeholder="Ask your question here..."
            style={{
              flex: 1,
              padding: '10px 12px',
              fontSize: 14,
              borderRadius: 4,
              border: '1px solid #D1D5DB',
              outline: 'none',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3B82F6';
              e.target.style.boxShadow = '0 0 5px rgba(59, 130, 246, 0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1D5DB';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            style={{
              background: '#F3F4F6',
              color: '#6B7280',
              padding: '8px 12px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#E0E7FF'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#F3F4F6'}
            onClick={() => alert('Question submitted!')}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
