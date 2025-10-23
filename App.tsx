
import React, { useState, useEffect, useMemo } from 'react';
import type { ChestRun } from './types';
import { CHEST_RUN_LOCATIONS } from './constants';
import { DailyProgress } from './components/DailyProgress';
import { ChestRunTable } from './components/ChestRunTable';

const App: React.FC = () => {
  const [chestRuns, setChestRuns] = useState<ChestRun[]>([]);

  useEffect(() => {
    try {
      const savedDataRaw = localStorage.getItem('chestRunData');
      if (savedDataRaw) {
        const savedData = JSON.parse(savedDataRaw);
        const today = new Date().toISOString().split('T')[0];
        
        if (savedData.date === today) {
          setChestRuns(savedData.runs);
        } else {
          // Date has changed, reset progress
          const resetRuns = CHEST_RUN_LOCATIONS.map(run => ({ ...run, completed: false }));
          setChestRuns(resetRuns);
        }
      } else {
        // No saved data, initialize
        setChestRuns(CHEST_RUN_LOCATIONS.map(run => ({ ...run, completed: false })));
      }
    } catch (error) {
      console.error("Failed to load or parse from localStorage", error);
      setChestRuns(CHEST_RUN_LOCATIONS.map(run => ({ ...run, completed: false })));
    }
  }, []);

  useEffect(() => {
    if (chestRuns.length > 0) {
      try {
        const dataToSave = {
          date: new Date().toISOString().split('T')[0],
          runs: chestRuns
        };
        localStorage.setItem('chestRunData', JSON.stringify(dataToSave));
      } catch (error) {
        console.error("Failed to save to localStorage", error);
      }
    }
  }, [chestRuns]);

  const handleToggleComplete = (id: string) => {
    setChestRuns(prevRuns =>
      prevRuns.map(run =>
        run.id === id ? { ...run, completed: !run.completed } : run
      )
    );
  };

  const handleReset = () => {
    setChestRuns(prevRuns =>
      prevRuns.map(run => ({ ...run, completed: false }))
    );
  };
  
  const { completedCount, totalCount } = useMemo(() => {
    const completed = chestRuns.filter(run => run.completed).length;
    return { completedCount: completed, totalCount: chestRuns.length };
  }, [chestRuns]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl text-amber-100 tracking-wider">New World</h1>
          <h2 className="text-2xl sm:text-3xl text-slate-300 mt-1">Elite Chest Run Tracker</h2>
        </header>

        <main className="space-y-8">
          <DailyProgress 
            completedCount={completedCount}
            totalCount={totalCount}
            onReset={handleReset}
          />
          <ChestRunTable
            runs={chestRuns}
            onToggleComplete={handleToggleComplete}
          />
        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Track your daily elite chest runs. Progress is saved in your browser.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
