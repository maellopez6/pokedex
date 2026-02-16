import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";

export default function LoginButton() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Ici tu peux faire un fetch vers ton backend pour récupérer le token
    // Je simule un token pour l'exemple
    const token = "1234567890";
    const email = "user@example.com";

    dispatch(setCredentials({ token, email }));
    alert("Utilisateur connecté !");
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        padding: "8px 16px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        margin: 8,
      }}
    >
      Login
    </button>
  );
}
