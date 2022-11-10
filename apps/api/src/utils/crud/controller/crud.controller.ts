/**
 *   This Module is responsible for the web
 *   controllers end point  ( Web Layer )
 *   request , response , next  : handling
 *
 *   conrollers are compatible with react-admin
 *
 *  => Controllers with status code if accpeted
 *  --------------------------------------------
 *     getList : 200
 *     create  : 201
 *     getOne  : 200
 *     update  : 202
 *     destroy : 202
 */

// ===========================================================================

import { Request, Response, NextFunction } from "express";
import { parseQuery, setGetListHeaders } from "./controller.utils";
import { Error } from "../../error/errors.utils";
import {
  ORMGetList,
  ORMSearchList,
  ORMCreate,
  ORMGetOne,
  ORMUpdate,
  ORMDestroy,
} from "../types/crudController.types";

// ===========================================================================

const getList = (
  ormGetList: ORMGetList,
  ormSearchList: ORMSearchList,
  filterOption: any = null
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { q, limit, offset, filter, order } = parseQuery(
        req.query,
        filterOption
      );

      // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

      // search query
      if (!q) {
        const [count, rows] = await ormGetList(
          {
            filter,
            limit,
            offset,
            order,
          },
          req,
          res
        );
        setGetListHeaders(res, offset, count, rows?.length || 0);
        return res.status(200).json(rows);
      }

      // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

      const [count, rows] = await ormSearchList(
        {
          q,
          limit,
          filter,
          // offset,
          // order,
        },
        req,
        res
      );
      setGetListHeaders(res, offset, count, rows.length);
      res.status(200).json(rows);

      // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
    } catch (error) {
      next(error);
    }
  };
};

// ===========================================================================

const create = (ormCreate: ORMCreate) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const record = await ormCreate(req.body, req, res);
      res.status(201).json(record);
    } catch (error) {
      next(error);
    }
  };
};

// ===========================================================================

const getOne = (ormGetOne: ORMGetOne) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const record = await ormGetOne(Number(req.params.id), req, res);
      if (!record) {
        let [_, model, id] = req.url.split("/");
        Error("NotFound", `${req.t(model)} ${id} ${req.t("RecordsNotFound")}`);
      }
      res.status(200).json(record);
    } catch (error) {
      next(error);
    }
  };
};

// ===========================================================================

const update = (ormUpdate: ORMUpdate) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const record = await ormUpdate(Number(req.params.id), req.body, req, res);
      res.status(202).json(record);
    } catch (error) {
      next(error);
    }
  };
};

// ===========================================================================

const destroy = (ormDestroy: ORMDestroy) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ormDestroy(Number(req.params.id), req, res);
      res.status(202).json({ id: req.params.id });
    } catch (error) {
      next(error);
    }
  };
};

// ===========================================================================

export default { create, getList, getOne, update, destroy };
