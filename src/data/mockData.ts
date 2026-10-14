import type { TimelineTrack, RenderJob } from '../types';

export const initialTracks: TimelineTrack[] = [
  {
    id: 'track-1',
    name: 'V1',
    type: 'video',
    duration: '00:05:30',
    clipTitle: 'Main Sequence A',
    active: true,
  },
  {
    id: 'track-2',
    name: 'A1',
    type: 'audio',
    duration: '00:05:30',
    clipTitle: 'Ambient Audio',
    active: false,
  },
  {
    id: 'track-3',
    name: 'VFX1',
    type: 'vfx',
    duration: '00:02:15',
    clipTitle: 'Neural Effects',
    active: false,
  },
];

export const initialRecentOutputs: RenderJob[] = [
  {
    id: 'render-1',
    name: 'Cyberpunk Portrait',
    status: 'completed',
    progress: 100,
    type: 'image',
    timestamp: '2024-03-15T10:30:00Z',
    thumbnailUrl: '/api/placeholder/100/100',
  },
  {
    id: 'render-2',
    name: 'Neural Animation',
    status: 'rendering',
    progress: 75,
    type: 'video',
    timestamp: '2024-03-15T10:25:00Z',
  },
  {
    id: 'render-3',
    name: 'Dark Fantasy Scene',
    status: 'queued',
    progress: 0,
    type: 'image',
    timestamp: '2024-03-15T10:20:00Z',
  },
];