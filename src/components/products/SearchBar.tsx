"use client";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  search,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="mb-2 block text-sm font-medium"
      >
        Search Products
      </label>

      <input
        id="search"
        type="text"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search by product title..."
        className="w-full rounded-md border px-4 py-2 outline-none focus:ring-2"
      />
    </div>
  );
}