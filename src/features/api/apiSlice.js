import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: ["jobs"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
