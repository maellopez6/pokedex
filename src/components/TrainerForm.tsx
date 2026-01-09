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

  const handleAddTrainer = () => {
    if (!trainerName || !trainerStarter) return; // validation simple
    const newTrainer: ITrainer = {
      name: trainerName,
      starter: trainerStarter,
    };
    setter([...getter, newTrainer]);
    setTrainerName("");
    setTrainerStarter("");
    setIsOpen(false);
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        style={{
          padding: "8px 16px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          backgroundColor: "#4f46e5",
          color: "#fff",
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        {isOpen ? "Fermer le formulaire" : "Ajouter un entraîneur"}
      </button>

      {isOpen && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            marginTop: 8,
            backgroundColor: "#f9fafb",
          }}
        >
          <h2 style={{ marginBottom: 12 }}>Nouvel entraîneur</h2>

          <input
            type="text"
            placeholder="Nom de l'entraîneur"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginBottom: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <input
            type="text"
            placeholder="Pokémon de départ"
            value={trainerStarter}
            onChange={(e) => setTrainerStarter(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: 8,
              marginBottom: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={handleAddTrainer}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              backgroundColor: "#10b981",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Ajouter
          </button>
        </div>
      )}
    </div>
  );
};

export default TrainerForm;
