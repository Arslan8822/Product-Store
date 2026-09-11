"use client";

import { useMemo, useState } from "react";

import type { Product } from "@/types/product";

import SearchBar from "./SearchBar";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

interface ProductBrowserProps {
  products: Product[];
  categories: string[];
}

export default function ProductBrowser({
  products,
  categories,
}: ProductBrowserProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      result = result.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating-high") {
      result.sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SearchBar
          search={search}
          onSearchChange={setSearch}
        />

        <ProductFilter
          category={category}
          sort={sort}
          categories={categories}
          onCategoryChange={setCategory}
          onSortChange={setSort}
        />
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}