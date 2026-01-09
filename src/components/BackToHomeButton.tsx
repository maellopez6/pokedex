import { useNavigate } from "react-router-dom";

export default function BackToHomeButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>
      Retour à l'accueil
    </button>
  );
}
