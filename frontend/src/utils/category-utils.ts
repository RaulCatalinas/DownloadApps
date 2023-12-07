// Constants
import { VALID_CATEGORIES } from "@constants/categories";

// Types
import type { Category } from "@types";

export function isCategory(value: string): value is Category {
  return VALID_CATEGORIES.includes(value);
}
