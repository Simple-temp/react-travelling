import React from 'react';
import sajek from "../../img/place/Sajek.png";
import sreemongol from "../../img/place/Sreemongol.png";
import sundorbon from "../../img/place/sundorbon.png";
import { Link } from 'react-router-dom';

const PlaceData = (props) => {
    const {id,name,description,img} = props.place;
    return (
        <div className="row">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="item">
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                    <button className='btn btn-primary'><Link to="placeDetails" className='link'>Booking<i class="fas fa-long-arrow-alt-right"></i></Link></button>
                                </div>
                            </div>
                                <div className="col-lg-6 d-flex justify-content-end">
                                <img src={img} class="d-block img-size" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default PlaceData;