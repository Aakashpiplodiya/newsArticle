export const API_BASE_URL = "https://newsapi.org/v2";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const TOP_HEADLINES = getApiUrl('/top-headlines?country=in');
