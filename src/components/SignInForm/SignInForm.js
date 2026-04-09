import { useState } from "react";
import { postLogin, getProfile } from "../../api/api";
import { useNavigate } from "react-router-dom";

function useSignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const login = await postLogin(email, password);

      if (!login) {
        setError(
          "Connexion impossible. Vérifie ton email et ton mot de passe.",
        );
        return;
      }

      const user = await getProfile();
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/user");
    } catch (err) {
      console.error(err);
      setError("Erreur serveur, réessaie plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error,
    loading,
  };
}
export default useSignInForm;
