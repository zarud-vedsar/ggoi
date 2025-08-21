import '../../Components/Website/assets/css/personality-development.css';
import { GiBrain } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";

const PersonalityDevelopment = () => {
    return (
        <section className="py-5  personality-development-section" >
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 mb-5" data-aos="fade-up" data-aos-delay="200">
                        <h2 className=" text-white text-center section-heading "> Personality Development</h2>
                        <p className="am-f18 text-center text-white">To develop communication skills and confidence among students, the following are
                            conducted</p>
                    </div>


                    <div className="col-md-12" >

                        <div className='list d-flex justify-content-center '>
                            <div className='am-circle-container'>
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <div className='am-f18 am-circle am-circle1' ><span className='text-center am-icon-container'><GiBrain className='am-f40' style={{ color: "#ff5858" }} /></span><p className='text-white text-center'>  Personality Development Sessions </p>
                                    </div></div>
                                <div data-aos="fade-right" data-aos-delay="400">
                                    <div className='am-f18 am-circle am-circle2'> <span className='text-center am-icon-container'><FaLanguage className='am-f40' style={{ color: "#36a37b" }} /></span><p className='text-white text-center'> English Speaking Classes </p>
                                    </div> </div>
                                <div data-aos="fade-right" data-aos-delay="600">
                                    <div className='am-f18 am-circle am-circle3'><span className='text-center am-icon-container'><FaUserTie className='am-f40' style={{ color: "#3a3a71" }} /></span><p className='text-white text-center'>Grooming and Etiquette Training </p>
                                    </div></div>
                                <div data-aos="fade-right" data-aos-delay="800">
                                    <div className='am-f18 am-circle am-circle4' ><span className='text-center am-icon-container'><FaComments className='am-f40' style={{ color: "#9a86ff" }} /></span><p className='text-white text-center'>Mock Interviews and Group Discussions </p></div>
                                </div>
                                <div data-aos="fade-right" data-aos-delay="1000">
                                    <div className='am-f18 am-circle am-circle5' ><span className='text-center am-icon-container'><FaIndustry className='am-f40' style={{ color: "#ffa73f" }} /></span><p className='text-white text-center'>Industrial Tours and Training </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PersonalityDevelopment