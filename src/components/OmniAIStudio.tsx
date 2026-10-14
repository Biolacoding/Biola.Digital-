import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { StudioTabs } from './StudioTabs';
import { ToolPanel } from './ToolPanel';
import { Canvas } from './Canvas';
import { VideoTimeline } from './VideoTimeline';
import { PromptStudio } from './PromptStudio';

export const OmniAIStudio: React.FC = () => {
  const { activeTab } = useAppStore();

  return (
    <div className="min-h-screen bg-[#000046] text-[#CAF0F8] overflow-hidden">
      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <Header />
          
          {/* Studio Tabs */}
          <StudioTabs />
          
          {/* Main Workspace */}
          <div className="flex-1 flex">
            {/* Tool Panel */}
            <ToolPanel />
            
            {/* Center Canvas Area */}
            <div className="flex-1 flex flex-col">
              <Canvas />
              
              {/* Video Timeline (only visible in video mode) */}
              {activeTab === 'video' && <VideoTimeline />}
            </div>
            
            {/* Right Prompt Studio */}
            <PromptStudio />
          </div>
        </div>
      </div>
    </div>
  );
};