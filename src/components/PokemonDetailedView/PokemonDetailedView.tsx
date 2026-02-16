import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IPokemonData } from "../../../types/pokemon.type";

export default function PokemonDetailedView() {
  const { pokeId } = useParams<{ pokeId: string }>();
  const [pokemon, setPokemon] = useState<IPokemonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!pokeId) return;

      try {
        const res = await fetch("https://tyradex.app/api/v1/pokemon");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const allPokemon: IPokemonData[] = await res.json();
        const found = allPokemon.find(
          (p) => p.pokedex_id === Number(pokeId)
        );

        setPokemon(found || null);
      } catch (err) {
        console.error(err);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [pokeId]);

  if (loading) return <div>Chargement…</div>;
  if (!pokemon) return <div>Pokémon introuvable 😢</div>;

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ textTransform: "capitalize" }}>
        {pokemon.name.fr} (#{pokemon.pokedex_id})
      </h1>

      {/* Image */}
      {pokemon.sprites?.regular && (
        <img
          src={pokemon.sprites.regular}
          alt={pokemon.name.fr}
          style={{ width: 200, display: "block", margin: "16px auto" }}
        />
      )}

      {/* Types */}
      <div style={{ marginBottom: 16 }}>
        <strong>Types :</strong>{" "}
        {pokemon.types.map((t) => (
          <span
            key={t.name}
            style={{
              display: "inline-block",
              background: "#e2e8f0",
              borderRadius: 6,
              padding: "4px 8px",
              margin: "0 4px",
              textTransform: "capitalize",
            }}
          >
            {t.name}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div>
        <h2>Statistiques</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.entries(pokemon.stats).map(([stat, value]) => (
            <li
              key={stat}
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: "#f8fafc",
                marginBottom: 6,
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              <span style={{ textTransform: "uppercase" }}>{stat}</span>
              <strong>{value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
