interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="search">
      <input
        placeholder="Rechercher un Pokémon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
