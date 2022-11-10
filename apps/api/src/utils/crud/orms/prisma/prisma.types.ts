/**
 * Prisma Types
 */

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
  isGenerated: Boolean;
  isUpdatedAt: boolean;
};

// =================================================================

export type Method = "GET" | "POST" | "PUT" | "DELETE";

// =================================================================
