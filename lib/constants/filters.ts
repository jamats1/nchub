// ============================================
// Product Attribute Constants
// Shared between frontend filters and Sanity schema
// ============================================

export const COLORS = [
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "grey", label: "Grey" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "oak", label: "Oak" },
  { value: "walnut", label: "Walnut" },
  { value: "natural", label: "Natural" },
] as const;

export const MATERIALS = [
  { value: "wood", label: "Wood" },
  { value: "metal", label: "Metal" },
  { value: "plastic", label: "Plastic" },
  { value: "fabric", label: "Fabric" },
  { value: "cotton", label: "Cotton" },
  { value: "leather", label: "Leather" },
  { value: "glass", label: "Glass" },
  { value: "ceramic", label: "Ceramic" },
] as const;

export const SORT_OPTIONS = [
  { value: "name", label: "Name (A-Z)" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "relevance", label: "Relevance" },
] as const;

// Type exports
export type ColorValue = (typeof COLORS)[number]["value"];
export type MaterialValue = (typeof MATERIALS)[number]["value"];
export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

// ============================================
// Sanity Schema Format Exports
// Format compatible with Sanity's options.list
// ============================================

/** Colors formatted for Sanity schema options.list */
export const COLORS_SANITY_LIST = COLORS.map(({ value, label }) => ({
  title: label,
  value,
}));

/** Materials formatted for Sanity schema options.list */
export const MATERIALS_SANITY_LIST = MATERIALS.map(({ value, label }) => ({
  title: label,
  value,
}));

/** Color values array for zod enums or validation */
export const COLOR_VALUES = COLORS.map((c) => c.value) as [
  ColorValue,
  ...ColorValue[],
];

/** Material values array for zod enums or validation */
export const MATERIAL_VALUES = MATERIALS.map((m) => m.value) as [
  MaterialValue,
  ...MaterialValue[],
];
