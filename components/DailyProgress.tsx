import React from 'react';

interface DailyProgressProps {
  completedCount: number;
  totalCount: number;
  onReset: () => void;
}

export const DailyProgress: React.FC<DailyProgressProps> = ({ completedCount, totalCount, onReset }) => {
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Progress Info */}
        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-xl font-semibold text-slate-100">Daily Progress</h3>
          <p className="text-slate-400 mt-1">
            You have completed <span className="font-bold text-cyan-400">{completedCount}</span> out of <span className="font-bold text-slate-200">{totalCount}</span> chest runs.
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full sm:w-1/3">
          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div 
              className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="flex-shrink-0">
          <button 
            onClick={onReset} 
            className="bg-transparent border border-amber-600/70 text-amber-200 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-amber-900/40 hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};