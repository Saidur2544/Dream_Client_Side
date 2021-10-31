import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="mb-3 bg-primary">
            <h1 className="fs-2 fw-bold text-white pt-3 footerhead"> Make memories with us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-white text-start">
                        <h1 className="fs-4 fw-bold text-white pt-3">Dream Tour</h1>
                        <h3 className="pt-1">Connect with us</h3>
                        <p>Address : 3A-Kolaloti, Dhaka, Bangladesh</p>
                        <p>Email: abc@gmail.co,</p>
                        <p>Mobile: +88017777777</p>
                    </div>
                    <div className="col-lg-6">
                        <p className="text-white pt-3 fst-italic">
                            The travel industry is one of the largest service industries in the world, an increasingly important one in the modern age. It is centred on the movement of people from one location to another, as well as the services they require along the way and is closely linked to the hospitality industry and the hotel industry, among others. In this article, you will learn more about what the travel industry is, and the various sectors contained within it.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="copyright pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto text-center text-white">
                            <p>Copyright &copy; 2017. All rights reserved by Dream Tour</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;