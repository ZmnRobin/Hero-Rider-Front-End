import React,{useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import '../SignUp/signup.css'
import './login.css'
import firebase from "firebase/compat/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';


if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
}

export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');

    const [user,setUser]=useContext(UserContext);

    const auth = getAuth();
    console.log(email,password);
    const Login=()=>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email);
                setUser({
                    email:user.email,
                    uid:user.uid
                });
                navigate('/admin');
            })
            .catch((error) => {
                alert("Invalid email or password");
          });
        }


    return (
        <div className='signup'>
            <Navbar/>
            <div className='container'>
                <div className='parent-login'>
                    <div className='child-login'>
                        <h2 className='text-center'>Login</h2>
                        <br/>
                        <div>
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Email</label>
                                <input type="email" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='email..' onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <br/>
                           <div class="input-group mb-3">
                             <label class="input-group-text" for="inputGroupSelect01">Password</label>
                            <input type="password" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                           </div>
                           <br/> 
                           <div>
                               <button className='btn btn-primary btn-block w-100' onClick={Login}>Login</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
