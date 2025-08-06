import '../../Components/Website/assets/css/personality-development.css';
const PersonalityDevelopment = () => {
    return (
        <section className="py-5  personality-development-section" style={{ background: '#F5F5F5' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5"> Personality Development</h2>

                    </div>

                </div>
                <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                    <p className="am-f18">To develop communication skills and confidence among students, the following are
                        conducted</p>
                    <ul className='list'>
                        <li className='am-f18'><img src="website/img/check.svg" alt="" />Personality Development Sessions
                        </li>
                        <li className='am-f18'><img src="website/img/check.svg" alt="" />English Speaking Classes
                        </li>
                        <li className='am-f18'><img src="website/img/check.svg" alt="" />Grooming and Etiquette Training
                        </li>
                        <li className='am-f18'><img src="website/img/check.svg" alt="" />Mock Interviews and Group Discussions</li>
                        <li className='am-f18'><img src="website/img/check.svg" alt="" />Industrial Tours and Training
                        </li>
                    </ul>
                </div>
                <div className="col-6"></div>
            </div>

        </section>
    )
}

export default PersonalityDevelopment