import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
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
            const res = await fetch('http://localhost:3001/Signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: form.email, password: form.password }),
            });

            const data = await res.json();

            if (res.ok) {
                alert(data.message);
                navigate('/login');
            } else {
                alert(data.error || 'Signup failed');
            }
        } catch (error) {
            alert('Signup error');
            console.error(error);
        }

        alert("Sign up successful!");
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>
                Sign Up
            </button>
            {showForm && (
                <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Set Password:
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            )}
        </div>
    );
}

export default Signin;

