import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css"
import sajek from "../../img/place/Sajek.png";
import sreemongol from "../../img/place/Sreemongol.png";
import sundorbon from "../../img/place/sundorbon.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header>
            <div className='container'>
                <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="row">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center">
                                    <div className="item">
                                        <h1>Sajek</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis est facere officiis, veniam beatae ex saepe vero quidem optio fugit itaque magnam illo porro quasi? Consequatur temporibus enim perspiciatis distinctio, repudiandae qui, repellendus sit blanditiis, quae ex doloremque alias adipisci?</p>
                                        <button className='btn btn-primary'><Link to={`/placeDetails/1`} className='link'>Booking<i class="fas fa-long-arrow-alt-right"></i></Link></button>
                                    </div>
                                </div>
                                    <div className="col-lg-6 d-flex justify-content-end">
                                    <img src={sajek} class="d-block img-size" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center">
                                        <div className="item">
                                            <h1>sreemongol</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis est facere officiis, veniam beatae ex saepe vero quidem optio fugit itaque magnam illo porro quasi? Consequatur temporibus enim perspiciatis distinctio, repudiandae qui, repellendus sit blanditiis, quae ex doloremque alias adipisci?</p>
                                            <button className='btn btn-primary'><Link to={`/placeDetails/2`} className='link'>Booking<i class="fas fa-long-arrow-alt-right"></i></Link></button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-end">
                                        <img src={sreemongol} class="d-block img-size" alt="..."/>
                                    </div>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center">
                                        <div className="item">
                                            <h1>sundorbon</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis est facere officiis, veniam beatae ex saepe vero quidem optio fugit itaque magnam illo porro quasi? Consequatur temporibus enim perspiciatis distinctio, repudiandae qui, repellendus sit blanditiis, quae ex doloremque alias adipisci?</p>
                                            <button className='btn btn-primary'><Link to={`/placeDetails/3`}  className='link'>Booking<i class="fas fa-long-arrow-alt-right"></i></Link></button>
                                        </div>
                                    </div>
                                        <div className="col-lg-6 d-flex justify-content-end">
                                        <img src={sundorbon} class="d-block img-size" alt="..."/>
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
            </div>
        </header>
    );
};

export default Home;
