import { useEffect, useState } from "react";
import type { ITrainer } from "../types/trainer.type";

interface Props {
  arrayOfTrainers: ITrainer[];
}

const NAV_HEIGHT = 64;

const TrainerSelector: React.FC<Props> = ({ arrayOfTrainers }) => {
  const [currentTrainer, setCurrentTrainer] = useState<ITrainer | null>(null);

  useEffect(() => {
    if (currentTrainer === null) {
      alert("Please select a trainer to proceed.");
    }
  }, [arrayOfTrainers, currentTrainer]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: NAV_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    background: "#0f172a",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1000,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
  };

  const selectStyle: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid #ccc",
    background: "white",
  };

  const trainerInfoStyle: React.CSSProperties = {
    textAlign: "right",
    fontSize: 14,
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={titleStyle}>Trainer App</div>

        <div>
          <select
            value={currentTrainer?.name || ""}
            onChange={(e) => {
              const selected = arrayOfTrainers.find(
                (t) => t.name === e.target.value
              );
              setCurrentTrainer(selected || null);
            }}
            style={selectStyle}
          >
            <option value="">--Select Trainer--</option>
            {arrayOfTrainers.map((trainer, index) => (
              <option key={index} value={trainer.name}>
                {trainer.name}
              </option>
            ))}
          </select>
        </div>

        <div style={trainerInfoStyle}>
          {currentTrainer ? (
            <>
              <div style={{ fontWeight: 600 }}>{currentTrainer.name}</div>
              <div style={{ fontSize: 12, opacity: 0.9 }}>
                Starter: {currentTrainer.starter}
              </div>
            </>
          ) : (
            <div style={{ opacity: 0.85 }}>No trainer selected</div>
          )}
        </div>
      </nav>
    </>
  );
};

export default TrainerSelector;