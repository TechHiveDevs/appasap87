import { stringify } from "query-string";

// =================================================================

const endpoints = (builder: any) => ({
  // ------------------------------------------------

  login: builder.mutation({
    query: ({ email, password }: any) => ({
      url: "/oauth/login",
      method: "POST",
      body: { email, password },
    }),
  }),

  // ------------------------------------------------

  register: builder.mutation({
    query: (body: Object) => ({
      url: "/oauth/register",
      method: "POST",
      body,
    }),
  }),

  // ------------------------------------------------

  me: builder.query({
    query: () => ({
      url: "/oauth/me",
      method: "GET",
    }),
  }),

  // ------------------------------------------------

  create: builder.mutation({
    query: ({ entity, body }: any) => ({
      url: `/${entity}`,
      method: "POST",
      body,
    }),
  }),

  // ------------------------------------------------

  getList: builder.query({
    query: ({ entity, filter }: any) => {
      const query = {
        // sort: JSON.stringify(["id", sortBy || "ASC"]),
        // range: JSON.stringify([rangeStart, rangeEnd]),
        filter: JSON.stringify(filter),
      };
      const queryParams = stringify(query);
      const urlQuery = queryParams ? `?${queryParams}` : "";
      const url = `/${entity}/${urlQuery}`;
      return { url, method: "GET" };
    },
  }),

  // ------------------------------------------------

  getOne: builder.query({
    query: ({ entity, id }: any) => ({
      url: `/${entity}/${id}`,
      method: "GET",
    }),
  }),

  // ------------------------------------------------

  update: builder.mutation({
    query: ({ entity, id, body }: any) => ({
      url: `/${entity}/${id}`,
      method: "PUT",
      body,
    }),
  }),

  // ------------------------------------------------

  deleteOne: builder.query({
    query: ({ entity, id }: any) => ({
      url: `/${entity}/${id}`,
      method: "DELETE",
    }),
  }),

  // ------------------------------------------------

  search: builder.query({
    query: ({ entity, filter }: any) => {
      const query = {
        // sort: JSON.stringify(["id", sortBy || "ASC"]),
        // range: JSON.stringify([rangeStart, rangeEnd]),
        filter: JSON.stringify(filter),
      };
      const url = `/${entity}/?${stringify(query)}`;
      return { url, method: "GET" };
    },
  }),

  // ------------------------------------------------
});

// =============================================================

export default endpoints;
