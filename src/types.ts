export interface Project {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string; // Optional poster image for videos
  aspectRatio: number;
}

export interface Slide {
  width: number;
  height: number;
  orientation: 'horizontal' | 'vertical';
  src: string;
}
