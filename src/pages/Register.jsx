import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../services/api";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
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
        setSuccess("");

        try {

            const response = await apiService.register(formData);

            if (response.data.statusCode === 200) {

                setSuccess(response.data.message);

                setTimeout(() => {
                    navigate("/login");
                }, 3000);

            } else {

                setError(response.data.message);

            }

        } catch (error) {

            setError(
                error.response?.data?.message ||
                error.message ||
                "Registration failed"
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div className="auth-container">

            <div className="auth-form">

                <h2>Create Your Account</h2>

                <p>
                    Join Banking Application and manage your finances securely.
                </p>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="success-message">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

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

                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>

                </form>

                <div className="auth-link">

                    Already have an account?{" "}
                    <Link to="/login">
                        Sign In
                    </Link>

                </div>

            </div>

        </div>

    );

};

export default Register;