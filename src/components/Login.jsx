import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const [showInputs, setShowInputs] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleShowInputs = () => setShowInputs(true);

    const handleLogin = async(e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Logging in with ${email}`);
         try {
          const res = await fetch('http://localhost:5173/Login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/profile');
        } else {
        alert(data.error || 'Login failed');
        }
        } catch (error) {
        alert('Login error');
        console.error(error);
        }
        };

    return (
        <div>
            {!showInputs ? (
                <button onClick={handleShowInputs}>Login</button>
            ) : (
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;