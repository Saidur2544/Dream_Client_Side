import React, { useEffect, useState } from 'react';
import SingleTour from '../SingleTour/SingleTour';

const AllTour = () => {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://aqueous-brook-71674.herokuapp.com/alltoursshow")
            .then((res) => res.json())
            .then((data) => setTours(data));
    }, []);

    return (
        <div className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-g-12">
                        <div className="my-5">
                            <h1 className="fs-1 fw-bold text-primary"> Our Most Popular Adventures</h1>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    {
                        tours?.map(tour => <SingleTour
                            key={tour._id}
                            tour= {tour}
                        ></SingleTour>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTour;