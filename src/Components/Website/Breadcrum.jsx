import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSlash } from "react-icons/hi2";
import './assets/css/breadcrum.css';

const Breadcrum = ({ paths }) => {
    return (
        <section className="py-5 breadcrum">
            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <nav >
                            <ol className=" d-flex align-items-center flex-wrap p-1">
                                {paths.map((path, index) => (
                                    <li key={index} className=" d-flex align-items-center m-0">
                                        {index !== paths.length - 1 ? (
                                            <>
                                                <Link to={path.link} className='breadcrum-link-color'>{path.label}</Link>
                                                <HiOutlineSlash className="mx-2 breadcrum-link-color" />
                                            </>
                                        ) : (
                                            <span className='breadcrum-link-text'>{path.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                        <h2 className="mb-5 text-white">{paths?.length > 0 ? paths[paths.length - 1].label : 'Breadcrumb'}</h2>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrum;
