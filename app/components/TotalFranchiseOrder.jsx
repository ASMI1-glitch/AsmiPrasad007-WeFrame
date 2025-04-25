'use client';
import { TrendingUp } from 'lucide-react';
import React from 'react';

export default function TotalFranchiseOrder() {
  const stageColors = ['#1F7EAA', '#2FBDFF', '#97DEFF'];

  const stages = [
    { label: 'Stage 1 (Initial Inquiry)', count: '02' },
    { label: 'Stage 2 (Document Submission)', count: '07' },
    { label: 'Stage 3 (Training)', count: '05' },
  ];

  const avatars = [
    '/images/Avatar (1).png',
    '/images/Avatar (2).png',
    '/images/Avatar-3.png',
    '/images/Avatar-4.png',
    '/images/Avatar-5.png',
  ];

  return (
    <div className="w-full md:max-w-[360px] flex flex-col gap-4">
      {/* Total Franchisees Onboard */}
      <div className="w-full h-[284px] rounded-xl p-6 bg-white border border-[#EAECF0] shadow-card flex flex-col justify-between animate-fadeIn hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <h3 className="text-[16px] font-semibold leading-[24px] text-[#101828] text-center font-inter">
          Total Franchisees Onboard
        </h3>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-[32px] font-bold text-[#101828] leading-[38px]">14</div>
            <div className="flex items-center gap-1 px-2 py-[2px] rounded-full bg-[#ECFDF3] text-[#027A48] text-xs font-medium">
              <TrendingUp size={14} />
              +7.4%
            </div>
          </div>
          <div className="flex -space-x-2 items-center">
            {avatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="avatar"
                className="h-8 w-8 rounded-full object-cover border-2 border-white"
              />
            ))}
            <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 border-2 border-white">
              +7
            </div>
          </div>
        </div>

        {/* Top bars for each stage */}
        <div className="flex space-x-2">
          {stages.map((_, idx) => (
            <div
              key={idx}
              className="h-2 rounded flex-1"
              style={{ backgroundColor: stageColors[idx] }}
            />
          ))}
        </div>

        {/* Stage list with animation delay */}
        <div className="flex flex-col gap-4">
          {stages.map(({ label, count }, index) => (
            <div
              key={index}
              className={`flex justify-between items-center text-sm animate-fadeIn`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: stageColors[index] }}
                />
                <span className="text-[#344054]">{label}</span>
              </div>
              <span className="font-semibold text-[#101828]">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Wellbeing */}
      <div className="w-full h-[282px] rounded-xl p-6 bg-white border border-[#EAECF0] shadow-card flex flex-col justify-between animate-fadeIn delay-300 hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <h3 className="text-[16px] font-semibold leading-[24px] text-[#101828] text-center font-inter">
          Financial Wellbeing
        </h3>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="text-[32px] font-bold text-[#101828] leading-[38px]">20</div>
            <p className="text-sm text-[#475467] font-normal">Total Franchisees</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-[2px] rounded-full bg-[#ECFDF3] text-[#027A48] text-xs font-medium">
            <TrendingUp size={14} />
            +2.1%
          </div>
        </div>

        <div className="w-full h-px bg-[#EAECF0] my-4" />

        <div className="flex justify-between gap-4">
          {[{ label: 'Target', value: '$500,000' }, { label: 'Current', value: '$450,000' }].map(
            (item, idx) => (
              <div
                key={idx}
                className="flex-1 bg-[#F9FAFB] rounded-lg p-4 text-center flex flex-col gap-1 animate-fadeIn"
                style={{ animationDelay: `${300 + idx * 150}ms`, animationFillMode: 'both' }}
              >
                <p className="text-sm text-[#475467] font-normal">{item.label}</p>
                <p className="text-xl font-semibold text-[#101828]">{item.value}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
