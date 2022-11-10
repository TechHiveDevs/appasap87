import { PrismaClient } from "@prisma/client";

// =================================================================

const prisma: any = new PrismaClient({});

// =================================================================

export type PrismaModelFieldType =
  | "String"
  | "Boolean"
  | "Int"
  | "BigInt"
  | "Float"
  | "Decimal"
  | "DateTime"
  | "JSON"
  | any;

// =================================================================

export type PrismaModelField = {
  name: string;
  kind: "scalar" | "enum" | any;
  isList: boolean;
  isRequired: boolean;
  isUnique: boolean;
  isId: boolean;
  isReadOnly: boolean;
  hasDefaultValue: boolean;
  type: PrismaModelFieldType;
  isGenerated: boolean;
  isUpdatedAt: boolean;
};

// =================================================================

/**
 * Get All database models names
 * @returns array of models names
 */
export const getPrismaModels = (): Array<string> => {
  return prisma._baseDmmf.datamodel.models.map(({ name }: any) =>
    name.toLowerCase()
  );
};

// =================================================================

/**
 * Get All Prisma Model Fields
 * @param {string} modelName
 * @returns array of model fields
 */
export const getPrismaModelFields = (
  modelName: string
): Array<PrismaModelField> => {
  const modelNameCapitalized =
    modelName?.charAt(0)?.toUpperCase() + modelName?.slice(1);

  return prisma._baseDmmf.datamodel.models.find(
    ({ name }: { name: string }) => name === modelNameCapitalized
  )?.fields;
};

// =================================================================
