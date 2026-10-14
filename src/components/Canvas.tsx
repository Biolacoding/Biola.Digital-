import React from 'react';
import { useAppStore } from '../store/useAppStore';

export const Canvas: React.FC = () => {
  const { canvasImage, inpaintMaskActive, zoomLevel } = useAppStore();

  return (
    <div className="flex-1 bg-[#000033]/30 relative overflow-hidden">
      {/* Top Left Canvas HUD */}
      <div className="absolute top-4 left-4 z-10 bg-[#000046]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#00B4D8]/20">
        <div className="text-xs text-[#00B4D8] font-mono mb-1">CANVAS: ACTIVE LATENT BUFFER</div>
        <div className="text-xs text-[#CAF0F8] font-mono">Denoise 0.72</div>
        <div className="text-xs text-[#CAF0F8] font-mono">X: 1920 Y: 1080</div>
      </div>

      {/* Main Preview Image Container */}
      <div className="flex items-center justify-center h-full p-8">
        <div 
          className="relative bg-[#000046]/50 rounded-lg border border-[#00B4D8]/20 overflow-hidden shadow-2xl"
          style={{ transform: `scale(${zoomLevel / 100})` }}
        >
          <img
            src={canvasImage}
            alt="Canvas Preview"
            className="max-w-[800px] max-h-[600px] object-contain"
          />
          
          {/* Overlaid Inpainting Mask HUD Box */}
          {inpaintMaskActive && (
            <div className="absolute top-4 right-4 bg-[#00B4D8]/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#00B4D8]/40">
              <div className="text-xs text-[#00B4D8] font-mono">Inpainting Mask #04</div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Inpaint Action Bar */}
      {inpaintMaskActive && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#000046]/90 backdrop-blur-sm rounded-lg px-6 py-3 border border-[#00B4D8]/30">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#00B4D8] text-white rounded-lg text-sm font-medium hover:bg-[#0077B6] transition-colors">
              Apply Mask
            </button>
            <button className="px-4 py-2 text-[#CAF0F8] rounded-lg text-sm font-medium hover:bg-[#00B4D8]/10 transition-colors">
              Clear Mask
            </button>
          </div>
        </div>
      )}
    </div>
  );
};