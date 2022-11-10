import { Request } from "express";
import { getPrismaModels } from "../../../crud/orms/prisma/prisma.utils";
import {
  methods,
  methodPermissions,
} from "../../../crud/validator/generateAjvSchema";
import { Error } from "../../../error/errors.utils";

// -------------------------------------------------------------------

/**
 * Check if User is authorized to perform action
 * @param req: Express Request
 * @returns boolean: true if permission is granted
 */
export const checkPermissions = (req: Request) => {
  const { user, path, method }: any = req;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  const entityName = path.split("/")[1];
  const models = getPrismaModels();
  const permission = `${methodPermissions[method]}:${entityName}`;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  const isEntityMethod = methods?.includes(method);
  const isEntityModel = models?.includes(entityName);
  const isNotPermitted = !user?.permissions?.includes(permission);

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  if (isEntityMethod && isEntityModel && isNotPermitted) {
    // Has No Permissions for this resource method
    Error("Forbidden");
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  // @ts-ignore
  req.entityName = entityName;

  // @ts-ignore
  // getEntityAJVSchema(entityName, req.method);

  return true;
};

// -------------------------------------------------------------------
