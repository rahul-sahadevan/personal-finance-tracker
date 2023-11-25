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
   
    console.log(user)
    
    // function to navigate to home page
    function handleHome(){
        navigate("/")
    }
   
    // 
   
    return (
        <div className="nav-bar">
            <p className="logo" >Financely.</p>
            {
                user ?(
                    <div className="photo-logout">
                        <p  className="welcome-tag">Welcome {user.displayName} !</p>
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