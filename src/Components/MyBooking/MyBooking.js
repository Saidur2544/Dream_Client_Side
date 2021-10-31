import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navber from '../Shared/Navber/Navber';

const MyBooking = () => {
    const {user} = useAuth();
    const email = user?.email ;
    const [booking, setBooking] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    useEffect(() => {
        fetch(`https://aqueous-brook-71674.herokuapp.com/myOrder/${email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [reloadData]);

    const bookingDelete = (id) =>{
        console.log("clicked")
        fetch(`https://aqueous-brook-71674.herokuapp.com/deleteBooking/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
                setReloadData(!reloadData)
                alert("Deleted Your Booking Successfully")
            } else {
                setReloadData(false)
            }
        });
    }

    return (
        <div>
            <Navber></Navber> 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-3">
                            <h1 className="fs-2 text-primary fw-bold pt-5"> My All Booking Details</h1>
                            <div className="my-3">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="fs-4">Tour Name</th>
                                            <th className="fs-4">Visit place</th>
                                            <th className="fs-4">Booking Email</th>
                                            <th className="fs-4">Price</th>
                                            <th className="fs-4">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            booking.map(mybooking => <tr key={mybooking?._id}>
                                                <td><h3 className="fs-5 text-primary">{mybooking?.name}</h3></td>
                                                <td>{mybooking?.place}</td>
                                                <td>{mybooking?.email}</td>
                                                <td><h5 className="fw-bold">$ {mybooking?.price}</h5></td>
                                                <td>
                                                    <button onClick={() => bookingDelete(mybooking?._id)} className="btn btn-danger">Delete</button>
                                                    <button disabled="disabled"
                                                    className="btn btn-primary mx-2">Pending</button>
                                                </td>
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

export default MyBooking;