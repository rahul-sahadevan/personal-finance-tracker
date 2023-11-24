import React,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import ThemeContext from "../../ThemeContext/ThemeContext";

function Header(){
    const [user, loading] = useAuthState(auth);
    const {theme,changeTheme} = useContext(ThemeContext)
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate("/dashboard")
        }

    },[user,loading])
    // logout funtion-------------------
    console.log(user)
    
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
                        <p  style={{color:'white',fontWeight:"600"}}>Welcome {user.displayName} !</p>
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