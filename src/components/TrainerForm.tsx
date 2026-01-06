import { useState } from "react";
import type { ITrainer } from "../types/trainer.type";

interface Props {
  getter: ITrainer[];
  setter: React.Dispatch<React.SetStateAction<ITrainer[]>>;
}

const TrainerForm: React.FC<Props> = ({ getter, setter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [trainerName, setTrainerName] = useState<string>("");
  const [trainerStarter, setTrainerStarter] = useState<string>("");

  return (
    <div>
      <button onClick={() => setIsOpen((v) => !v)}>
        {isOpen ? "Close Trainer Form" : "Open Trainer Form"}
      </button>

      {isOpen && (
        <div>
          <h2>Trainer Form Component</h2>
          <input
            type="text"
            placeholder="Trainer Name"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Starter Pokemon"
            value={trainerStarter}
            onChange={(e) => setTrainerStarter(e.target.value)}
          />
          <button
            onClick={() => {
              const newTrainer: ITrainer = {
                name: trainerName,
                starter: trainerStarter,
              };
              setter([...getter, newTrainer]);
              setTrainerName("");
              setTrainerStarter("");
            }}
          >
            Add Trainer
          </button>
        </div>
      )}
    </div>
  );
};

export default TrainerForm;