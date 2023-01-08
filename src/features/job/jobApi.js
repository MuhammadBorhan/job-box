import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
    apply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
    }),
    question: builder.mutation({
      query: (data) => ({
        url: "/query",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["job"],
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "/reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["job"],
    }),
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
      providesTags: ["job"],
      // invalidatesTags: ["jobs"], // new used
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ["job"],
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useApplyMutation,
  useGetAppliedJobsQuery,
  useQuestionMutation,
  useReplyMutation,
} = jobApi;
