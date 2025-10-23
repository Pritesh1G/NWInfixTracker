import React from 'react';
import type { ChestRun } from '../types';
import { ChestRunRow } from './ChestRunRow';

interface ChestRunTableProps {
  runs: ChestRun[];
  onToggleComplete: (id: string) => void;
}

export const ChestRunTable: React.FC<ChestRunTableProps> = ({ runs, onToggleComplete }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg overflow-hidden">
      {/* Table Header - visible only on md screens and up */}
      <div className="hidden md:flex bg-slate-900/70 border-b border-slate-700 text-left">
        <div className="p-4 uppercase text-sm font-semibold text-slate-400 tracking-wider flex-none w-24 text-center">Completed</div>
        <div className="p-4 uppercase text-sm font-semibold text-slate-400 tracking-wider flex-auto w-2/5">Name</div>
        <div className="p-4 uppercase text-sm font-semibold text-slate-400 tracking-wider flex-auto w-1/5">Zone</div>
        <div className="p-4 uppercase text-sm font-semibold text-slate-400 tracking-wider flex-auto w-2/5">Nearest Shrine</div>
      </div>

      {/* Rows Container */}
      <div>
        {runs.map((run, index) => (
          <ChestRunRow
            key={run.id}
            run={run}
            onToggleComplete={onToggleComplete}
            isLast={index === runs.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
