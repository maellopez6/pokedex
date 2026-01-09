import { useState } from "react";
import TrainerForm from "./components/TrainerForm";
import TrainerSelector from "./components/TrainerSelector";
import BaasicPokemonList from "./components/BaasicPokemonList";
import type { ITrainer } from "./types/trainer.type";

function App() {
  const [arrayOfTrainers, setArrayOfTrainers] = useState<ITrainer[]>([]);

  return (
    <div>
      <TrainerSelector arrayOfTrainers={arrayOfTrainers} />
      <TrainerForm getter={arrayOfTrainers} setter={setArrayOfTrainers} />
      <BaasicPokemonList />
    </div>
  );
}

export default App;
