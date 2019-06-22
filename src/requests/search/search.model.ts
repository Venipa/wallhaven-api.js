/**
 * Enum to determine @see SearchTag.type
 * @property {SearchTagType.Fuzzy} Fuzzy /default) - search fuzzily for a tag/keyword
 * @property {SearchTagType.DoInclude} DoInclude - Must have described Tag Name
 * @property {SearchTagType.DoNotInclude} DoNotInclude - Must not have described Tag Name
 */
export enum SearchTagType {
    Include,
    Exclude,
    Fuzzy
}
export enum SearchSortTypes {
    DateAdded = 'date_added',
    Relevance = 'relevance',
    Random = 'random',
    Views = 'views',
    Favorites = 'favorites',
    Toplist = 'toplist'
}
interface SearchTag {
    required?: boolean;
    type: SearchTagType;
    name: string;
}
interface SearchCategories {
    showGeneral: boolean;
    showAnime?: boolean;
    showPeople?: boolean;
}
export interface SearchPurity {
    sfw: boolean;
    sketchy?: boolean;
    nsfw?: boolean;
}
/**
 * self explained
 * @param {number} x - width
 * @param {number} y - height
 */
interface SearchResolution {
    x: number;
    y: number;
}
export enum SortRange {
    OneDay = '1d',
    ThreeDays = '3d',
    OneWeek = '1w',
    OneMonth = '1M',
    ThreeMonths = '3M',
    SixMonths = '6M',
    OneYear = '1y'
    // '1d' | '3d' | '1w' | '1M' | '3M' | '6M' | '1y'
}
interface SearchSorting {
    type: SearchSortTypes;
    order: 'asc' | 'desc';
}

export enum SearchFileType {
    PNG = 'png',
    JPG = 'jpg'
}

/**
 * self explained ex:. 16:9, x = 16, y = 9
 * @param {number} x - y Ratio ex:. 9
 * @param {number} y - x Ratio ex:. 16
 */
interface Ratio { x: number; y: number; }

/**
 * SearchQuery Model for the Search Method
 * @param {string} search - search by string (fuzzy search will be used for that)
 * @param {SearchTag[]?} tags - Tag Filtering
 * @param {SearchCategories?} categories - Set categories to filter for
 * @param {SearchPurity?} purity - Set purtiy to filter for
 * @param {SearchSorting?} sorting - Set sorting filter to get either the latest, popular, your favorites or randomly picked
 * @param {SortRange?} topRange - filter by created_at on toplist sorting
 * @param {SearchResolution?} atleast - Minimum resolution allowed
 * @param {SearchResolution[]?} resolutions - List of exact wallpaper resolutions Single resolution allowed
 * @param {Ratio[]?} ratio - List of aspect ratios, Single ratio allowed
 * @param {string[]?} colors - Search by color
 * @param {number} page - Pagination, defaults to 0
 */
export interface SearchQuery {
    search: string;
    tags?: SearchTag[];
    categories?: SearchCategories;
    purity?: SearchPurity;
    sorting?: SearchSorting;
    topRange?: SortRange;
    atleast?: SearchResolution;
    resolutions?: SearchResolution[];
    ratios?: Ratio[];
    colors?: string[];
    page?: number;
    fileType?: SearchFileType;
}
