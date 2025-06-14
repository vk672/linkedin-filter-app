// components/FilterChips.tsx

type FilterType = "job_title" | "company" | "location";

interface Filter {
  id: string;
  name: string;
  type: FilterType;
  include: boolean;
}

interface Props {
  filters: Filter[];
  onRemove: (id: string, type: FilterType) => void;
}

export default function FilterChips({ filters, onRemove }: Props) {
  return (
    <div className="space-y-2">
      {filters.length === 0 && (
        <p className="text-gray-400">No filters selected.</p>
      )}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <div
            key={`${filter.id}-${filter.type}`}
            className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 border shadow ${
              filter.include
                ? "bg-green-700 border-green-500"
                : "bg-red-700 border-red-500"
            }`}
          >
            <span className="capitalize">
              {filter.type.replace("_", " ")}: {filter.name}
            </span>
            <button
              onClick={() => onRemove(filter.id, filter.type)}
              className="text-white hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
