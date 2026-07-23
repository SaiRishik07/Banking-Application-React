import { apiService } from "../services/api";

const Home = () => {

    const isAuthenticated = apiService.isAuthenticated();

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Banking Application</h1>
                    <p>Your secure and modern banking solution</p>
                    {!isAuthenticated && (
                        <div className="hero-buttons">
                            <a href="/register" className="btn btn-primary">Open an Accoount</a>
                            <a href="/login" className="btn btn-secondary">Sign In</a>
                        </div>
                    )}
                </div>
            </section>

            <section className="features-section">

                <div className="container">
                    <h2>Why Choose Banking Application?</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure</h3>
                            <p>Bank-level security to keep your money and information safe.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">⚡</div>
                            <h3>Fast</h3>
                            <p>Instant transfers and quick access to your funds.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">💎</div>
                            <h3>Reliable</h3>
                            <p>Trusted by thousands of customers worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Home;