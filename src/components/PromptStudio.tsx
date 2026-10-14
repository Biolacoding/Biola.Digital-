import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Zap, Play, Settings, Shuffle } from 'lucide-react';
import type { AestheticStyle, AspectRatio } from '../types';

const aestheticStyles: AestheticStyle[] = [
  'Cyberpunk Neon',
  'Midjourney v6 Photoreal',
  'Octane 3D',
  'Anime Makoto',
  'Dark Fantasy'
];

const aspectRatios: AspectRatio[] = ['16:9', '1:1', '9:16', '21:9'];

export const PromptStudio: React.FC = () => {
  const {
    prompt,
    setPrompt,
    negativePrompt,
    setNegativePrompt,
    selectedStyle,
    setSelectedStyle,
    aspectRatio,
    setAspectRatio,
    guidanceScale,
    setGuidanceScale,
    steps,
    setSteps,
    seed,
    setSeed,
    isGenerating,
    triggerGeneration
  } = useAppStore();

  return (
    <div className="w-96 bg-[#000033]/30 border-l border-[#00B4D8]/20 flex flex-col">
      {/* Panel Header */}
      <div className="p-4 border-b border-[#00B4D8]/20">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-[#CAF0F8]">Prompt Studio</h3>
          <Settings className="w-5 h-5 text-[#00B4D8]" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs text-[#CAF0F8] font-mono">SDXL Hyper v2</span>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        {/* Positive Prompt */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-[#00B4D8] tracking-wider">
              POSITIVE PROMPT
            </label>
            <span className="text-xs text-[#CAF0F8]/70 font-mono">
              {prompt.length} / 500 chars
            </span>
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 bg-[#000046]/50 border border-[#00B4D8]/20 rounded-lg p-3 text-sm text-[#CAF0F8] placeholder-[#CAF0F8]/50 focus:outline-none focus:border-[#00B4D8]/50 resize-none"
            placeholder="Describe your vision..."
            maxLength={500}
          />
        </div>

        {/* Negative Prompt */}
        <div>
          <label className="block text-xs font-semibold text-[#00B4D8] tracking-wider mb-2">
            NEGATIVE PROMPT
          </label>
          <textarea
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
            className="w-full h-20 bg-[#000046]/50 border border-[#00B4D8]/20 rounded-lg p-3 text-sm text-[#CAF0F8] placeholder-[#CAF0F8]/50 focus:outline-none focus:border-[#00B4D8]/50 resize-none"
            placeholder="What to avoid..."
          />
        </div>

        {/* Aesthetic Style */}
        <div>
          <label className="block text-xs font-semibold text-[#00B4D8] tracking-wider mb-2">
            AESTHETIC STYLE
          </label>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value as AestheticStyle)}
            className="w-full bg-[#000046]/50 border border-[#00B4D8]/20 rounded-lg p-3 text-sm text-[#CAF0F8] focus:outline-none focus:border-[#00B4D8]/50"
          >
            {aestheticStyles.map((style) => (
              <option key={style} value={style} className="bg-[#000046]">
                {style}
              </option>
            ))}
          </select>
        </div>

        {/* Aspect Ratio */}
        <div>
          <label className="block text-xs font-semibold text-[#00B4D8] tracking-wider mb-2">
            ASPECT RATIO
          </label>
          <div className="grid grid-cols-2 gap-2">
            {aspectRatios.map((ratio) => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio)}
                className={`p-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                  aspectRatio === ratio
                    ? 'bg-[#00B4D8] text-white'
                    : 'bg-[#000046]/50 text-[#CAF0F8] border border-[#00B4D8]/20 hover:border-[#00B4D8]/50'
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>

        {/* Generation Parameters */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#00B4D8] tracking-wider mb-2">
              GUIDANCE SCALE: {guidanceScale}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={guidanceScale}
              onChange={(e) => setGuidanceScale(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00B4D8] tracking-wider mb-2">
              STEPS: {steps}
            </label>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={steps}
              onChange={(e) => setSteps(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00B4D8] tracking-wider mb-2">
              SEED
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={seed}
                onChange={(e) => setSeed(parseInt(e.target.value) || 0)}
                className="flex-1 bg-[#000046]/50 border border-[#00B4D8]/20 rounded-lg p-2 text-sm text-[#CAF0F8] focus:outline-none focus:border-[#00B4D8]/50"
              />
              <button
                onClick={() => setSeed(Math.floor(Math.random() * 1000000))}
                className="p-2 bg-[#000046]/50 border border-[#00B4D8]/20 rounded-lg hover:border-[#00B4D8]/50 transition-colors"
              >
                <Shuffle className="w-4 h-4 text-[#00B4D8]" />
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={triggerGeneration}
          disabled={isGenerating || !prompt.trim()}
          className={`w-full p-4 rounded-lg font-semibold transition-all duration-200 ${
            isGenerating || !prompt.trim()
              ? 'bg-[#00B4D8]/30 text-[#CAF0F8]/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white hover:shadow-lg hover:shadow-[#00B4D8]/25'
          }`}
        >
          {isGenerating ? (
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>GENERATING...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>GENERATE</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};