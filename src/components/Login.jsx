import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [showInputs, setShowInputs] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleShowInputs = () => setShowInputs(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://auth-backend-s5py.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      alert("Login error");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      {!showInputs ? (
        <button onClick={handleShowInputs} className="login-toggle-button">Login</button>
      ) : (
        <>
          <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-submit-button">Login</button>
          </form>
          <p className="signup-redirect">
            Don’t have an account?{" "}
            <Link to="/Signup" className="signup-link">Sign up here</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
