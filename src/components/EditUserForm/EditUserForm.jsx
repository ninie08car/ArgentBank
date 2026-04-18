import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putProfile } from "../../api/api";
import { updateUsername } from "../../redux/slices/profileSlice";
import "./EditUserForm.css";

const EditUserForm = () => {
  const { userName, firstName, lastName } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [form, setForm] = useState(() => ({
    username: userName || "",
    firstname: firstName || "",
    lastname: lastName || "",
  }));

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await putProfile(form.username, token);

      if (response) {
        console.log("Profil mis à jour :", response);
        setSuccess(true);
        dispatch(updateUsername(form.username));
      } else {
        console.error("Erreur update");
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit user info</h2>

      <form onSubmit={handleSubmit} className="edit-form">
        <div>
          <label>User name:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            disabled
          />
        </div>

        <div>
          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="buttons">
          <button type="submit" className="save" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>

          <button type="button" className="cancel">
            Cancel
          </button>
        </div>

        {success && <p className="success">Username updated</p>}
      </form>
    </div>
  );
};

export default EditUserForm;
