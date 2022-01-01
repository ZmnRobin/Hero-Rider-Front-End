import React,{useEffect,useState,useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import './table.css'
import {UserContext} from '../../App'

export default function Admin() {
    const [data,setData]=useState([]);
    const [search,setSearch]=useState('');

    const [user,setUser]=useContext(UserContext);
    console.log(user);

    const fetchData=()=>{
        fetch("https://glacial-mountain-57199.herokuapp.com/riderCollectionall")
        .then((res) => res.json())
        .then((data) =>{
          setData(data);
        });
    }

    useEffect(() => {
      fetchData()
    },[]);

    return (
        <div className='admin-home'>
            <Navbar/>
            <div className='container'>
                <div>
                    <br/>
                    <h3>Admin Table</h3>
                    <br/>
                    <div className='d-flex'>
                        <div class="input-group input-group-lg w-50">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Search by name/email/phone..' onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                    </div>
                    <br/>
                    <table class="table admin-parent">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Age</th>
                                <th scope="col">Vehicle</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter(item=>{
                                if(search===''){
                                    return item;
                                }
                                else if(item.name.toLowerCase().includes(search.toLowerCase())){
                                    return item;
                                }
                                else if(item.email.toLowerCase().includes(search.toLowerCase())){
                                    return item;
                                }
                                else if(item.phone.toLowerCase().includes(search.toLowerCase())){
                                    return item;
                                }
                            }).map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.age}</td>
                                        <td>{item.vehicle_type}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => {
                                                fetch('https://glacial-mountain-57199.herokuapp.com/deleteRider/'+item._id, {
                                                    method: 'DELETE',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {
                                                    if(data){
                                                        fetchData();
                                                    }
                                                })
                                            }}>X</button>
                                            <input type="checkbox" className='checkbox ms-3'/>
                                        </td>
                                    </tr>
                                )
                            })
                         }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
