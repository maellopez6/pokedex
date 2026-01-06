import { useEffect, useState } from "react";
import type { IPokemonData } from "../types/pokemon.type";

export default function BaasicPokemonList() {
  const [data, setData] = useState<IPokemonData[]>([]);

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

  return (
    <div>
      <h1>Basic Pokemon List</h1>
      <ul>
        {data.map((pokemon) => (
          <li key={pokemon.id + "_list"}>
            {pokemon.name.fr} (#{pokemon.pokedex_id})
          </li>
        ))}
      </ul>
    </div>
  );
}