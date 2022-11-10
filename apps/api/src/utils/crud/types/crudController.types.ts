/**
 * This Module aims to define
 * orm / curd controller funtions
 * @author Mario
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import { Request, Response, NextFunction } from "express";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type ORMGetList = (
  args: {
    filter: Object;
    limit: number;
    offset: number;
    order: any;
  },
  req: Request,
  res: Response
) => Promise<[count: number, rows: Array<Object>]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type ORMSearchList = (
  args: {
    q: string;
    filter: Object;
    limit: number;
    // offset: number;
    // order: "asc" | "desc" | null;
  },
  req: Request,
  res: Response
) => Promise<[count: number, rows: Array<Object>]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type ORMCreate = (
  payload: Object,
  req: Request,
  res: Response
) => Promise<Object>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type ORMGetOne = (
  id: number,
  req: Request,
  res: Response
) => Promise<Object>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type ORMUpdate = (
  id: number,
  payload: Object,
  req: Request,
  res: Response
) => Promise<Object>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type ORMDestroy = (
  id: number,
  req: Request,
  res: Response
) => Promise<number | null>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export interface EntityCrud {
  getList: (
    args: {
      filter: Object;
      limit: number;
      offset: number;
      order: any;
    },
    req: Request,
    res: Response
  ) => Promise<[count: number, rows: Array<Object>]>;
  search: (
    args: {
      q: string;
      filter: Object;
      limit: number;
      // offset: number;
      // order: any;
    },
    req: Request,
    res: Response
  ) => Promise<[count: number, rows: Array<Object>]>;
  getOne: (id: number, req: Request, res: Response) => Promise<Object>;
  create: (payload: Object, req: Request, res: Response) => Promise<Object>;
  update: (
    id: number,
    payload: Object,
    req: Request,
    res: Response
  ) => Promise<Object>;
  destroy: (id: number, req: Request, res: Response) => Promise<number | null>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type CustomCrudController = Array<{
  method: "get" | "post" | "put" | "delete" | "patch";
  path: string;
  controller: (req: Request, res: Response, next: NextFunction) => any;
}>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export interface CRUD {
  path: string;
  crudController: EntityCrud;
  customRoutesController?: Array<{
    method: "get" | "post" | "put" | "delete" | "patch";
    path: string;
    controller: (req: Request, res: Response, next: NextFunction) => any;
  }> | null;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
