import Axios from 'axios';

/**
 * @ignore
 */
const baseUrl = 'https://wallhaven.cc/api/v1';
/**
 * @ignore
 */
export const requestInstance = (apiKey?: string) => {
  const def = Axios.create({
    baseURL: baseUrl,
    headers: apiKey ? {
      "X-API-Key": apiKey
    } : {}
  });
  return def;
};
