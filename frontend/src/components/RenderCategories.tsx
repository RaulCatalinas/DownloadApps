// Types
import type { Categories } from "@categories-types";
import type { Category } from "@types";

// CSS
import "@css/render-categories.css";

// Utils
import { isCategory } from "@utils/category-utils";

interface RenderCategoriesProps {
  categories: Categories[]
  setCategory: (category: Category) => void
}

export default function RenderCategories({ categories, setCategory }: RenderCategoriesProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    
    if (isCategory(value)) setCategory(value)
  }

  return (
    <div className="select-container">
      <select className="custom-select" onChange={handleChange}>
        <option value="All">All</option>
        {
          categories.map(({ attributes, id }) => (
            <option key={id} value={attributes.name}>{attributes.name}</option>
          ))
        }
      </select>
    </div>
  )
}