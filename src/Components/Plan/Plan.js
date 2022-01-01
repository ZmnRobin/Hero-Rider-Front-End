import React from 'react'
import Navbar from '../Navbar/Navbar'
import rider from  '../../Images/rider.png'
import learner from  '../../Images/car.png'
import '../SignUp/signup.css'

export default function Plan() {
    return (
        <div className='signup'>
            <Navbar/>
            <div className='container'>
                <div className='sign-parent'>
                   <h4 className='signupas'>Learner Plan</h4>
                </div>
               <div className='rider-info'>
                    <div className='row parent'>
                        <div className='col-md-5 p-5 child'>
                             <h3>BIKE RIDING</h3>
                             <br/>   
                             <img className='rider-img' src={rider} alt="rider"/> 
                             <br/> <br/>
                             <h3>PRICE : 100$</h3>
                        </div>
                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-5 p-5 child'>
                            <h3>CAR RIDING</h3>
                            <br/>
                            <img className='learner-img' src={learner} alt="learner"/>
                            <br/> <br/>
                            <h3>PRICE : 200$</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
