import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import AddTour from './Components/AddTour/AddTour';
import TourDetails from './Components/TourDetails/TourDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyBooking from './Components/MyBooking/MyBooking';
import AllBooking from './Components/AllBooking/AllBooking';
import ServiceMain from './Components/ServiceMain/ServiceMain';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/addtour">
              <AddTour></AddTour>
            </Route>
            <Route exact path="/service">
              <ServiceMain></ServiceMain>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/allBooking">
              <AllBooking></AllBooking>
            </Route>
            <PrivateRoute exact path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/tourDetails/:id">
              <TourDetails></TourDetails>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
