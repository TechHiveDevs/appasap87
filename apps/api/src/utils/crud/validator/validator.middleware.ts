/**
 * This module aims to priovide validator middleware
 */

// ============================================================

import Ajv from "ajv";
import { Request, Response, NextFunction } from "express";
import { getEntityAJVSchema } from "./generateAjvSchema";
import { Error } from "../../error/errors.utils";

// ============================================================

const ajv = new Ajv();

// ============================================================

const validate = (_path: string) => {
  return (req: Request, _: Response, next: NextFunction) => {
    // @ts-ignore
    const schema = getEntityAJVSchema(req);

    const { params, body, method }: any = req;
    let data: any = {};

    if (method === "POST") {
      data = { ...body };
    } else if (method === "PUT") {
      data = { id: +params.id, ...body };
    } else if (method === "DELETE") {
      data = { id: +params.id };
    } else if (method === "GET" && req?.params.id) {
      data = { id: +params.id };
    } else {
      Error("ExpectationFailed", "Method is not supported");
    }

    const validateSchema: any = ajv.compile(schema);
    const valid = validateSchema(data);

    if (!valid) {
      let fieldName = validateSchema?.errors[0]?.instancePath.slice(1);
      let message = validateSchema?.errors[0]?.message;
      Error("BadRequest", `${req.t(fieldName)} ${req.t(message)}`);
    }

    next();
  };
};

// ============================================================

export default validate;
