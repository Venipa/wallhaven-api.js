import { SearchQuery, SearchTagType } from './search.model';
import { WallpaperPagination } from './models';
import { requestInstance } from '../base/request';

/**
 * @ignore
 */
export const parseQuery = (config?: SearchQuery) => {
  if (!config) {
    return {};
  }
  let q = '';
  q += config.search;
  if (config.tags && config.tags.length > 0) {
    config.tags.forEach(x => {
      if (q.trim().length > 0 && !q.endsWith(' ')) {
        q += ' ';
      }
      q += `${
        x.required
          ? x.type === SearchTagType.Include
            ? '+'
            : x.type === SearchTagType.Exclude
            ? '-'
            : x.type === SearchTagType.Fuzzy
            ? ''
            : ''
          : x.type === SearchTagType.Exclude
          ? '-'
          : ''
      }${x.name}`;
    });
  }
  const categories = config.categories
    ? `${config.categories.showGeneral ? '1' : '0'}${
        config.categories.showAnime ? '1' : '0'
      }${config.categories.showPeople ? '1' : '0'}`
    : undefined;
  const purity = config.purity
    ? `${config.purity.sfw ? '1' : '0'}${config.purity.sketchy ? '1' : '0'}${
        config.purity.nsfw ? '1' : '0'
      }`
    : undefined;
  const sorting = config.sorting ? config.sorting.type : undefined;
  const order = config.sorting ? config.sorting.order || 'desc' : undefined;
  const topRange = config.topRange ? config.topRange : undefined;
  const atleast = config.atleast
    ? `${config.atleast.x}x${config.atleast.y}`
    : undefined;
  const resolutions =
    config.resolutions && config.resolutions.length > 0
      ? config.resolutions.map(x => `${x.x}x${x.y}`)
      : undefined;
  const ratios =
    config.ratios && config.ratios.length > 0
      ? config.ratios.map(x => `${x.x}:${x.y}`)
      : undefined;
  const colors =
    config.colors && config.colors.length > 0 ? config.colors : undefined;
  const page: number = config.page || 1;

  const initConfig: any = {
    q,
    categories,
    purity,
    sorting,
    order,
    topRange,
    atleast,
    resolutions,
    ratios,
    colors,
    page
  };

  const parsedConfig = initConfig;
  return parsedConfig;
};

/**
 * @ignore
 */
export const searchQuery = (config?: SearchQuery, apiKey?: string) => {
  const req = requestInstance(apiKey);
  return req
    .get<WallpaperPagination>('/search', {
      params: {
        ...parseQuery(config)
      }
    })
    .then(c => Promise.resolve(c.data));
};
