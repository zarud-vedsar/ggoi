import Breadcrum from "../../Components/Website/breadcrum";
import Footer from "../../Components/Website/Footer";
const PrivacyPolicy = () => {
    return (
        <>
            <Breadcrum paths={[
                { label: 'Home', link: '/' },
                { label: 'Privacy Policy', link: `/privacy-policy` },
            ]} />
            <section className="py-5" id="main-content">
                <div className="container">
                    <p className="am-f30 text-center fw-bolder text-dark">Privacy Policy
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">1. Introduction</p>
                    <p>At <strong> Ghanshyam Group of Institutions</strong>, we respect your privacy and are committed to
                        protecting personal information collected through our website. This Privacy Policy outlines
                        how we collect, use, and safeguard your information.
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">2. Information We Collect
                    </p>
                    <ul style={{listStyleType: "disc"}}>
                        <li><p>Personal details such as name, email, phone number, and address (when submitted
                            through inquiry forms or admission forms).
                        </p>
                        </li>
                        <li><p>Academic details provided during online application or registration.
                        </p></li>
                        <li><p>Technical data such as IP address, browser type, and cookies for website analytics.</p></li>
                    </ul>
                    <p className="mb-3 am-f20 fw-bolder text-dark">3. How We Use Your Information
                    </p>
                    <ul style={{listStyleType: "disc"}}>
                        <li><p>To process admissions, inquiries, and service requests.</p>
                        </li>
                        <li><p>To communicate important updates about courses, events, and academic activities.</p>
                        </li>
                        <li><p>To improve website functionality and user experience.
                        </p>
                        </li>
                        <li><p>To comply with legal and regulatory obligations.</p>
                        </li>
                    </ul>
                    <p className="mb-3 am-f20 fw-bolder text-dark">4. Information Sharing
                    </p>
                    <p>We do not sell, rent, or share personal information with third parties except:</p>
                    <ul style={{listStyleType: "disc"}}>
                        <li><p>With affiliated universities, councils, or regulatory bodies as per requirement.</p>
                        </li>
                        <li><p>With service providers who assist in admissions or IT support.
                        </p>
                        </li>
                        <li><p>When required by law or court order.
                        </p>
                        </li>
                    </ul>
                    <p className="mb-3 am-f20 fw-bolder text-dark">5. Data Security

                    </p>
                    <p>We use appropriate technical and organizational measures to protect your personal data
                        from unauthorized access, misuse, or loss.
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">6. Third-Party Links

                    </p>
                    <p>Our website may contain links to third-party sites. We are not responsible for the privacy
                        practices of those websites.
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">7. User Rights
                    </p>
                    <p>Users have the right to request correction, updating, or deletion of their personal information
                        by contacting the institution’s administration.
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">8. Updates to Policy
                    </p>
                    <p>This Privacy Policy may be updated periodically. Any changes will be posted on the website.</p>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default PrivacyPolicy