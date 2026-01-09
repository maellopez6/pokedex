import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import type { IPokemonData } from "../types/pokemon.type";

// Couleurs par type
const typeColors: { [key: string]: string } = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Insecte: "#A8B820",
  Normal: "#A8A878",
  Electrik: "#F8D030",
  Combat: "#C03028",
  Poison: "#A040A0",
  Sol: "#E0C068",
  Vol: "#A890F0",
  Psy: "#F85888",
  Glace: "#98D8D8",
  Dragon: "#7038F8",
  Tenebres: "#705848",
  Acier: "#B8B8D0",
  Fee: "#EE99AC",
  Roche: "#B8A038",
  Spectre: "#705898",
};

export default function BaasicPokemonList() {
  const [data, setData] = useState<IPokemonData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setData([]);
      }
    })();
  }, []);

  const filteredData = data.filter(
    (pokemon) =>
      pokemon.name.fr &&
      pokemon.name.fr.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 16 }}>
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          borderRadius: 6,
          border: "1px solid #ccc",
          marginBottom: 16,
          width: "100%",
          fontSize: 16,
        }}
      />

      {/* Grille */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 16,
        }}
      >
        {filteredData.map((pokemon) => (
          <div key={pokemon.pokedex_id} onClick={() => setSelectedPokemon(pokemon)}>
            <PokemonCard
              name={pokemon.name.fr ?? "Nom inconnu"}
              image={pokemon.sprites.regular ?? ""}
              types={pokemon.types ?? []}
              typeColors={typeColors}
            />
          </div>
        ))}
      </div>

      {/* Popup détaillée */}
      {selectedPokemon && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedPokemon(null)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 24,
              maxWidth: 450,
              width: "90%",
              position: "relative",
              textAlign: "center",
              overflowY: "auto",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedPokemon(null)}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                border: "none",
                background: "transparent",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            {/* Image et nom */}
            <img
              src={selectedPokemon.sprites.regular ?? ""}
              alt={selectedPokemon.name.fr}
              style={{ width: 140, height: 140, objectFit: "contain", marginBottom: 12 }}
            />
            <h2 style={{ marginBottom: 8 }}>{selectedPokemon.name.fr}</h2>

            {/* Types */}
            <div style={{ marginBottom: 12 }}>
              {selectedPokemon.types.map((t) => (
                <span
                  key={t.name}
                  style={{
                    backgroundColor: typeColors[t.name] ?? "#ccc",
                    color: "#fff",
                    borderRadius: 6,
                    padding: "2px 6px",
                    fontSize: 12,
                    fontWeight: 500,
                    marginRight: 4,
                  }}
                >
                  {t.name}
                </span>
              ))}
            </div>

            {/* Talents */}
            {selectedPokemon.talents.length > 0 && (
              <div style={{ marginBottom: 12, textAlign: "left" }}>
                <h3>Talents :</h3>
                {selectedPokemon.talents.map((t) => (
                  <span
                    key={t.name}
                    style={{
                      backgroundColor: t.tc ? "#FFAA00" : "#AAAAAA",
                      color: "#fff",
                      borderRadius: 6,
                      padding: "2px 6px",
                      fontSize: 12,
                      fontWeight: 500,
                      marginRight: 4,
                      display: "inline-block",
                      marginBottom: 4,
                    }}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            )}

            {/* Stats */}
            <div style={{ textAlign: "left", marginBottom: 12 }}>
              <h3>Stats :</h3>
              <p>HP: {selectedPokemon.stats.hp}</p>
              <p>ATK: {selectedPokemon.stats.atk}</p>
              <p>DEF: {selectedPokemon.stats.def}</p>
              <p>Spe ATK: {selectedPokemon.stats.spe_atk}</p>
              <p>Spe DEF: {selectedPokemon.stats.spe_def}</p>
              <p>Vitesse: {selectedPokemon.stats.vit}</p>
            </div>

            {/* Evolutions */}
            <div style={{ textAlign: "left", marginBottom: 12 }}>
              <h3>Évolutions :</h3>
              {selectedPokemon.evolution.pre ? (
                <p>
                  <strong>Précédente :</strong> {selectedPokemon.evolution.pre.name}{" "}
                  {selectedPokemon.evolution.pre.condition ? `(${selectedPokemon.evolution.pre.condition})` : ""}
                </p>
              ) : (
                <p>Précédente : Aucune</p>
              )}

              {selectedPokemon.evolution.next.length > 0 ? (
                <p>
                  <strong>Suivantes :</strong>{" "}
                  {selectedPokemon.evolution.next.map((e) => e.name).join(", ")}
                </p>
              ) : (
                <p>Suivantes : Aucune</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
