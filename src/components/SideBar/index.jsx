import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Menu,Grid,BarChart2, CreditCard, DollarSign, Moon, LogOut} from 'react-feather'
import './style.css'

import { auth } from "../../firebase";
import {  signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";

import ThemeContext from '../../ThemeContext/ThemeContext';
import { useContext } from 'react';


function SideBar(){
    const [toggle,setToggle] = useState(false);
    const {them,changeTheme} = useContext(ThemeContext)
    const [active,setActice] = useState('active');

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate("/dashboard")
        }

    },[user,loading])

    // function for logoun-----------------

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

    // function to navigate to home ----------------
    function handleHome(){
        navigate("/")
    }


    const handleTogleChange = ()=>{
        if(toggle === true){
            changeTheme('dark')
        }
        else{
            changeTheme('light');
        }
    }

    function handleToggle(){
        setActice(true)
        if(toggle === true){
            setToggle(false);
        }
        else{
            setToggle(true)
        }
    }

    function handleMenu(){
        if(active === 'active'){
            setActice('hide-active')
        }
        else{
            setActice('active')
        }

    }

 

    useEffect(()=>{
        console.log("xxx")
        handleTogleChange()

    },[toggle])

    return (
        <div className='side-bar'>
            <div className='side-btn'>
                <Grid/>
                <div className='hover-div'></div>
            </div>
            <div className='side-btn'>
                <BarChart2/>
                <div className='hover-div'></div>
            </div>
            <div className='side-btn'>
                <CreditCard />
                <div className='hover-div active'></div>
            </div>
            <div className='side-btn'>
                <DollarSign/>
                <div className='hover-div'></div>
            </div>
            <div className='side-btn moon-btn'>
                <Moon  onClick={handleToggle}/>
                <div className='hover-div'></div>
            </div>
            {
                user ?(
                <div className="photo-logout">
                        <div className='side-btn logout-div'>
                            < LogOut onClick={logoutFun} />
                            <div className='hover-div'></div>
                        </div>
                        <div>
                            <img src={user.photoURL}></img>
                        </div>
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

export default SideBar