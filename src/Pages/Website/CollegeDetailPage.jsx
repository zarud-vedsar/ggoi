import React from 'react'
import Footer from '../../Components/Website/Footer'
import Breadcrum from '../../Components/Website/breadcrum'
import { collegeData } from '../../Components/Website/CollegeData'
import { useParams } from 'react-router-dom'

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
                        <div className='col-md-5 '>
                            <img src="/website/img/ghanshyam-urvashi-pg-college.png" alt="" className='rounded img-fluid' />
                        </div>
                        <div className="col-md-7 pt-5 px-5" data-aos="fade-up" data-aos-delay="300">

                            <p className='am-f30 text-dark fw-bolder mb-5 text-center  '>{collegeDetail?.name}</p>

                            <p className=''>{collegeDetail?.description}</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default CollegeDetailPage