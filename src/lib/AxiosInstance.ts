import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/';

export const api = axios.create({
  baseURL: BASE_URL
});

export const buildQueryString = ( params: string|undefined): string => {
  console.log("BASE_URL : "+ process.env.REACT_APP_API_BASE_URL);
  const queryString = new URLSearchParams();
  if (params) {
    queryString.append('searchText', params);
  }
  return queryString.toString();
};
