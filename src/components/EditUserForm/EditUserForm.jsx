import React, { useState } from "react";
import "./EditUserForm.css";

const EditUserForm = () => {
  const [form, setForm] = useState({
    username: "Ben_hg",
    firstname: "Ben",
    lastname: "Hong",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="edit-container">
      <h2>Edit user info</h2>

      <form onSubmit={handleSubmit} className="edit-form">
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="User name"
        />
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          placeholder="First name"
        />
        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          placeholder="Last name"
        />

        <div className="buttons">
          <button type="submit" className="save">
            Save
          </button>

          <button type="button" className="cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
