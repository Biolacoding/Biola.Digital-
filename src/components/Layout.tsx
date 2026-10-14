import React from 'react';
import { useAppStore } from '../store/useAppStore';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isQueueModalOpen } = useAppStore();

  return (
    <div className="min-h-screen bg-[#000046] text-[#CAF0F8] overflow-hidden">
      {/* Persistent Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-[#000046] to-[#000033] border-r border-[#00B4D8]/20 z-50">
        {/* Sidebar content will go here */}
      </div>
      
      {/* Main Workspace Frame */}
      <div className="ml-16 flex-1 min-h-screen">
        {children}
      </div>
      
      {/* Persistent Render Queue Modal */}
      {isQueueModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-[#000046] border border-[#00B4D8]/30 rounded-lg p-6 max-w-2xl w-full mx-4">
            {/* Queue modal content */}
          </div>
        </div>
      )}
    </div>
  );
};