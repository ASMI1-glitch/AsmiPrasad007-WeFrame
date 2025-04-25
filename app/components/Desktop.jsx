import React from 'react';
import AccountCardDesktop from './AccountCardDesktop';
import TotalFranchiseOrder from './TotalFranchiseOrder';
import InsightFeedback from './InsightFeedback';
import PendingQuestionAndAi from './PendingQuestionAndAi';

export default function Desktop() {
  return (
    <>
      {/* Main container with flex layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mx-auto mt-12 md:mt-24 flex-wrap justify-center px-4">
        {/* AccountCardDesktop, TotalFranchiseOrder, and InsightFeedback on one row for mobile */}
        <div className="flex flex-wrap w-full gap-6 justify-center md:flex-nowrap">
          {/* AccountCardDesktop component */}
          <div className="w-full sm:max-w-[360px]">
            <AccountCardDesktop />
          </div>

          {/* TotalFranchiseOrder component */}
          <div className="w-full sm:max-w-[360px]">
            <TotalFranchiseOrder />
          </div>

          {/* InsightFeedback component */}
          <div className="w-full sm:max-w-[360px]">
            <InsightFeedback />
          </div>
        </div>
      </div>

      {/* PendingQuestionAndAi component */}
      <div className="mt-12 px-4 w-full md:w-auto">
        <PendingQuestionAndAi />
      </div>
    </>
  );
}
