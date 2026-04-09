import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import EditUserName from "../pages/EditUserName";
import Transaction from "../pages/Transaction";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="/edit-user-name" element={<EditUserName />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
}

export default Router;
