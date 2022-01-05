import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./PlaceDetails.css"
import ic from "../../img/icon/ic.png";
import Navbar from '../Navbar/Navbar';

const PlaceDetails = () => {
    const {id} = useParams();
    let sajek ;
    let sreemongol;
    let sundorbon;
    if(id==1)
    {
        sajek = <div className="row sajek">
        <div className="col-lg-6 col-md-6-col-sm-12 d-flex align-items-center">
            <div className="d-box">
                <h3>sajek</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam ad eaque vitae eligendi quas atque doloribus magni eius, ipsa, vel dolorum! Temporibus ratione quis fugiat ullam laboriosam. Sunt ex dolorum similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero vitae officiis, voluptatibus possimus aperiam. Quibusdam, ullam excepturi!
                </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6-col-sm-12">
            <div className="booking-box">
                <div className="origin">
                    <span>origin</span>
                    <p>sajek</p>
                </div>
                <div className="destination">
                    <span>destination</span>
                    <p>Dhaka</p>
                </div>
                <div className="from">
                    <div className="row">
                        <div className="col-lg-5">
                            <i>From : </i>
                            <small>1/9</small>
                            <img src={ic} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <i>To : </i>
                            <small>1/9</small>
                            <img src={ic} alt="" />
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary d-block w-100 mt-3'><Link to={`/userDestination/1`} className='bookbtn'>Start Booking</Link></button>
            </div>
        </div>
        </div>;
    }
    if(id==2)
    {
        sajek = <div className="row sajek">
        <div className="col-lg-6 col-md-6-col-sm-12 d-flex align-items-center">
            <div className="d-box">
                <h3>sreemongol</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam ad eaque vitae eligendi quas atque doloribus magni eius, ipsa, vel dolorum! Temporibus ratione quis fugiat ullam laboriosam. Sunt ex dolorum similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero vitae officiis, voluptatibus possimus aperiam. Quibusdam, ullam excepturi!
                </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6-col-sm-12">
            <div className="booking-box">
                <div className="origin">
                    <span>origin</span>
                    <p>sreemongol</p>
                </div>
                <div className="destination">
                    <span>destination</span>
                    <p>Dhaka</p>
                </div>
                <div className="from">
                    <div className="row">
                        <div className="col-lg-5">
                            <i>From : </i>
                            <small>1/9</small>
                            <img src={ic} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <i>To : </i>
                            <small>1/9</small>
                            <img src={ic} alt="" />
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary d-block w-100 mt-3'><Link to={`/userDestination/2`} className='bookbtn'>Start Booking</Link></button>
            </div>
        </div>
        </div>;
    }
    if(id==3)
    {
        sajek = <div className="row sajek">
        <div className="col-lg-6 col-md-6-col-sm-12 d-flex align-items-center">
            <div className="d-box">
                <h3>sundorbon</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam ad eaque vitae eligendi quas atque doloribus magni eius, ipsa, vel dolorum! Temporibus ratione quis fugiat ullam laboriosam. Sunt ex dolorum similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero vitae officiis, voluptatibus possimus aperiam. Quibusdam, ullam excepturi!
                </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6-col-sm-12">
            <div className="booking-box">
                <div className="origin">
                    <span>origin</span>
                    <p>sundorbon</p>
                </div>
                <div className="destination">
                    <span>destination</span>
                    <p>Dhaka</p>
                </div>
                <div className="from">
                    <div className="row">
                        <div className="col-lg-5">
                            <i>From : </i>
                            <small>1/9</small>
                            <img src={ic} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <i>To : </i>
                            <small>1/9</small>
                            <img src={ic} alt="" />
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary d-block w-100 mt-3'><Link to={`/userDestination/3`} className='bookbtn'>Start Booking</Link></button>
            </div>
        </div>
        </div>;
    }
    return (
        <div className='placeDetails'>
            <div className="container">
                <Navbar></Navbar>
                {
                    sajek
                }
                {
                    sreemongol
                }
                {
                    sundorbon
                }
            </div>
        </div>
    );
};

export default PlaceDetails;