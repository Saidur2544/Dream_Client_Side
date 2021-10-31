import React from 'react';
import "./Places.css";
import palce1 from "../../images/client-1.png";
import palce2 from "../../images/client-2.png";
import palce3 from "../../images/client-3.png";
const Places = () => {
    return (
        <div className="places">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="place-item">
                            <img src={palce2} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="place-item">
                            <img src={palce1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="place-item">
                            <img src={palce3} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="place-item">
                            <img src={palce1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;