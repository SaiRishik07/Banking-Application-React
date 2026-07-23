import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found-container">

            <div className="not-found-content">

                <div className="not-found-animation">

                    <span className="not-found-number">4</span>

                    <div className="not-found-zero">
                        <div className="not-found-inner-circle"></div>
                    </div>

                    <span className="not-found-number">4</span>

                </div>

                <h1 className="not-found-title">
                    404 - Page Not Found
                </h1>

                <p className="not-found-message">
                    Sorry! The page you're looking for doesn't exist or may have been moved.
                </p>

                <div className="not-found-actions">

                    <Link
                        to="/home"
                        className="btn btn-primary"
                    >
                        Go Home
                    </Link>

                    <button
                        className="btn btn-secondary"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>

                </div>

                <div className="not-found-tips">

                    <h3>Need Help?</h3>

                    <ul>

                        <li>✔ Check the URL</li>

                        <li>✔ Return to Home</li>

                        <li>✔ Login to your account</li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default NotFound;