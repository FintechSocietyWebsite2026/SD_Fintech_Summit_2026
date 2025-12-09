import React from 'react';
import DoubleCapsuleBanner from '../ui/home/DoubleCapsuleBanner';

const ProblemStatement: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4">
      <DoubleCapsuleBanner title="Problem Statement" />
      <div className="flex flex-col items-center justify-center space-y-3 w-full mt-12">
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex items-center justify-center text-center">
          To be released on 7th Jan.
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;