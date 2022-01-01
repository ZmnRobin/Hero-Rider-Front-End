import React,{useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';

export default function LearnerForm() {
    const [user,setUser]=useContext(UserContext);
    
    let nevigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newData={
            name:data.f_name,
            email:data.email,
            pro_pic:data.p_picture[0].name,
            password:data.pass,
            confirm_pass:data.confirm_pass,
            address:data.addr,
            phone:data.phn,
            age:data.age,
            vehicle_type:data.v_type,
            nid:data.nid[0].name,
        }
        
        if(data.pass === data.confirm_pass){
            fetch('https://glacial-mountain-57199.herokuapp.com/riderCollection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setUser({
                        email:data.email,
                        name:data.name,
                    })
                    nevigate('/plan');
                }
            })
        }
        else{
            alert('Password Not Matched');
        }
    }

    return (
        <div className='home'>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <p className='rider-reg'>LEARNER <br/> REGISTRATION FORM</p>
                    </div>
                    <div className='col-md-8'>
                        <div className='rider-form'>
                         <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Full Name</label>
                                <input name='f_name' type="text" class="form-control" id="inputEmail4" placeholder="full name" {...register("f_name", { required: true })}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Email</label>
                                <input name='email' type="email" class="form-control" id="inputPassword4" placeholder="email" {...register("email", { required: true })}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input name='addr' type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required {...register("addr", { required: true })}/>
                            </div>
                            <div class="form-group row">
                                <div class="form-group col-md-8">
                                    <label for="inputAddress2">Phone Number</label>
                                    <input name='phn' type="number" class="form-control" id="inputAddress2" placeholder="01XXXXXXXXX" {...register("phn", { required: true })}/>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputAddress2">Age</label>
                                    <input name='age' type="number" class="form-control" id="inputAddress2" placeholder="Age"    {...register("age", { required: true })}/>
                                </div>
                            </div>

                            <div class="form-group row">
                                
                                <div class="form-group col-md-4">
                                    <label for="inputCity">NID</label>
                                    <input name='nid' type="file" class="form-control" id="inputId"    {...register("nid", { required: true })}/>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">Vehicle Type</label>
                                    <select name='v_type' id="inputType" class="form-control"    {...register("v_type", { required: true })}>
                                        <option selected>Select Vehicle</option>
                                        <option value="car">CAR</option>
                                        <option value="bike">BIKE</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                        <label for="inputZip">Profile Picture</label>
                                        <input name='p_picture' type="file" class="form-control" id="inputProPic"    {...register("p_picture", { required: true })}/>
                                   </div>
                             </div>
                            <div class="form-group row">
                                <div class="form-group col-md-6">
                                    <label for="inputAddress2">Password</label>
                                    <input name='password' type="password" class="form-control" id="inputAddress2" placeholder="password" {...register("pass", { required: true })}/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputAddress2">Confirm Password</label>
                                    <input name='confirm_pass' type="password" class="form-control" id="inputAddress2" placeholder="confirm password" {...register("confirm_pass", { required: true })}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">Sign Up As Learner</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
