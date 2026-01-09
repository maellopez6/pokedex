import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IPokemonData } from "../../../types/pokemon.type";

export default function PokemonDetailedView() {
  const { pokeId } = useParams<{ pokeId: string }>();
  const [pokemon, setPokemon] = useState<IPokemonData | null>(null);

  useEffect(() => {
    (async () => {
      if (!pokeId) return;
      try {
        const res = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const allPokemon: IPokemonData[] = await res.json();
        const found = allPokemon.find((p) => p.pokedex_id === Number(pokeId));
        setPokemon(found || null);
      } catch (err) {
        console.error(err);
        setPokemon(null);
      }
    })();
  }, [pokeId]);

  if (!pokemon) return <div>Pokémon introuvable !</div>;

  return (
    <div style={{ padding: 16 }}>
      <h1>{pokemon.name.fr} (#{pokemon.pokedex_id})</h1>
      <img
        src={pokemon.sprites?.regular || ""}
        alt={pokemon.name.fr}
        style={{ width: 200, height: 200 }}
      />
      <div style={{ marginTop: 8 }}>
        Types:{" "}
        {pokemon.types?.map((t) => (
          <span
            key={t.name}
            style={{
              display: "inline-block",
              background: "#e2e8f0",
              borderRadius: 4,
              padding: "2px 6px",
              margin: "0 2px",
              textTransform: "capitalize",
            }}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}
