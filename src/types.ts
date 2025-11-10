export interface Project {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  aspectRatio: number;
}

export interface Slide {
  width: number;
  height: number;
  orientation: 'horizontal' | 'vertical';
  src: string;
}
