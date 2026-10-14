import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Bell, User, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const { tokens, setQueueModalOpen } = useAppStore();

  return (
    <div className="h-16 bg-gradient-to-r from-[#000046] via-[#000055] to-[#000046] border-b border-[#00B4D8]/20 flex items-center justify-between px-6">
      {/* Brand Header */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-[#CAF0F8]">OmniAI Studio</div>
            <div className="text-xs text-[#00B4D8]">v4.5 QUANTUM</div>
          </div>
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-6">
        {/* GPU Telemetry */}
        <div className="flex items-center space-x-3">
          <div className="text-xs">
            <div className="text-[#00B4D8] font-mono">GPU TELEMETRY</div>
            <div className="text-[#CAF0F8]">50% LOAD</div>
          </div>
          <div className="text-xs">
            <div className="text-[#CAF0F8] font-mono">RTX B200</div>
            <div className="text-[#00B4D8]">48GB / 96GB</div>
          </div>
        </div>

        {/* Node Status */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-[#CAF0F8] font-mono">100% ULTRA-NODE READY</span>
        </div>

        {/* Token Counter */}
        <div className="text-xs text-[#CAF0F8] font-mono">
          {tokens.toLocaleString()} tokens
        </div>

        {/* Notifications & Queue */}
        <button 
          onClick={() => setQueueModalOpen(true)}
          className="p-2 hover:bg-[#00B4D8]/10 rounded-lg transition-colors"
        >
          <Bell className="w-5 h-5 text-[#00B4D8]" />
        </button>

        {/* Profile Avatar */}
        <button className="p-2 hover:bg-[#00B4D8]/10 rounded-lg transition-colors">
          <User className="w-5 h-5 text-[#CAF0F8]" />
        </button>
      </div>
    </div>
  );
};