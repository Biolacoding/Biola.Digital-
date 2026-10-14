import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Play, Pause, Video, Volume2, Zap } from 'lucide-react';

export const VideoTimeline: React.FC = () => {
  const { isPlaying, togglePlay, currentTime, tracks } = useAppStore();

  return (
    <div className="h-80 bg-[#000033]/30 border-t border-[#00B4D8]/20">
      {/* Player Top Controller Bar */}
      <div className="h-12 bg-[#000046]/50 border-b border-[#00B4D8]/20 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-[#00B4D8] rounded-full flex items-center justify-center hover:bg-[#0077B6] transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>
          
          <div className="text-sm font-mono text-[#CAF0F8]">
            {currentTime} / 00:15:00:00
          </div>
        </div>
        
        <div className="text-sm text-[#00B4D8] font-mono">
          Turbo Neural Engine (60 FPS)
        </div>
      </div>

      {/* Track Timeline Canvas */}
      <div className="flex-1 p-4 space-y-3">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center space-x-4">
            {/* Track Header */}
            <div className="w-24 flex items-center space-x-2">
              {track.type === 'video' && <Video className="w-4 h-4 text-[#00B4D8]" />}
              {track.type === 'audio' && <Volume2 className="w-4 h-4 text-green-400" />}
              {track.type === 'vfx' && <Zap className="w-4 h-4 text-purple-400" />}
              <span className="text-sm font-mono text-[#CAF0F8]">{track.name}</span>
            </div>
            
            {/* Track Timeline */}
            <div className="flex-1 h-12 bg-[#000046]/50 rounded-lg border border-[#00B4D8]/20 relative overflow-hidden">
              {/* Simulated Clip Block */}
              <div className={`absolute left-2 top-1 bottom-1 w-32 rounded ${
                track.type === 'video' ? 'bg-[#00B4D8]/30 border border-[#00B4D8]/50' :
                track.type === 'audio' ? 'bg-green-400/30 border border-green-400/50' :
                'bg-purple-400/30 border border-purple-400/50'
              } flex flex-col justify-center px-2`}>
                <div className="text-xs font-medium text-[#CAF0F8] truncate">
                  {track.clipTitle}
                </div>
                <div className="text-xs text-[#CAF0F8]/70">
                  {track.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};