import { API_KEY, DB_NAME } from './strings';

export const CUSTOM_THEME = `/customTheme`;
export const MONGO_LAB = (collection, propertyName, item) => `https://api.mlab.com/api/1/databases/${DB_NAME}/collections/${collection}?apiKey=${API_KEY}${propertyName && item ? `&q={${propertyName}:'${item}'}&l=1` : ''}`;
