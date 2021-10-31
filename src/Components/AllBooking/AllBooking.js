import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navber from '../Shared/Navber/Navber';

const AllBooking = () => {

    const [allbooking, setAllbooking] = useState([]);

    useEffect(() => {
        fetch("https://aqueous-brook-71674.herokuapp.com/allbooking")
            .then((res) => res.json())
            .then((data) => setAllbooking(data));
    }, []);

    return (
        <div>
            <Navber></Navber>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-3">
                            <h1 className="fs-2 text-primary fw-bold pt-5">All Booking Details</h1>
                            <div className="my-3">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="fs-4">Tour Name</th>
                                            <th className="fs-4">Visit place</th>
                                            <th className="fs-4">Booking Email</th>
                                            <th className="fs-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allbooking.map(booking => <tr
                                                key={booking?._id}
                                            >
                                                <td><h3 className="fs-5 text-primary">{booking?.name}</h3></td>
                                                <td>{booking?.place}</td>
                                                <td>{booking?.email}</td>
                                                <td><h5 className="fw-bold">$ {booking?.price}</h5></td>
                                            </tr>)
                                        }
                                        
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBooking;