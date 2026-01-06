import { useState } from "react";
import "./App.css";
import TrainerForm from "./components/TrainerForm";
import type { ITrainer } from "./types/trainer.type";
import TrainerSelector from "./components/TrainerSelector";
import BaasicPokemonList from "./components/BaasicPokemonList";

function App() {
  const [arrayOfTrainers, setArrayOfTrainers] = useState<ITrainer[]>([]);

  return (
    <>
      <TrainerSelector arrayOfTrainers={arrayOfTrainers} />
      <TrainerForm getter={arrayOfTrainers} setter={setArrayOfTrainers} />
      <BaasicPokemonList />
    </>
  );
}

export default App;