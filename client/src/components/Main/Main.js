// components/Main.js
import { useEffect } from "react";
import "./Main.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    const userName = localStorage.getItem("userName");
    console.log(`${userName} with role ${role} is logged in.`);
  }, []);

  return (
    <div>
      <nav>
        <h1>Role Management Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Main;
