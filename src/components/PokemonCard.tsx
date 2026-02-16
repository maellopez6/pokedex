import React, { useState } from "react";

interface PokemonCardProps {
  id: number; // ⚠️ IMPORTANT → ajoute id
  name: string;
  image: string;
  types: { name: string }[];
  typeColors: { [key: string]: string };
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  image,
  types,
  typeColors,
}) => {
  const [isShiny, setIsShiny] = useState(false);

  const firstType = types.length > 0 ? types[0].name : null;
  const bgColor = firstType ? typeColors[firstType] ?? "#f0f0f0" : "#f0f0f0";

  const shinyImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;

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
        position: "relative", // ✅ nécessaire pour badge
      }}
    >
      {/* BADGE SHINY */}
      <div
        onClick={(e) => {
          e.stopPropagation(); // évite de déclencher le clic carte
          setIsShiny(!isShiny);
        }}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "#FFD700",
          color: "#000",
          fontWeight: 700,
          fontSize: 11,
          padding: "4px 6px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        ✨ SHINY
      </div>

      <img
        src={isShiny ? shinyImage : image || ""}
        alt={name}
        style={{
          width: 130,
          height: 130,
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
