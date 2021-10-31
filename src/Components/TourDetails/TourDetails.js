import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navber from '../Shared/Navber/Navber';

const TourDetails = () => {
    const {user} = useAuth();

    const { id } = useParams();
    const [tour, setTour] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-brook-71674.herokuapp.com/detailsTour/${id}`)
            .then((res) => res.json())
            .then((data) => setTour(data));
    }, []);

    const onSubmit = (tour) => {
        tour.email = user?.email;

        const { _id, ...data } = tour;
        fetch("https://aqueous-brook-71674.herokuapp.com/addbooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => console.log(result))
        .finally(alert("success booked your tour"))
    };

    return (
        <div>
            <Navber></Navber>
            <div className="my-5">
                <h1 className ="fs-1 text-primary fw-bold mb-3">Tour Details</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="card">
                                <img src={tour?.img} class="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-lg-6 mx-auto">
                            <div class="card" >
                                <div class ="card-body">
                                    <h2 class="card-title fs-2 text-primary fs-bold">{tour?.name}</h2>
                                    <h6 class="card-title fs-5">{tour?.place}</h6>
                                    <p class="card-text">{tour?.description}</p>
                                    <button onClick={() => onSubmit(tour)} className="btn btn-primary" >Book Tour</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TourDetails;