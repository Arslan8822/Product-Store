"use client";

interface ProductFiltersProps {
  category: string;
  sort: string;
  categories: string[];
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function ProductFilters({
  category,
  sort,
  categories,
  onCategoryChange,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-medium"
        >
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) =>
            onCategoryChange(event.target.value)
          }
          className="w-full rounded-md border px-4 py-2 "
        >
          <option value="all">
            All Categories
          </option>

          {categories.map((categoryName) => (
            <option
              key={categoryName}
              value={categoryName}
            >
              {categoryName}
            </option>
          ))}
        </select>
      </div>

      {/* Sorting */}
      <div>
        <label
          htmlFor="sort"
          className="mb-2 block text-sm font-medium"
        >
          Sort By
        </label>

        <select
          id="sort"
          value={sort}
          onChange={(event) =>
            onSortChange(event.target.value)
          }
          className="w-full rounded-md border px-4 py-2"
        >
          <option value="default">
            Default
          </option>

          <option value="price-low">
            Price: Low → High
          </option>

          <option value="price-high">
            Price: High → Low
          </option>

          <option value="rating-high">
            Rating: High → Low
          </option>
        </select>
      </div>
    </div>
  );
}