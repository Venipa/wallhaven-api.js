export interface WallpaperData {
  data: Wallpaper;
}

export interface Wallpaper {
  id: string;
  url: string;
  short_url: string;
  uploader: Uploader;
  views: number;
  favorites: number;
  source: string;
  purity: string;
  category: string;
  dimension_x: number;
  dimension_y: number;
  resolution: string;
  ratio: string;
  file_size: number;
  file_type: string;
  created_at: string;
  colors: string[];
  path: string;
  thumbs: Thumbs;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  alias: string;
  category_id: number;
  category: string;
  purity: string;
  created_at: string;
}

export interface Thumbs {
  large: string;
  original: string;
  small: string;
}

export interface Uploader {
  username: string;
  group: string;
  avatar: { [key: string]: string };
}
