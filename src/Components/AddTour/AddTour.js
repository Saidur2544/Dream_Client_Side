import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Navber from '../Shared/Navber/Navber';
import "./AddTour.css";


const AddTour = () => {


    const url = "/service";
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch("https://aqueous-brook-71674.herokuapp.com/addtours", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
            });
    };
    return (
        <div>
            <Navber></Navber>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-3">
                            <h1 className="text-primary text-center fs-1 fw-bold pt-3"> Add Tour Details Here</h1>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <Card className="p-3">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control" {...register("name")} placeholder="Tour Name" />
                                    <br />
                                    <input className="form-control" {...register("place")} placeholder="Tour places" />
                                    <br />
                                    <textarea className="form-control" {...register("description")} placeholder="Tour description" />
                                    <br />
                                    <input className="form-control" {...register("img")} placeholder="Provide Tour img url only" />
                                    <br />
                                    <input className="form-control" type="number" {...register("price")} placeholder="Tour Price" />
                                    <br />
                                    <br />
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AddTour;