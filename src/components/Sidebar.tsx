import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { 
  Image, 
  Scissors, 
  Video, 
  Layers, 
  Settings,
  Cpu
} from 'lucide-react';

const navItems = [
  { id: 'picture', icon: Image, label: 'Picture', sub: 'Generation' },
  { id: 'photoshop', icon: Scissors, label: 'Photoshop', sub: 'Edit' },
  { id: 'video', icon: Video, label: 'Video', sub: 'Sequencer' },
  { id: 'layers', icon: Layers, label: 'Layers', sub: 'Manage' },
  { id: 'settings', icon: Settings, label: 'Settings', sub: 'Configure' },
];

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useAppStore();

  return (
    <div className="w-72 bg-gradient-to-b from-[#000046] to-[#000033] border-r border-[#00B4D8]/20 flex flex-col">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#00B4D8]/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-xl flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xl font-bold text-[#CAF0F8]">OmniAI Studio</div>
            <div className="text-sm text-[#00B4D8]">v4.5 QUANTUM</div>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="flex-1 p-4">
        <div className="text-xs font-semibold text-[#00B4D8] mb-4 tracking-wider">
          Cognitive Suites
        </div>
        
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full p-4 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#00B4D8]/20 to-[#0077B6]/10 border border-[#00B4D8]/30' 
                    : 'hover:bg-[#00B4D8]/5'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#00B4D8]' : 'text-[#CAF0F8]/70'}`} />
                <div className="flex-1 text-left">
                  <div className={`font-medium ${isActive ? 'text-[#CAF0F8]' : 'text-[#CAF0F8]/70'}`}>
                    {item.label}
                  </div>
                  <div className="text-xs text-[#00B4D8]">{item.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* GPU Status */}
      <div className="p-4 border-t border-[#00B4D8]/20">
        <div className="bg-[#00B4D8]/10 rounded-lg p-3">
          <div className="text-xs font-semibold text-[#00B4D8] mb-2">GPU TELEMETRY</div>
          <div className="text-xs text-[#CAF0F8]">50% LOAD</div>
          <div className="text-xs text-[#CAF0F8] mb-2">RTX B200</div>
          <div className="text-xs text-[#00B4D8]">48GB / 96GB</div>
        </div>
      </div>
    </div>
  );
};