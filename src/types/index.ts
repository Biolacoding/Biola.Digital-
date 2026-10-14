export type AspectRatio = '16:9' | '1:1' | '9:16' | '21:9';

export type AestheticStyle =
  | 'Cyberpunk Neon'
  | 'Midjourney v6 Photoreal'
  | 'Octane 3D'
  | 'Anime Makoto'
  | 'Dark Fantasy';

export type ActiveTool =
  | 'brush'
  | 'inpaint'
  | 'wand'
  | 'layers'
  | 'crop'
  | 'mask'
  | 'transform'
  | 'settings';

export type StudioTab = 'picture' | 'photoshop' | 'video';

export interface TimelineTrack {
  id: string;
  name: string;
  type: 'video' | 'audio' | 'vfx';
  duration: string;
  clipTitle: string;
  active: boolean;
}

export interface RenderJob {
  id: string;
  name: string;
  status: 'queued' | 'rendering' | 'completed' | 'failed';
  progress: number;
  type: 'image' | 'video';
  timestamp: string;
  thumbnailUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  updatedAt: string;
  type: 'image' | 'video';
  previewUrl: string;
}