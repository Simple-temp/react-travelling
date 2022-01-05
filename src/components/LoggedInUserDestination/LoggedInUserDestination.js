import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "./LoggedInUserDestination.css";
import Rectangle from "../../img/place/Rectangle 26.png";
import Rectangles from "../../img/place/Rectangle 27.png";
import Rectangless from "../../img/place/Rectangle 28.png";
import st from "../../img/icon/st.png"
import { UserContext } from '../../App';

const LoggedInUserDestination = () => {
    const {id} = useParams();
    const [loggedInUser,setloggedInUser] = useContext ( UserContext )
    let allplace ;
    if(id==1 || id==2 || id==3)
    {
        allplace = <div className="row">
            {
                id==1 && <h4>Stay in Sajek</h4>
            }
            {
                id==2 && <h4>Stay in Sreemongol</h4>
            }
            {
                id==3 && <h4>Stay in Sundorbon</h4>
            }
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img-box">
                            <img src={Rectangle} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="room-info">
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nisi!</h6>
                            <ul>
                                <li>4 Guests</li>
                                <li>2 bedrooms </li>
                                <li>2 bed </li>
                                <li>2 Bath</li>
                            </ul>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem ipsum dolor sit.</span>
                            <ul>
                                <li> <img src={st} alt="" /> 4.9(20)</li>
                                <li>$34/night</li>
                                <li>$136 total</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-5">
                        <div className="img-box">
                            <img src={Rectangles} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="room-info">
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nisi!</h6>
                            <ul>
                                <li>4 Guests</li>
                                <li>2 bedrooms </li>
                                <li>2 bed </li>
                                <li>2 Bath</li>
                            </ul>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem ipsum dolor sit.</span>
                            <ul>
                                <li> <img src={st} alt="" /> 4.9(20)</li>
                                <li>$34/night</li>
                                <li>$136 total</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-5">
                        <div className="img-box">
                            <img src={Rectangless} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="room-info">
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nisi!</h6>
                            <ul>
                                <li>4 Guests</li>
                                <li>2 bedrooms </li>
                                <li>2 bed </li>
                                <li>2 Bath</li>
                            </ul>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem ipsum dolor sit.</span>
                            <ul>
                                <li> <img src={st} alt="" /> 4.9(20)</li>
                                <li>$34/night</li>
                                <li>$136 total</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">

            </div>
        </div>
    }
    return (
        <div className='userdestination'>
                <div className="main">
                    <div className="row justify-content-between">
                            <div className="col-lg-4">
                                <div className="logo">
                                    <a href="/">Travelling</a>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <ul className='usermenu'>
                                    <li>
                                        <a>news</a>
                                    </li>
                                    <li>
                                        <a>destination</a>
                                    </li>
                                    <li>
                                        <a>blog</a>
                                    </li>
                                    <li>
                                        <a>contact</a>
                                    </li>
                                    <li>
                                        {
                                            <img src={loggedInUser.img} alt="" />  
                                        }
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            <div className="container">
                {
                    allplace
                }
            </div>
        </div>
    );
};

export default LoggedInUserDestination;