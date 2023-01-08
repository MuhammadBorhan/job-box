import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    // baseUrl: "https://job-box-server-muhammadborhan.vercel.app",
  }),
  tagTypes: ["jobs", "job"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
