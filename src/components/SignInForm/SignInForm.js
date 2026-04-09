import { useState } from "react";
import { postLogin } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../redux/slices/loginSlice";

function useSignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(loginReducer({ token: login.token }));
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
