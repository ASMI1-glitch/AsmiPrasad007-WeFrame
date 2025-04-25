"use client"; // Only if you're using this in a Next.js app

import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function AccountCardDesktop() {
  const completedSteps = useMemo(() => ['Profile Setup', 'Initial Training', 'Legal Documents'], []);
  const remainingSteps = useMemo(() => ['Financial Integration', 'Final Review'], []);

  // Animation variants for fade and slide effect
  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const renderStep = useCallback((step, color) => (
    <motion.li
      key={step}
      variants={itemVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: '#E5E7EB',
            marginRight: '12px',
          }}
        />
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#475467',
          }}
        >
          {step}
        </span>
      </div>
      {/* Checkmark circle */}
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill={color} />
          <path
            d="M8 12l2 2 4-4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </motion.li>
  ), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '360px',
        padding: '24px',
        background: '#FFFFFF',
        border: '1px solid #EAECF0',
        borderRadius: '24px',
        boxShadow: '0px 1px 2px 0px #1018280D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
        margin: 'auto',
      }}
    >
      {/* Top section - Account Progress */}
      <div
        style={{
          width: '100%',
          borderBottom: '1px solid #E9EFF6',
          paddingBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#000000',
          }}
        >
          Account Progress
        </div>

        {/* Progress Circle with animation */}
        <div style={{ position: 'relative', width: '148px', height: '148px' }}>
          <svg width="148" height="148" viewBox="0 0 148 148">
            <circle cx="74" cy="74" r="66" stroke="#E5E7EB" strokeWidth="16" fill="none" />
            <motion.circle
              cx="74"
              cy="74"
              r="66"
              stroke="#2FBCFE"
              strokeWidth="16"
              fill="none"
              strokeDasharray={2 * Math.PI * 66}
              strokeDashoffset={2 * Math.PI * 66 * (1 - 0.85)}
              transform="rotate(-90 74 74)"
              initial={{ strokeDashoffset: 2 * Math.PI * 66 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 66 * (1 - 0.85) }}
              transition={{ duration: 1 }}
            />
          </svg>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute',
              top: '59.94px',
              left: '49.58px',
              fontWeight: 600,
              fontSize: '22.2px',
              lineHeight: '28.12px',
              textAlign: 'center',
              color: '#101828',
            }}
          >
            85%
          </motion.div>
        </div>
      </div>

      {/* Steps Completed */}
      <div
        style={{
          width: '100%',
          borderRadius: '8px',
          padding: '16px',
          background: '#F6F7FB',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#101828',
          }}
        >
          Steps Completed
        </div>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {completedSteps.map(step => renderStep(step, '#047857'))}
        </ul>
      </div>

      {/* Steps Remaining */}
      <div
        style={{
          width: '100%',
          borderRadius: '8px',
          padding: '16px',
          background: '#F6F7FB',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '12px',
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#101828',
          }}
        >
          Steps Remaining
        </div>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {remainingSteps.map(step => renderStep(step, '#86EFAC'))}
        </ul>
      </div>
    </motion.div>
  );
}
