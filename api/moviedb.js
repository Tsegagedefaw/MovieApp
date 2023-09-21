import axios from "axios";
import { apiKey } from "../constants";

// End-point
const url = "https://imdb8.p.rapidapi.com/title";

const topRatedMovieEndpoint = `${url}/get-top-rated-movies?api_key=${apiKey}`;
const upComingMovieEndpoint = `${url}/get-top-rated-movies?api_key=${apiKey}`;
const trandingMovieEndpoint = `https://imdb8.p.rapidapi.com/title/get-most-popular-movies?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const headers = {
    "X-RapidAPI-Key": "151ced330amsh7ef7ffc8b23e185p16deabjsn78f245156771",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  };
  const option = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
    headers: headers,
  };

  try {
    const response = await axios.request(option);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
};
export const fetchTrandingMovie = () => {
  return apiCall(trandingMovieEndpoint);
};
export const upComingTrandingMovie = () => {
  return apiCall(upComingMovieEndpoint);
};
export const topRatedTrandingMovie = () => {
  return apiCall(topRatedMovieEndpoint);
};
