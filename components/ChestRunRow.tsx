import React from 'react';
import type { ChestRun } from '../types';

interface ChestRunRowProps {
  run: ChestRun;
  onToggleComplete: (id: string) => void;
  isLast: boolean;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const CompletionCheckbox: React.FC<{ id: string, completed: boolean, onToggle: () => void }> = ({ id, completed, onToggle }) => (
    <label htmlFor={`checkbox-${id}`} className="flex justify-center items-center cursor-pointer">
        <input id={`checkbox-${id}`} type="checkbox" checked={completed} onChange={onToggle} className="sr-only peer" />
        <div className="relative w-6 h-6 border-2 border-slate-500 rounded-md peer-checked:bg-cyan-500 peer-checked:border-cyan-400 transition-all duration-200">
            <CheckIcon className={`h-4 w-4 text-slate-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${completed ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    </label>
);

const NameDisplay: React.FC<{ name: string, subtitle: string, completed: boolean }> = ({ name, subtitle, completed }) => (
    <div>
        <div className={`font-bold text-lg ${completed ? 'text-slate-400 line-through' : 'text-slate-100'}`}>{name}</div>
        <div className={`text-sm ${completed ? 'text-slate-500' : 'text-slate-400'}`}>{subtitle}</div>
    </div>
);


export const ChestRunRow: React.FC<ChestRunRowProps> = ({ run, onToggleComplete, isLast }) => {
  const rowClasses = `
    block 
    ${run.completed ? 'bg-slate-800/60' : 'bg-slate-800/30'}
    hover:bg-slate-700/50
    ${!isLast ? 'border-b border-slate-700' : ''}
  `;

  return (
    <div className={rowClasses}>
        {/* --- Mobile View Card --- */}
        <div className="p-4 md:hidden">
            <div className="flex justify-between items-start mb-4">
                <NameDisplay name={run.name} subtitle={run.subtitle} completed={run.completed} />
                <div className="ml-4 flex-shrink-0">
                    <CompletionCheckbox id={run.id} completed={run.completed} onToggle={() => onToggleComplete(run.id)} />
                </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-sm">
                <div className="font-semibold text-slate-400 text-right">Zone</div>
                <div className={`${run.completed ? 'text-slate-500' : 'text-slate-300'}`}>{run.zone}</div>
                <div className="font-semibold text-slate-400 text-right">Nearest Shrine</div>
                <div className={`${run.completed ? 'text-slate-500' : 'text-slate-300'}`}>{run.shrine}</div>
            </div>
        </div>

        {/* --- Desktop View Row --- */}
        <div className="hidden md:flex items-center text-left">
            <div className="p-4 flex-none w-24 text-center">
                <CompletionCheckbox id={`${run.id}-desktop`} completed={run.completed} onToggle={() => onToggleComplete(run.id)} />
            </div>
            <div className="p-4 flex-auto w-2/5">
                <NameDisplay name={run.name} subtitle={run.subtitle} completed={run.completed} />
            </div>
            <div className={`p-4 flex-auto w-1/5 ${run.completed ? 'text-slate-500' : 'text-slate-300'}`}>
                {run.zone}
            </div>
            <div className={`p-4 flex-auto w-2/5 ${run.completed ? 'text-slate-500' : 'text-slate-300'}`}>
                {run.shrine}
            </div>
        </div>
    </div>
  );
};