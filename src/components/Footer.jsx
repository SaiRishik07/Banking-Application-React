const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">

                <div className="footer-section">
                    <h3>🏦 Banking Application</h3>
                    <p>
                        A secure, fast, and reliable digital banking platform
                        designed for seamless money transfers, account
                        management, and transaction tracking.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/transfer">Transfer Money</a></li>
                        <li><a href="/transactions">Transactions</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Features</h4>
                    <ul>
                        <li>Secure Authentication</li>
                        <li>Instant Money Transfer</li>
                        <li>Transaction History</li>
                        <li>Role-Based Access</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>📧 support @bankingapplication.com</p>
                    <p>📞 +91 9019883984</p>
                    <p>📍 India</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Banking Application. All Rights Reserved.
                </p>
                <p>
                    Built with ❤️ using React, Spring Boot & PostgreSQL.
                </p>
            </div>
        </footer>
    );
};

export default Footer;