import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_EXERCISE_KEY;

export const exerciseApi = createApi({
  reducerPath: "exerciseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "exercisedb.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllExercise: builder.query({
      query: () => `exercises`,
    }),
    getBodyPartExercise: builder.query({
      query: (bodyPart) => `exercises/bodyPart/${bodyPart}`,
    }),
    getExerciseDetails: builder.query({
      query: (id) => `exercises/exercise/${id}`,
    }),
    getTargetMuscleExercise: builder.query({
      query: (targetMuscle) => `exercises/target/${targetMuscle}`,
    }),
    getEquipmentExercise: builder.query({
      query: (equipment) => `exercises/equipment/${equipment}`,
    }),
  }),
});

export const {
  useLazyGetAllExerciseQuery,
  useLazyGetBodyPartExerciseQuery,
  useLazyGetExerciseDetailsQuery,
  useLazyGetTargetMuscleExerciseQuery,
  useLazyGetEquipmentExerciseQuery,
} = exerciseApi;
