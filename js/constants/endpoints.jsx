import { API_KEY, DB_NAME } from './strings.jsx';

export const CUSTOM_THEME = `/customTheme`;
export const MONGO_LAB = (collection) => `https://api.mlab.com/api/1/databases/${DB_NAME}/collections/${collection}?apiKey=${API_KEY}`;
