import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://areness-rm-backend.onrender.com/api/auth";
      const response = await axios.post(url, data);
      console.log('Response Data:', response.data); 
    
      const { data: { token, role, userName }, message } = response.data;

      // Store token, role, and username in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userName", userName);

      // Redirect user based on the role
      if (role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      // Display success message or handle as needed
      alert(message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <div>{error}</div>}
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
