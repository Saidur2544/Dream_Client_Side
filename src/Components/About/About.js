import React from 'react';
import "./About.css";
const About = () => {
    return (
        <div className="about"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-3">
                        <div className="abiutImg">
                            <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/about-1.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="p-3 ">
                            <h4 className="aboutsubHead">About Dream Tour</h4>
                            <h2 className="fs-2 fw-bold text-primary about-head pt-2">
                                World Best Travel Agency Company Since 2017.
                            </h2>
                            <p className="aboutsubHead pt-1">
                                Dream TourThe Travel Company Edinburgh we are still working for our customers to help them through this difficult time. Our physical office is closed with our team working from home to ensure that we are there to assist our clients. This is a testing time with a new set of restrictions or advice coming in to play every day for us to follow, please be assured that we are working hard behind the scenes to deliver you, our customer, the best possible advice and guidance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;