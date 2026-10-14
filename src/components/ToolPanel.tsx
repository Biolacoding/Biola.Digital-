import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { 
  Brush, 
  Wand2, 
  Layers, 
  Crop,
  Circle,
  Move,
  Settings,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

const tools = [
  { id: 'brush', icon: Brush, label: 'Brush' },
  { id: 'inpaint', icon: Circle, label: 'Inpaint' },
  { id: 'wand', icon: Wand2, label: 'Magic Wand' },
  { id: 'layers', icon: Layers, label: 'Layers' },
  { id: 'crop', icon: Crop, label: 'Crop' },
  { id: 'mask', icon: Circle, label: 'Mask' },
  { id: 'transform', icon: Move, label: 'Transform' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export const ToolPanel: React.FC = () => {
  const { activeTool, setActiveTool, zoomLevel, zoomIn, zoomOut, resetZoom } = useAppStore();

  return (
    <div className="w-16 bg-[#000033]/50 border-r border-[#00B4D8]/20 flex flex-col items-center py-4">
      <div className="text-xs text-[#00B4D8] font-semibold mb-4 -rotate-90 whitespace-nowrap">
        TOOLS
      </div>
      
      <div className="space-y-2 mb-6">
        {tools.map((tool) => {
          const isActive = activeTool === tool.id;
          const Icon = tool.icon;
          
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isActive 
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/25' 
                  : 'text-[#CAF0F8]/70 hover:text-[#CAF0F8] hover:bg-[#00B4D8]/10'
              }`}
              title={tool.label}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>

      {/* Zoom Controls */}
      <div className="space-y-2">
        <button
          onClick={zoomIn}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-[#CAF0F8]/70 hover:text-[#CAF0F8] hover:bg-[#00B4D8]/10 transition-all duration-200"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        
        <div className="text-xs text-[#CAF0F8] text-center font-mono">
          {zoomLevel}%
        </div>
        
        <button
          onClick={zoomOut}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-[#CAF0F8]/70 hover:text-[#CAF0F8] hover:bg-[#00B4D8]/10 transition-all duration-200"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        
        <button
          onClick={resetZoom}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-[#CAF0F8]/70 hover:text-[#CAF0F8] hover:bg-[#00B4D8]/10 transition-all duration-200"
          title="Reset Zoom"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};