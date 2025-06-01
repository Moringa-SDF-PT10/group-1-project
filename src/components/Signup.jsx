import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const res = await fetch("http://localhost:3001/Signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                alert(data.message);
                navigate("/login");
            } else {
                alert(data.error || "Signup failed");
            }
        } catch (error) {
            alert("Signup error");
            console.error(error);
        }

        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        setShowForm(false);
    };

    return (
        <div className="signup-container">
            <button onClick={() => setShowForm(!showForm)} className="signup-toggle-button">
                Sign Up
            </button>
            {showForm && (
                <>
                    <form onSubmit={handleSubmit} className="signup-form">
                        <h2>Create Account</h2>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Set Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="signup-submit-button">Create Account</button>
                    </form>
                    <p className="login-redirect">
                        Already have an account?{" "}
                        <Link to="/Login" className="login-link">Log in here</Link>
                    </p>
                </>
            )}
        </div>
    );
}

export default Signup;
