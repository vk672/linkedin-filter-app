type FilterType = "job_title" | "company" | "location";

interface Filter {
  id: string;
  name: string;
  type: FilterType;
  include: boolean;
}

interface Props {
  type: FilterType;
  onSelect: (filter: Filter) => void;
}

export default function FilterInput({ type, onSelect }: Props) {
  const handleSelect = () => {
    onSelect({
      id: "1",
      name: "Example",
      type,
      include: true,
    });
  };

  return (
    <div>
      <p>{type}</p>
      <button onClick={handleSelect}>Add Filter</button>
    </div>
  );
}
