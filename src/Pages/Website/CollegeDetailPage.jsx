import React from 'react'
import Footer from '../../Components/Website/Footer'
import Breadcrum from '../../Components/Website/breadcrum'
import { collegeData } from '../../Components/Website/CollegeData'
import { useParams } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { PiLinkBold } from "react-icons/pi";
import '../../Components/Website/assets/css/college-page-details.css';
import { affiliationData } from "../../Components/Website/AffilationData";

const CollegeDetailPage = () => {
    const { collegeId } = useParams();
    const collegeDetail = collegeData[collegeId];

    return (
        <>

            <Breadcrum paths={[
                { label: 'Home', link: '/' },
                { label: collegeDetail?.name, link: `/${collegeDetail?.id}` },
            ]} />
            <section className="py-5" >
                <div className='container'>
                    <div className="row">
                        <div className='col-12 col-md-8 mx-auto mb-5' data-aos="fade-up" data-aos-delay="200">
                            <img src={`${collegeDetail?.img}`} alt="" className='rounded img-fluid' style={{ width: "100%" }} />

                        </div>

                        <div className='col-12 col-md-8 mx-auto mb-5 d-block d-md-flex justify-content-md-between align-items-center'>
                            <div>
                                <p className='am-f30 text-dark fw-bolder mb-0  lh-sm'>{collegeDetail?.name}</p>
                               
                                    <p className='mb-md-0 mb-2'><MdLocationOn className='me-1 ' />
                                        {collegeDetail?.address}</p>
                               
                            </div>
                            <div>
                                <a href={collegeDetail?.link} target="_blank" rel="noopener noreferrer" className='btn btn-primary ' style={{ fontSize: "16px" }}>View site <FaLocationArrow /></a>
                            </div>
                        </div>

                        <div className="col-12 col-md-10  mx-auto" data-aos="fade-up" data-aos-delay="300">

                            <div className='d-flex justify-content-end mb-4'>
                            </div>


                            <p className='text-justify '>{collegeDetail?.description}</p>
                            <p className='d-inline'> <FaGraduationCap className='me-3 am-f30' /></p> <p className=' mb-2 d-inline'><strong>Courses Offered :</strong> {collegeDetail?.courses}</p>

                        </div>
                    </div>

                </div>
            </section>

            <section className="py-5 our-affiliation-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="mb-5 text-center"> Affiliations & Approvals</h2>
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {affiliationData?.map((item, index) => (
                            collegeDetail?.affilated.includes(item.id) && (

                                <div className="card text-center mb-4" key={index}
                                    data-aos="fade-up"
                                    data-aos-delay="300">
                                    <div className='card-body align-items-center d-flex flex-column justify-content-center'>
                                        <img src={item.img} alt={item.title} className="mb-4 img" />
                                        <p className="title am-f18 mb-2">{item.title}</p>
                                        <p className="para am-f16">{item.desc}</p>
                                    </div>
                                </div>

                            )
                        ))}
                    </div>

                </div>

            </section>

            <Footer />
        </>
    )
}

export default CollegeDetailPage