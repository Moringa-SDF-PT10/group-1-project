import { useState } from "react";

function Signin() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign up logic here
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
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

