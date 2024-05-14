import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const rapidApiKey = import.meta.env.VITE_RAPID_API_YOUTUBE_KEY;

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-search-and-download.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "youtube-search-and-download.p.rapidapi.com"
      );

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getExerciseVideos: builder.query({
      query: (name) => `/search?query=${name} exercise`,
    }),
  }),
});

export const { useLazyGetExerciseVideosQuery } = youtubeApi;
