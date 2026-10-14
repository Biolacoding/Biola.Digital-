import { create } from 'zustand';
import type { AspectRatio, AestheticStyle, ActiveTool, StudioTab, TimelineTrack, RenderJob } from '../types';
import { initialTracks, initialRecentOutputs } from '../data/mockData';

interface AppState {
  // Navigation
  activeTab: StudioTab;
  setActiveTab: (tab: StudioTab) => void;
  activeTool: ActiveTool;
  setActiveTool: (tool: ActiveTool) => void;

  // Prompts & Generation
  prompt: string;
  setPrompt: (p: string) => void;
  negativePrompt: string;
  setNegativePrompt: (np: string) => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (ar: AspectRatio) => void;
  selectedStyle: AestheticStyle;
  setSelectedStyle: (st: AestheticStyle) => void;
  guidanceScale: number;
  setGuidanceScale: (gs: number) => void;
  steps: number;
  setSteps: (s: number) => void;
  seed: number;
  setSeed: (sd: number) => void;

  // Inpaint & Canvas
  inpaintMaskActive: boolean;
  toggleInpaintMask: () => void;
  zoomLevel: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  canvasImage: string;
  setCanvasImage: (url: string) => void;

  // Video Sequencer
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: string;
  tracks: TimelineTrack[];
  
  // Render & Queue
  isGenerating: boolean;
  triggerGeneration: () => void;
  renderQueue: RenderJob[];
  isQueueModalOpen: boolean;
  setQueueModalOpen: (open: boolean) => void;
  tokens: number;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation
  activeTab: 'picture',
  setActiveTab: (tab) => set({ activeTab: tab }),
  activeTool: 'brush',
  setActiveTool: (tool) => set({ activeTool: tool }),

  // Prompts & Generation
  prompt: '',
  setPrompt: (p) => set({ prompt: p }),
  negativePrompt: '',
  setNegativePrompt: (np) => set({ negativePrompt: np }),
  aspectRatio: '16:9',
  setAspectRatio: (ar) => set({ aspectRatio: ar }),
  selectedStyle: 'Cyberpunk Neon',
  setSelectedStyle: (st) => set({ selectedStyle: st }),
  guidanceScale: 7.5,
  setGuidanceScale: (gs) => set({ guidanceScale: gs }),
  steps: 50,
  setSteps: (s) => set({ steps: s }),
  seed: 42,
  setSeed: (sd) => set({ seed: sd }),

  // Inpaint & Canvas
  inpaintMaskActive: false,
  toggleInpaintMask: () => set((state) => ({ inpaintMaskActive: !state.inpaintMaskActive })),
  zoomLevel: 100,
  zoomIn: () => set((state) => ({ zoomLevel: Math.min(state.zoomLevel + 25, 400) })),
  zoomOut: () => set((state) => ({ zoomLevel: Math.max(state.zoomLevel - 25, 25) })),
  resetZoom: () => set({ zoomLevel: 100 }),
  canvasImage: '/api/placeholder/800/600',
  setCanvasImage: (url) => set({ canvasImage: url }),

  // Video Sequencer
  isPlaying: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  currentTime: '00:00:05:15',
  tracks: initialTracks,

  // Render & Queue
  isGenerating: false,
  triggerGeneration: () => {
    set({ isGenerating: true });
    // Simulate generation process
    setTimeout(() => {
      set({ isGenerating: false });
    }, 3000);
  },
  renderQueue: initialRecentOutputs,
  isQueueModalOpen: false,
  setQueueModalOpen: (open) => set({ isQueueModalOpen: open }),
  tokens: 2847293,
}));