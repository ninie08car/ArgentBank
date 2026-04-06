// SignInFormLogic.js
import { useState } from "react";
import { postLogin, getProfile } from "../../api/api";
import { useNavigate } from "react-router-dom";

function useSignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const login = await postLogin(email, password);

      if (!login) {
        alert("Erreur login");
        return;
      }

      const user = await getProfile();
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/user");
    } catch (err) {
      console.error(err);
      alert("Erreur serveur");
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
}
export default useSignInForm;
