/**
 *
 */
// --------------------------------------------------------

import { PrismaModelField } from "../orms/prisma/prisma.types";
import { getPrismaModelFields } from "../orms/prisma/prisma.utils";

// --------------------------------------------------------

export type Method = "GET" | "POST" | "PUT" | "DELETE";

// --------------------------------------------------------

export const methods: Array<Method> = ["GET", "POST", "PUT", "DELETE"];

// --------------------------------------------------------

export const methodPermissions: any = {
  GET: "read",
  POST: "create",
  PUT: "update",
  DELETE: "delete",
};

// =================================================================

const prismaTypeToAjvType: any = {
  Int: "integer",
  String: "string",
  Boolean: "boolean",
  Float: "number",
  DateTime: "timestamp",
};

// =================================================================

const generateGetOneSchema = (): Object => {
  return {
    type: "object",
    properties: {
      id: { type: "integer" },
    },
    required: ["id"],
  };
};

// =================================================================

const generateCreateSchema = (fields: Array<PrismaModelField>): Object => {
  const schema: any = {
    type: "object",
    properties: {},
    required: [],
  };
  fields?.map(
    ({ name, kind, type, isRequired, hasDefaultValue }: PrismaModelField) => {
      if (
        kind === "scalar" &&
        !hasDefaultValue &&
        isRequired &&
        type !== "DateTime"
      ) {
        schema.properties[name] = { type: prismaTypeToAjvType[type] };
        schema.required.push(name);
      }
    }
  );
  return schema;
};

// =================================================================

const generateUpdateSchema = (fields: Array<PrismaModelField>): Object => {
  const schema: any = {
    type: "object",
    properties: {
      id: { type: "integer" },
    },
    required: ["id"],
  };

  fields?.map(
    ({ name, kind, type, isRequired, hasDefaultValue }: PrismaModelField) => {
      if (
        kind === "scalar" &&
        !hasDefaultValue &&
        isRequired &&
        type !== "DateTime"
      ) {
        schema.properties[name] = { type: prismaTypeToAjvType[type] };
        // TODO: check on of them and handle the error
        // schema.anyOf.push({ required: [`${name}`] });
      }
    }
  );
  return schema;
};

// =================================================================

const generateDeleteSchema = (): Object => {
  return {
    type: "object",
    properties: {
      id: { type: "integer" },
    },
    required: ["id"],
  };
};

// =================================================================

const generateAJVSchema = (
  fields: Array<PrismaModelField>,
  method: Method,
  params: any
): Object => {
  if (method === "POST") {
    return generateCreateSchema(fields);
  } else if (method === "PUT") {
    return generateUpdateSchema(fields);
  } else if (method === "DELETE") {
    return generateDeleteSchema();
  } else if (method === "GET" && params?.id) {
    return generateGetOneSchema();
  }
  return {};
};

// =================================================================

/**
 * Get Model Schema
 * @param modelName
 */
export const getEntityAJVSchema = ({
  entityName: modelName,
  method,
  params,
}: any) => {
  let fields = getPrismaModelFields(modelName);
  return generateAJVSchema(fields, method, params);
};

// =================================================================
