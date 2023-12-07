// React
import { useMemo, useState } from "react";

// Types
import type { Apps } from "@apps-types";
import type { Category } from "@types";

interface UseAppFilterProps {
  apps: Apps[];
}

export function useAppFilter({ apps }: UseAppFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredApps = useMemo(() => {
    if (selectedCategory === "All") return apps;
    else {
      return [...apps].filter(({ attributes }) => {
        const { data: categoryData } = attributes.categories;

        return categoryData.some(
          (category) => category.attributes.name === selectedCategory
        );
      });
    }
  }, [selectedCategory, apps]);

  const setCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return { filteredApps, setCategory };
}
