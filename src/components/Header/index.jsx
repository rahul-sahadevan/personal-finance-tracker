import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import { auth } from "../../firebase";
import {  signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";

function Header(){
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate("/dashboard")
        }

    },[user,loading])
    // logout funtion-------------------
    function logoutFun(){
        try{
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate("/signin")
                toast.success("Loged out succesfully!")
              }).catch((error) => {
                // An error happened.
              });
              

        }
        catch(e){
            toast.error(e.message)
        }
    }
    // function to navigate to login or sign up page
    function handleHome(){
        navigate("/")
    }
   
    // 
    return (
        <div className="nav-bar">
            <p className="logo" ><img className="logo-image" src='src\assets\fi-high-resolution-logo.png'></img>nancely.</p>
            {
                user ?(
                    <div className="photo-logout">
                        <div>
                            <img src={user.photoURL}></img>
                        </div>
                        <p className="logo link" onClick={logoutFun}>Logout</p>
                    </div>
    
                ):
                (
                    <div className="photo-logout">
                        <p className="logo link" onClick={handleHome}>Home</p>
                    </div>

                )

            }
           
            
           
        </div>
    )
}
export default Header