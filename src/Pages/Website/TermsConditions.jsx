import Breadcrum from "../../Components/Website/breadcrum";
import Footer from "../../Components/Website/Footer";
const TermsConditions = () => {
    return (
        <>
            <Breadcrum paths={[
                { label: 'Home', link: '/' },
                { label: 'Terms & Conditions', link: `/terms-and-conditions` },
            ]} />

            <section className="py-5" id="main-content">
                <div className="container">
                    <p className="am-f30 text-center fw-bolder text-dark">Terms & Conditions</p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">1. Introduction</p>
                    <p>
                        Welcome to the official website of <strong> Ghanshyam Group of Institutions</strong>. By accessing or
                        using this website, you agree to comply with the following Terms & Conditions. These terms
                        govern your use of the website, online services, and all information provided herein.</p>

                    <p className="mb-3 am-f20 fw-bolder text-dark">2. Academic Information</p>
                    <p>All information regarding courses, admission procedures, fee structure, facilities, and other
                        academic details provided on this website is for general guidance only. The institution
                        reserves the right to revise, modify, or update the information at any time without prior notice.
                    </p>

                    <p className="mb-3 am-f20 fw-bolder text-dark">3. Use of Website
                    </p>

                    <ul style={{listStyleType: "disc"}}>
                        <li><p>The content on this site is intended for personal, non-commercial use.</p></li>
                        <li><p>Users may not reproduce, copy, or distribute website material without prior written
                            consent.
                        </p></li>
                        <li><p>Any misuse, hacking, or unauthorized access to the website is strictly prohibited.
                        </p></li>
                    </ul>

                    <p className="mb-3 am-f20 fw-bolder text-dark">4. Admissions & Eligibility
                    </p>
                    <p>Admission to all programs is subject to eligibility criteria, availability of seats, and
                        compliance with university/authority regulations. The institution reserves the right to reject
                        any application without assigning reasons.
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">5. Fees & Payments</p>
                    <p>All payments made towards tuition fees or any other charges are governed by the policies of
                        the institution. Fees once paid are non-refundable except as per applicable regulations.</p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">6. Limitation of Liability</p>
                    <p>While every effort is made to ensure the accuracy of information, the institution will not be
                        held responsible for any errors, omissions, or consequences arising from the use of this
                        website.
                    </p>
                    <p className="mb-3 am-f20 fw-bolder text-dark">7. Governing Law</p>
                    <p>All disputes shall be subject to the jurisdiction of courts in <strong>Prayagraj, Uttar Pradesh (India)</strong>.
                    </p>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default TermsConditions