/**
 * This Module aims to Provide a singleton instance module
 * to export modules and import from only this file
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

import crudRouter from "./router/crud.router";
import prismaOrm from "./orms/prisma/prisma.orm";
import {
  CRUD as crudType,
  EntityCrud as crudControllerType,
  CustomCrudController as customRoutesController,
} from "./types/crudController.types";

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const prismaCrud = prismaOrm;
export const crud = crudRouter;
export interface Crud extends crudType {}
export interface EntityCrud extends crudControllerType {}
export interface CustomCrudController extends customRoutesController {}

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
