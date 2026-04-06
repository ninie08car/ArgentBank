const apiUrl = "http://localhost:3001";

// LOGIN
async function postLogin(email, password) {
  const response = await fetch(apiUrl + "/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.body.token);
    return data.body;
  }
  return null;
}

// GET PROFILE
async function getProfile() {
  const token = localStorage.getItem("token");

  const response = await fetch(apiUrl + "/user/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data.body;
  }
  return null;
}

// UPDATE PROFILE
async function putProfile(username) {
  const token = localStorage.getItem("token");

  const response = await fetch(apiUrl + "/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username }),
  });
  if (response.ok) {
    const data = await response.json();
    return data.body;
  }
  return null;
}
