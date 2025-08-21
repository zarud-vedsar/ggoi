import React from 'react';
import '../../Components/Website/assets/css/career-excellence.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// ✅ Importing image assets
import collegeImg from '../../Components/Website/assets/img/college.png';
import programImg from '../../Components/Website/assets/img/program.png';
import facultyImg from '../../Components/Website/assets/img/faculty.png';
import studentImg from '../../Components/Website/assets/img/student.png';

const CareerExcellence = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });

    return (
        <section className='py-5 career-excellence-section'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-white text-center section-heading ">Learning For Career Excellence</h2>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-5" ref={ref}>
                        <div className='am-card'>
                            <img src={collegeImg} alt="College" className='d-block mx-auto mb-5' />
                            <p className='text-white am-f40 number text-center'>
                                {inView && <CountUp end={9} duration={2} />}
                            </p>
                            <p className='text-white am-f22 text-center'>Colleges</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-5" ref={ref}>
                        <div className='am-card'>
                            <img src={programImg} alt="Program" className='d-block mx-auto mb-5' />
                            <p className='text-white am-f40 number text-center'>
                                {inView && <CountUp end={80} duration={2} />}+
                            </p>
                            <p className='text-white am-f22 text-center'>Program</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-5" ref={ref}>
                        <div className='am-card'>
                            <img src={facultyImg} alt="Faculty" className='d-block mx-auto mb-5' />
                            <p className='text-white am-f40 number text-center'>
                                {inView && <CountUp end={850} duration={2} />}+
                            </p>
                            <p className='text-white am-f22 text-center'>Faculties</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-5" ref={ref}>
                        <div className='am-card'>
                            <img src={studentImg} alt="Student" className='d-block mx-auto mb-5' />
                            <p className='text-white am-f40 number text-center'>
                                {inView && <CountUp end={3000} duration={2} />}+
                            </p>
                            <p className='text-white am-f22 text-center'>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerExcellence;
