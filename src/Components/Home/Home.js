import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import ride from "../../Images/ride.webp"
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();

    const signUp=()=>{
        navigate("/signUpAs")
    }
    return (
        <div className='home'>
            <Navbar/>
                <div className='container'>
                    <div className='hero-info'>
                        <div className='row'>
                            <div className='col-md-6 p-3 first'>
                                <h1>HERO RIDER</h1>
                                <br/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisl eget consectetur consectetur,
                                    nisi nisl euismod nisi, euismod euismod nisi nisl
                                    euismod nisi. <br/>
                                    nisi nisl euismod nisi, euismod euismod nisi nisl
                                    euismod nisi.
                                  
                                </p>
                                <br/> <br/> <br/>
                                <button className='btn btn-primary w-100' onClick={signUp}>Sign Up</button>
                            </div>
                            <div className='col-md-6 p-5'>
                                <img className='ride-img' src={ride} alt="hero"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
