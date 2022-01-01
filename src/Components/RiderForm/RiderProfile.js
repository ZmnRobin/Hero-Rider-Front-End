import React,{useContext, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom';
import man from '../../Images/man.png'

export default function RiderProfile() {
    const {email}=useParams();
    const [data,setData]=React.useState([]);

   useEffect(()=>{
    fetch(`https://glacial-mountain-57199.herokuapp.com/${email}`)
    .then(res=>res.json())
    .then(data=>{
        setData(data);
    })
    },[email])

    console.log(data);

    return (
        <div className='home'>
            <Navbar/>
            <div className='container'>
                <br/>
                <h2>Rider Profile</h2>
                <br/>
                <div className='row'>
                    <div className='col-md-4'>
                        <img style={{width:'80%'}} src={man} alt='profile' className='profile-pic'/>
                        <br/> <br/>
                        {/* <h3>Name : {data[0].name}</h3> */}
                    </div>
                    <div className='col-md-8'>
                        <br/> <br/>
                        {/* <h3>Email : {data[0].email}</h3>
                        <h3>Address : {data[0].address}</h3>
                        <h3>Phone : {data[0].phone}</h3>
                        <h3>Age : {data[0].age}</h3> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
