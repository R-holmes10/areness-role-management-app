import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin"; 
import User from "./components/User"; 
function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" element={<Main />} />} 
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} /> 
      <Route path="/user" element={<User />} /> 
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
