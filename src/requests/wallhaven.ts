import { SearchQuery, SearchSortTypes } from './search';
import { searchQuery } from './search/search';
import { wallpaperById } from './wallpaper';

/**
 * [[Wallhaven]]
 * Lib Class used for Search etc...
 *
 * ```typescript
 * const client = new Wallhaven();
 * client.random('Tokyo Ghoul') // (Optional) - Random Image by Search
 *  .then((c) => console.log(c.data.length))
 *  .catch(err => {
 *    console.error(err);
 *    throw err;
 *  });
 * ```
 */
export class Wallhaven {
  private apiKey?: string;
  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }
  /**
   * @returns Promise<WallpaperPagination>
   */
  public readonly search = (config?: SearchQuery) =>
    searchQuery(config, this.apiKey)
  /**
   * @returns Promise<Wallpaper>
   */
  public readonly wallpaperById = (id: string) =>
    wallpaperById(id, this.apiKey)
  /**
   * @returns Promise<WallpaperPagination>
   */
  public readonly random = (search?: string) =>
    searchQuery(
      {
        search: search || '',
        sorting: {
          order: 'desc',
          type: SearchSortTypes.Random
        }
      },
      this.apiKey
    )
}
