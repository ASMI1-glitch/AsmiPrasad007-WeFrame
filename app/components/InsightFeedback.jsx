import React from 'react';

export default function InsightFeedback() {
  return (
    <div
      style={{
        width: '386px',
        height: '586px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Card 1: Key Insights & Feedback */}
      <div
        className="animate-fadeInUp hover:animate-hoverEffect"
        style={{
          animationDelay: '0.2s',
          animationFillMode: 'both',
          width: '386px',
          height: '282px',
          borderRadius: '16px',
          border: '1px solid #EAECF0',
          padding: '24px',
          background: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px #1018280D',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            width: '100%',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #EAECF0',
            paddingBottom: '4px',
          }}
        >
          <h3
            style={{
              width: '189px',
              height: '24px',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#101828',
              margin: 0,
            }}
          >
            Key Insights & Feedback
          </h3>
        </div>

        {/* Number and badge row */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left: Percentage info */}
          <div>
            <p style={{ fontSize: '32px', fontWeight: 600, color: '#101828', margin: 0 }}>
              10%
            </p>
            <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>
              Sales Growth
            </p>
          </div>

          {/* Right: Avatar + Top Performer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <img
              src="/images/Avatar (6).png"
              alt="Company Logo"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9999px',
                transition: 'transform 0.3s ease-in-out',
              }}
              className="hover:scale-110"
            />
            <span
              style={{
                fontSize: '12px',
                color: '#344054',
                fontWeight: 500,
                backgroundColor: '#F9FAFB',
                borderRadius: '16px',
                padding: '4px 10px',
                border: '1px solid #EAECF0',
              }}
            >
              Top Performer
            </span>
          </div>
        </div>

        {/* Feedback Box */}
        <div
          style={{
            width: '338px',
            height: '90px',
            gap: '6px',
            borderRadius: '8px',
            background: '#F6F7FB',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out',
          }}
          className="hover:scale-105"
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#D0D5DD',
              marginRight: '8px',
            }}
          />
          <p style={{ fontSize: '14px', color: '#475467', margin: 0 }}>
            Franchisees are requesting more detailed training materials.
          </p>
        </div>
      </div>

      {/* Card 2: Prospect Leads */}
      <div
        className="animate-fadeInUp hover:animate-hoverEffect"
        style={{
          animationDelay: '0.4s',
          animationFillMode: 'both',
          width: '386px',
          height: '284px',
          borderRadius: '16px',
          border: '1px solid #EAECF0',
          padding: '24px',
          background: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px #1018280D',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            width: '338px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #EAECF0',
            gap: '16px',
          }}
        >
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#101828',
              margin: 0,
            }}
          >
            Prospect Leads
          </h3>
        </div>

        {/* Lead List */}
        <div
          style={{
            width: '338px',
            height: '192px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {[{ name: 'Wade Warren', stage: 'Initial Inquiry', avatar: '/images/Avatar-3.png' },
            { name: 'Ava Wright', stage: 'Initial Inquiry', avatar: '/images/Avatar-4.png' },
            { name: 'Cody Fisher', stage: 'Initial Inquiry', avatar: '/images/Avatar-5.png' }]
            .map((lead, i) => (
              <div
                key={i}
                className="animate-fadeInUp hover:animate-hoverEffect"
                style={{
                  animationDelay: `${0.5 + i * 0.1}s`,
                  animationFillMode: 'both',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: i % 2 === 0 ? '#F9FAFB' : '#FFFFFF',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src={lead.avatar}
                    alt={lead.name}
                    style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                  />
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: '#101828' }}>
                    {lead.name}
                  </p>
                </div>
                <p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>
                  Stage: {lead.stage}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
