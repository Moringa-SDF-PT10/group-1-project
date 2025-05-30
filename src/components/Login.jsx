import { useState } from "react";

function Login() {
    const [showInputs, setShowInputs] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleShowInputs = () => setShowInputs(true);

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Logging in with ${email}`);
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