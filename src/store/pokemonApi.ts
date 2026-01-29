import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tyradex.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<any[], void>({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
