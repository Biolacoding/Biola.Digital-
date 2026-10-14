import React from 'react';
import { useAppStore } from '../store/useAppStore';

const tabs = [
  { id: 'picture', label: 'Picture' },
  { id: 'photoshop', label: 'Photoshop' },
  { id: 'video', label: 'Video' },
];

export const StudioTabs: React.FC = () => {
  const { activeTab, setActiveTab } = useAppStore();

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-[#00B4D8]/20 bg-[#000046]/50">
      {/* Studio View Tabs */}
      <div className="flex space-x-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/25' 
                  : 'text-[#CAF0F8]/70 hover:text-[#CAF0F8] hover:bg-[#00B4D8]/10'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Resolution & Viewport Controls */}
      <div className="flex items-center space-x-4 text-sm">
        <span className="text-[#CAF0F8] font-mono">16:9 Cinema UHD (3840×2160)</span>
      </div>
    </div>
  );
};