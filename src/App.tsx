import { useState } from "react";
import TrainerForm from "./components/TrainerForm";
import TrainerSelector from "./components/TrainerSelector";
import BaasicPokemonList from "./components/BaasicPokemonList";
import LoginButton from "./components/LoginButton";
import type { ITrainer } from "./types/trainer.type";

function App() {
  const [trainers, setTrainers] = useState<ITrainer[]>([]);

  return (
    <div style={{ padding: 16 }}>
      {/* Bouton Login */}
      <LoginButton />

      {/* Formulaire d'ajout de trainer */}
      <TrainerForm 
        trainers={trainers}         // <-- corrige le nom de la prop
        setTrainers={setTrainers}   // <-- corrige le setter
      />

      {/* Sélecteur de trainer */}
      <TrainerSelector 
        arrayOfTrainers={trainers}  // <-- pas besoin de changer ici si le sélecteur attend arrayOfTrainers
      />

      {/* Liste de Pokémon */}
      <BaasicPokemonList />
    </div>
  );
}

export default App;
