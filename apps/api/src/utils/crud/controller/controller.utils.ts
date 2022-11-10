import mapValues from "lodash/mapValues";
import { Response } from "express";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Get Filter
 * @param filter
 * @param filtersOption
 * @returns
 */
const getFilter = (filter: any, filtersOption: any) =>
  mapValues(filter, (value: any, key: any) => {
    if (Array.isArray(value)) {
      return { in: value };
    }

    if (filtersOption && filtersOption[key]) {
      return filtersOption[key](value);
    }

    return value;
  });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Parse Sort
 * @param sort
 * @returns
 */
const parseSort = (sort: any) => {
  if (!sort) return {};
  let [key, value] = JSON.parse(sort);
  return { [key]: value.toLowerCase() };
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Parse Query
 * @param query
 * @param filtersOption
 * @returns
 */
export const parseQuery = (query: any, filtersOption: any) => {
  const { range, sort, filter } = query;
  const [from, to] = range ? JSON.parse(range) : [0, 100];
  const { q, ...filters } = JSON.parse(filter || "{}");

  return {
    offset: from,
    limit: to - from + 1,
    filter: getFilter(filters, filtersOption),
    order: parseSort(sort),
    q,
  };
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Set Expose Headers
 * @param res
 * @returns
 */
export const setExposeHeaders = (res: Response) => {
  const rawValue = res.getHeader("Access-Control-Expose-Headers") || "";

  if (typeof rawValue !== "string") return;

  const headers = new Set(
    rawValue
      .split(",")
      .map((header) => header.trim())
      .filter((header) => Boolean(header))
  );

  headers.add("Content-Range");
  headers.add("X-Total-Count");
  res.header("Access-Control-Expose-Headers", [...headers].join(", "));
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Set Get List Headers
 * @param res
 * @param offset
 * @param total
 * @param rowsCount
 */
export const setGetListHeaders = (
  res: Response,
  offset: any,
  total: any,
  rowsCount: any
) => {
  setExposeHeaders(res);
  res.header("Content-Range", `${offset}-${offset + rowsCount}/${total}`);
  res.header("X-Total-Count", `${total}`);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
