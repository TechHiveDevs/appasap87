/**
 * This Wonderful Module
 * @author MarioMonir
 */

// ====================================================================

import { PrismaClient } from "@prisma/client";
import {
  ORMCreate,
  ORMUpdate,
  ORMGetList,
  ORMGetOne,
  ORMDestroy,
  ORMSearchList,
  EntityCrud,
} from "../../types/crudController.types";

// ====================================================================

const prisma: any = new PrismaClient({
  log: [
    "info",
    // "query",
    "error",
    "warn",
  ],
  errorFormat: "minimal",
});

// ====================================================================

/**
 * Create one record for a given model
 * @param model
 * @returns
 */
const create = (model: string): ORMCreate => {
  return async (data: any) => prisma[model]?.create({ data });
};

// ====================================================================

/**
 * Get List of records for a given model
 * takes model name and pass the data to the prisma orm create
 * @param model
 * @returns
 */
const getList = (model: string): ORMGetList => {
  return async ({ filter, limit = 10, offset = 0, order }: any) => {
    const count = prisma[model].count();
    const rows = prisma[model].findMany({
      where: filter,
      skip: offset,
      take: limit,
      orderBy: order,
    });
    return Promise.all([count, rows]);
  };
};

// ====================================================================

/**
 * Get one unique record for a given model
 * @param model
 * @returns
 */
const getOne = (model: string): ORMGetOne => {
  return async (id: number) => {
    return prisma[model]?.findUnique({ where: { id } });
  };
};

// ====================================================================

/**
 * Update one unique record for a given model
 * @param model
 * @returns
 */
const update = (model: string): ORMUpdate => {
  return async (id: number, data: any) => {
    return prisma[model].update({ where: { id }, data });
  };
};
// ====================================================================

/**
 * Delete one unique record for a given model
 * @param model
 * @returns
 */
const destroy = (model: string): ORMDestroy => {
  return async (id: number) => {
    return prisma[model].delete({ where: { id } });
  };
};

// ====================================================================

/**
 * Search and Get List of records for a given model
 * @param model
 * @returns
 */
const search = (model: string): ORMSearchList => {
  return async ({ q, limit }: any) => {
    let entityFields = prisma._dmmf.datamodel.models?.find(
      ({ name }: any) => name.toLowerCase() === model
    )?.fields;

    let filteredFields = entityFields
      ?.filter(({ type }: any) => type === "String")
      ?.map(({ name }: any) => ({
        [name]: { contains: q },
      })) || [{}];

    // console.dir({ filteredFields }, { depth: Infinity });

    let where = { OR: [...filteredFields] };

    return Promise.all([
      prisma[model]?.count(),
      prisma[model].findMany({
        where,
        take: limit,
      }),
    ]);
  };
};

// ====================================================================

const prismaCrud = (model: string): EntityCrud => ({
  create: create(model),
  getList: getList(model),
  getOne: getOne(model),
  update: update(model),
  destroy: destroy(model),
  search: search(model),
});

// ====================================================================

export default prismaCrud;
