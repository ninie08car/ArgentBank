import { useState } from "react";
import { postLogin, getProfile } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../redux/slices/loginSlice";
import { setProfile } from "../../redux/slices/profileSlice";

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

      const user = await getProfile(login.token);
      dispatch(loginReducer({ token: login.token }));
      dispatch(
        setProfile({
          userName: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        }),
      );
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
