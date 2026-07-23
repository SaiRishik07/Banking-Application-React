import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../services/api";

const Navbar = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const isAuthenticated = apiService.isAuthenticated();
    const isAdmin = apiService.isAdmin();
    const isAuditor = apiService.isAuditor();

    const handleLogout = () => setShowModal(true);

    const confirmLogout = () => {
        apiService.logout();
        setShowModal(false);
        navigate("/login", { replace: true });
    };

    const cancelLogout = () => setShowModal(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link to="/home" className="navbar-logo">

                        <div className="bank-logo">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"
                                    fill="#ffffff"
                                />

                                <path
                                    d="M16 26L32 16L48 26"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />

                                <rect
                                    x="20"
                                    y="26"
                                    width="24"
                                    height="18"
                                    rx="2"
                                    fill="#2563eb"
                                />

                                <line
                                    x1="26"
                                    y1="26"
                                    x2="26"
                                    y2="44"
                                    stroke="white"
                                    strokeWidth="2"
                                />

                                <line
                                    x1="32"
                                    y1="26"
                                    x2="32"
                                    y2="44"
                                    stroke="white"
                                    strokeWidth="2"
                                />

                                <line
                                    x1="38"
                                    y1="26"
                                    x2="38"
                                    y2="44"
                                    stroke="white"
                                    strokeWidth="2"
                                />

                                <rect
                                    x="18"
                                    y="44"
                                    width="28"
                                    height="4"
                                    fill="#2563eb"
                                />
                            </svg>
                        </div>

                        <div className="bank-title">
                            <span className="bank-name">
                                Banking Application
                            </span>

                            <span className="bank-tagline">
                                Secure • Fast • Reliable
                            </span>
                        </div>

                    </Link>

                    <ul className="navbar-menu">

                        <li className="navbar-item">
                            <Link to="/home" className="navbar-link">
                                Home
                            </Link>
                        </li>

                        {isAuthenticated ? (
                            <>
                                <li className="navbar-item">
                                    <Link to="/profile" className="navbar-link">
                                        My Profile
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/transfer" className="navbar-link">
                                        Transfer Money
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/transactions" className="navbar-link">
                                        Transactions
                                    </Link>
                                </li>

                                {(isAdmin || isAuditor) && (
                                    <>
                                        <li className="navbar-item">
                                            <Link
                                                to="/auditor-dashboard"
                                                className="navbar-link"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>

                                        <li className="navbar-item">
                                            <Link
                                                to="/deposit"
                                                className="navbar-link"
                                            >
                                                Deposit
                                            </Link>
                                        </li>
                                    </>
                                )}

                                <li className="navbar-item">
                                    <button
                                        type="button"
                                        className="navbar-link logout-btn"
                                        onClick={handleLogout}
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="navbar-item">
                                    <Link
                                        to="/login"
                                        className="navbar-link"
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link
                                        to="/register"
                                        className="btn btn-primary"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}

                    </ul>

                </div>
            </nav>

            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal">

                        <h2>Sign Out</h2>

                        <p>
                            Are you sure you want to sign out of your account?
                        </p>

                        <div className="modal-actions">

                            <button
                                className="btn btn-secondary"
                                onClick={cancelLogout}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={confirmLogout}
                            >
                                Sign Out
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;