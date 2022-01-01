import React from 'react'
import Navbar from '../Navbar/Navbar'
import rider from  '../../Images/rider.png'
import learner from  '../../Images/learner.png'
import './signup.css'
import { useNavigate } from "react-router-dom";

export default function SignUpAs() {
    const navigate = useNavigate();

    const riderForm=()=>{
        navigate('/riderForm')
    }
    const learnerForm=()=>{
        navigate('/learnerForm')
    }
    return (
        <div className='signup'>
            <Navbar/>
            <div className='container'>
                <div className='sign-parent'>
                   <h4 className='signupas'>Sign Up As</h4>
                </div>
               <div className='rider-info'>
                    <div className='row parent'>
                        <div className='col-md-5 p-5 child' onClick={riderForm}>
                             <h3>Rider</h3>
                             <br/>   
                             <img className='rider-img' src={rider} alt="rider"/> 
                        </div>
                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-5 p-5 child' onClick={learnerForm}>
                            <h3>Learner</h3>
                            <br/>
                            <img className='learner-img' src={learner} alt="learner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
