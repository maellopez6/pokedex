interface PokemonCardProps {
  name: string;
  image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image }) => {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        borderRadius: 12,
        padding: 16,
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: 96,
          height: 96,
          objectFit: "contain",
        }}
      />

      <p
        style={{
          marginTop: 12,
          fontWeight: 600,
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default PokemonCard;
