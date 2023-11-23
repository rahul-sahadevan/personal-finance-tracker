import React, { useEffect, useState } from 'react'
import {Grid,BarChart2, CreditCard, DollarSign, Moon} from 'react-feather'
import './style.css'
import ThemeContext from '../../ThemeContext/ThemeContext';
import { useContext } from 'react';

function SideBar(){
    const [toggle,setToggle] = useState(false);
    const {them,changeTheme} = useContext(ThemeContext)


    const handleTogleChange = ()=>{
        if(toggle === true){
            changeTheme('dark')
        }
        else{
            changeTheme('light');
        }
    }

    function handleToggle(){
        if(toggle === true){
            setToggle(false);
        }
        else{
            setToggle(true)
        }
    }
    

    useEffect(()=>{
        console.log("xxx")
        handleTogleChange()

    },[toggle])

    return (
        <div className='side-bar'>
            <div className='side-btn'>
                <Grid />
                <div className='hover-div'></div>
            </div>
            <div className='side-btn'>
                <BarChart2 />
                <div className='hover-div'></div>
            </div>
            <div className='side-btn'>
                <CreditCard />
                <div className='hover-div'></div>
            </div>
            <div className='side-btn'>
                <DollarSign />
                <div className='hover-div'></div>
            </div>
            <div className='side-btn moon-btn'>
                <Moon  onClick={handleToggle}/>
                <div className='hover-div'></div>
            </div>
           
        </div>
    )
}

export default SideBar