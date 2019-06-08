---
layout: page
title: Search
permalink: /api/search
parent: API
---

### [Search Result Models](#search-result-model)
##### Search methods will return `WallpaperPagination`

```typescript
export interface WallpaperPagination {
  data: SearchWallpaper[];
  meta: Meta;
}

export interface SearchWallpaper {
  id: string;
  url: string;
  short_url: string;
  views: number;
  favorites: number;
  source: string;
  purity: Purity;
  category: Category;
  dimension_x: number;
  dimension_y: number;
  resolution: string;
  ratio: string;
  file_size: number;
  file_type: FileType;
  created_at: string;
  colors: string[];
  path: string;
  thumbs: Thumbs;
}

export enum Category {
  Anime = 'anime',
  General = 'general',
  People = 'people'
}

export enum FileType {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png'
}

export enum Purity {
  Sfw = 'sfw',
  Sketchy = 'sketchy',
  Nsfw = 'nsfw'
}

export interface Thumbs {
  large: string;
  original: string;
  small: string;
}

export interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  query: null;
}
```

---

### [Search](#search)
##### `Wallhaven.search = (config: SearchQuery): Promise`

```typescript
new Wallhaven()
  .search({
    search: 'zerotwo',
    sorting: {
      order: 'desc',
      type: SearchSortTypes.Views
    }
  })
  .then(c => console.debug(c));
```

### [Advanced Search](#advanced-search)
##### `Wallhaven.search = (config: SearchQuery): Promise`

```typescript
// Api Key enables NSFW search
new Wallhaven('your-api-key')
  .search({
    search: 'zerotwo',
    tags: [
      {
        name: 'opening',
        required: true,
        type: SearchTagType.Include
      }
    ],
    atleast: {
      x: 1920,
      y: 1080
    },
    fileType: SearchFileType.PNG,
    sorting: {
      order: 'desc',
      type: SearchSortTypes.Relevance
    }
  })
  .then(c => console.debug(c));
```

### [Wallpaper fetch randomly](#search-random)
##### `Wallhaven.random = (): Promise`

```typescript
new Wallhaven().random();
```
