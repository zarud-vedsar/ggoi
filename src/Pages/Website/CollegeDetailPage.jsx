import React from 'react'
import Footer from '../../Components/Website/Footer'
import Breadcrum from '../../Components/Website/breadcrum'
import { collegeData } from '../../Components/Website/CollegeData'
import { useParams } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { PiLinkBold } from "react-icons/pi";

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
                        <div className='col-md-5' data-aos="fade-up" data-aos-delay="200">
                            <img src={`${collegeDetail?.img}`} alt="" className='rounded ' style={{ width: "100%" }} />
                        </div>
                        <div className="col-md-7 pt-5 px-5" data-aos="fade-up" data-aos-delay="300">

                            <p className='am-f30 text-dark fw-bolder mb-0 text-center  lh-sm'>{collegeDetail?.name}</p>
                            <div className='d-flex justify-content-center align-items-center '>
                                <p className='text-center'><MdLocationOn className='me-1' />
                                    {collegeDetail?.address}</p>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <a href={collegeDetail?.link} target="_blank" rel="noopener noreferrer" className='btn btn-primary' style={{fontSize:"12px"}}>View site <FaLocationArrow/></a>
                            </div>


                            <p className='text-justify '>{collegeDetail?.description}</p>
                            <p className=' mb-2'> <span style={{color:"#48b648"}}> <FaGraduationCap className='me-2'/><strong>Courses Offered :</strong></span> {collegeDetail?.courses}</p>
                            <p className=' '> <span style={{color:"#347199"}}><PiLinkBold className='me-2'/> <strong>Affiliated to :</strong></span>  {collegeDetail?.affilated}</p>

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default CollegeDetailPage