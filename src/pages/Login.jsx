import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../services/api";

const Login = () => {

    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            const response = await apiService.login(formData);
            console.log("Full Response:", response.data);
console.log("Token:", response.data.data?.token);
console.log("Roles:", response.data.data?.roles);

            if (response.data.statusCode === 200) {

                apiService.saveAuthData(
                    response.data.data.token,
                    response.data.data.roles
                );
                console.log("Saved Token:", localStorage.getItem("token"));

                navigate("/home");

            } else {

                setError(response.data.message || "Login failed");

            }

        } catch (error) {

            setError(
                error.response?.data?.message ||
                error.message ||
                "Login failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-form">

                <h2>Welcome Back</h2>

                <p>
                    Sign in to securely access your Banking Application account.
                </p>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="forgot-password">

                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                </form>

                <div className="auth-link">

                    Don't have an account?{" "}
                    <Link to="/register">
                        Create Account
                    </Link>

                </div>

            </div>

        </div>

    );

};

export default Login;