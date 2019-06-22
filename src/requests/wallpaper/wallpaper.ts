import { requestInstance } from "../base/request";
import { WallpaperData, Wallpaper } from "./models/wallpaper";

export const wallpaperById = (id: string, apiKey?: string): Promise<Wallpaper> => {
    const req = requestInstance(apiKey);
    return req.get<WallpaperData>('/w/:id'
    .replace(':id', id)).then(c => Promise.resolve(c.data.data));
};
