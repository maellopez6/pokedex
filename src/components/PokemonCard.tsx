interface PokemonCardProps {
  name: string;
  image: string;
  types: { name: string }[];
  typeColors: { [key: string]: string };
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  image,
  types,
  typeColors,
}) => {
  const firstType = types.length > 0 ? types[0].name : null;
  const bgColor = firstType ? typeColors[firstType] ?? "#f0f0f0" : "#f0f0f0";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: 12,
        padding: 16,
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
    >
      <img
        src={image || ""}
        alt={name}
        style={{
          width: 96,
          height: 96,
          objectFit: "contain",
          marginBottom: 8,
        }}
      />

      <p
        style={{
          fontWeight: 600,
          textTransform: "capitalize",
          marginBottom: 8,
        }}
      >
        {name}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {types.map((t) => (
          <span
            key={t.name}
            style={{
              backgroundColor: typeColors[t.name] ?? "#ccc",
              color: "#fff",
              borderRadius: 6,
              padding: "2px 6px",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
