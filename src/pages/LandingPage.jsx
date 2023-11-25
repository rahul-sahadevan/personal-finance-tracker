import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import {ArrowDownRight, ExternalLink, Facebook, GitHub, Info, Instagram, Linkedin, Twitter} from 'react-feather'
import { Row,Card ,Carousel} from 'antd';
import './style.css'

const LandingPage = ()=>{
    const navigate = useNavigate();
    const [rotation,setRotation] = useState({x:0,y:0})

    // function to navigate to the signin page-------------
    function handleLogin(){
        navigate("/signin")
    }

    // function to handle the hero image rotation while hovering---------------
    const handleImageRotation = (e)=>{
        const container = e.currentTarget;
        const { clientX, clientY } = e;

        const rotationX = ((clientY / container.offsetHeight - 0.5) * 60).toFixed(2);
        const rotationY = ((clientX / container.offsetWidth - 0.5) * 60).toFixed(2);

        setRotation({ x: rotationX, y: rotationY });
    }

    // handleing the mouse leave condition --------------------------
    const handleMouseLeave = (e)=>{
        const container = e.currentTarget;

        setRotation({x:0,y:0})
    }


    return (
        <>
        {/* nacvbar div-------------- */}
            <div className="nav-bar landing-nav">
                <p className="logo-image logo" >Financely.</p>
                <div className="photo-logout"> 
                    <p className="logo link" onClick={handleLogin}>Login/SignIn</p>
                </div>
            </div>
            {/* lading page for the hero section --------------------- */}
            <div className='landing-div'>
                <div className='hero-section'>
                    <p className='landing-title'><span className='financely'>Financely</span> to made Mange all your Data register</p>  
                    <br></br>
                    <br></br>
                    <p className='text-content text'>
                        Welcome to our comprehensive financial tracker website, where managing your finances has never been easier. Our platform provides users with intuitive tools to effortlessly monitor income, expenses, and budget goals. 
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='buy-btn'>
                        <button className='buy-btn1'>Buy for $24</button>
                        <button className='buy-btn2'>Learn More</button>

                    </div>
                    <br></br>
                  

                    <div 
                        className='major-image' 
                        onMouseMove={handleImageRotation} 
                        onMouseLeave={handleMouseLeave} 
                        style={{transform:`rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`}}
                    >

                        <div className='first-image'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image.jpg" alt="" class="app-photo"></img>

                        </div>
                        <div className='second-image'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc14226dae299806bc7977_Earnings%20Image.jpg" loading="lazy" sizes="(max-width: 479px) 100px, (max-width: 991px) 150px, 250px"  alt="" className="_100width"></img>

                        </div>
                        <div className='third-image'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141adc1635dfab4166e7_Visitor%20Insights.jpg" loading="lazy" sizes="(max-width: 767px) 180px, (max-width: 991px) 280px, 506px"  alt="" class="_100width"></img>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='product-div'>
                        <div className='product-div-1'>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b530e84509b65dc688_Logo01.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5d721c4ea063fdc48_Logo02.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5751014695cfdd3a4_Logo03.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b58478829018399285_Logo04.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="	https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b551c61c7f1e3a3814_Logo05.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5b64ae6883bfa1b23_Logo06.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b52ce68c2825f42a43_Logo07.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5455ce96b4f6ea81a_Logo08.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b56fcb81136a488baf_Logo09.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>
                            <div>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b57c758d6bb27ae1d9_Logo10.svg" loading="lazy" alt="" class="logo-small"></img>
                            </div>

                        </div>
                       <br></br>
                        <p className='text-content texty'>Trusted by Top-tier product campanies</p>

                    </div>

                    <br></br>
                    {/* ------------------------------- */}
                    <div className='wecan-help' >
                        <p className='text-content-2'>We can help you manage from top to bottom, all <br></br>the layers.</p>
                        <br></br>
                        <br></br>
                        <p className='text-content'>With user-friendly interfaces and powerful analytics, you can gain valuable insights into your financial health, set achievable goals, and track your progress over time. Take control of your finances and embark on a journey towards financial stability with our secure and efficient financial tracker.</p>
                    </div>
                    <br></br>
                    {/* ----------------------------------- */}
                    <div className='split-content'>
                        <div className='split-1'>
                            <div>
                                <p className='text-content-2'>Top Management, to help</p>
                                <p className='text-content-2'>you see the bigger picture</p>
                                <p className='text-content'>
                                    Managin data is very important ,in financely you can manage your data without any issue!
                                </p>
                            </div>
                            <br></br>
                            <p className='text-content'>Easy way to manage and store your informations.</p>
                            <br></br>
                            <ul className='ul-list'>
                                <li>
                                    <Info/>
                                    <p className='text-content'>Set your goal in financely.</p>
                                </li>
                                <li>
                                    <Info/>
                                    <p className='text-content'>Get easy access on the latest features.</p>
                                </li>
                                <li>
                                    <Info/>
                                    <p className='text-content'>Share your progress with your friends.</p>
                                </li>
                            </ul>
                        </div>

                        <div className='split-2'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4bd6cede115ca195c43f_Feature%20Image%2001.svg" loading="lazy" alt="" class="feature-image"></img>
                        </div>
                    </div>
                    {/* ------------------------------------- */}
                    <div className='split-content split-reverse'>
                        <div className='split-2'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4bd6a0bf2350ffd1ef9f_Feature%20Image%2002.svg" loading="lazy" alt="" class="feature-image"></img>
                        </div>

                        <div className='split-1'>
                            <div>
                                <p className='text-content-2'>Micromanage every data so there are no slip-ups</p>
                                <p className='text-content'>In financely you can find different feature which can make your life easy.</p>
                            </div>
                            <br></br>
                            <p className='text-content'>Some common features in financely.</p>
                            <br></br>
                            <ul className='ul-list'>
                                <li>
                                    <Info/>
                                    <p className='text-content'>Secured way to store the user data.</p>
                                </li>
                                <li>
                                    <Info/>
                                    <p className='text-content'>Accesing data without delay.</p>
                                </li>
                                <li>
                                    <Info/>
                                    <p className='text-content'>You can get the updates from financely.</p>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    {/* --------------------------------- */}

                    <div className='grey-div'>
                        <div className='all-in-one'>
                            <p className='text-content-2'>All in one platform, from mobile to desktop everything you need is here</p>
                            <br></br>
                            <p className='text-content'>Our finance tracking web app is designed with full device compatibility, ensuring a seamless and responsive experience across desktops, laptops, tablets, and smartphones.</p>
                        </div>
                        {/* ------------- */}

                        <div className='split-content'>
                            

                            <div className='split-1'>
                                <div>
                                    <p className='text-content-2'>Handcrafted  to Manage all your data</p>
                                    <p className='text-content'>Get the data directly on your phone, scroll and swipe away to get informed and updated.</p>
                                </div>
                                <br></br>
                                <ul className='ul-list'>
                                    <li>
                                        <Info/>
                                        <p className='text-content'>Easy to use and understand</p>
                                    </li>
                                    <li>
                                        <Info/>
                                        <p className='text-content'>Accessible from anywhere</p>
                                    </li>
                                    <li>
                                        <Info/>
                                        <p className='text-content'>Auto sync between devices with the latest data</p>
                                    </li>
                                </ul>
                            </div>        

                            <div className='split-2 overlap-image-div'>
                                <Carousel className='carousel-div' autoplay>
                                    <div>

                                        <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4e7179fecc6348f131_Slider%20Image%2001.jpg" loading="lazy" alt="" class="feature-image"></img>
                                    </div>
                                    <div>

                                        <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4e601a60ce1d2bb940_Slider%20Image%2002.jpg" loading="lazy" alt="" className="feature-image"></img>
                                    </div>
                                    <div>

                                        <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4f8f3058338a17893b_Slider%20Image%2003.jpg" loading="lazy" alt="" class="feature-image"></img>
                                    </div>
                                </Carousel>
                            </div>                
                        </div>
                    {/* ------------ */}


                </div>
                <div className='power-div'>
                    <div className='powerfull-div'>
                        <p className='text-content-2'>Access <span className='financely'>powerful</span> and helpful features.</p>
                        <p className='text-content'>You can get a free demo of financely & it's new features by clicking the button below.</p>
                        <br></br>
                        <button className='buy-btn1'>Request Demo</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='feature-div'>
                        
                        <Card className='my-card-2'>
                            <h2>
                                Budgeting and Goal Setting:
                                <ArrowDownRight/>
                            </h2>
                            <p className='text-content feature-text'>Allow users to set monthly or yearly budgets for different expense categories (e.g., groceries, utilities, entertainment)</p>
                            <div className='layer'></div>
                            
                        </Card>
                        <Card className='my-card-2'>
                            <h2>
                                Financial Insights and Analytics
                                <ArrowDownRight/>
                            </h2>
                            <p className='text-content feature-text '>Provide users with visualizations and analytics of their spending patterns over time. Charts and graphs can help users better understand where their money is going.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h2>
                                Data Export and Reports
                                <ArrowDownRight/>
                            </h2>
                            <p className='text-content feature-text'>Provide users with the ability to export their financial data in common formats (CSV, PDF). This can be useful for tax purposes or for creating custom reports.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h2>
                                Data Storage Using Firebase
                                <ArrowDownRight/>
                            </h2>
                            <p className='text-content feature-text'>Securely store and access your financial data with confidence. Our app leverages Firebase for robust and reliable cloud storage, ensuring your information is safely managed and accessible across devices.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h2>
                                Sort Data
                                <ArrowDownRight/>
                            </h2>
                            <p className='text-content feature-text'>Effortlessly organize your financial records with our intuitive sorting feature. Whether by date, category, or amount, our app empowers users to gain insights into their spending patterns and make informed financial decisions.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h2>
                                Visual Data Presentation
                                <ArrowDownRight/>
                            </h2>
                            <p className='text-content feature-text'>Visualize your financial journey with dynamic charts and graphs. Our app provides insightful graphical representations, transforming raw data into clear visualizations to help users track, analyze, and optimize their financial habits.</p>
                        </Card>                    
                    </div>
                    {/* --------------- */}
                    <div className='hcgs'>
                        <Card className='hcgs-card'>
                            <h1 className='text-content-2'>Help</h1>
                            <p className='text-content'>What kind of help you need</p>
                            <div className='layer'>
                                <p className='text-content'>I'am Ready To Help</p>
                                
                                    <ExternalLink/>
                            </div>
                        </Card>
                        <Card className='hcgs-card'>
                            <h1 className='text-content-2'>Contact</h1>
                            <p className='text-content'>Contact@mycompany.gmail.com</p>
                            <div className='layer'>
                                <p className='text-content'>Contact Me</p>
                                <ExternalLink/>
                            </div>
                        </Card>
                        <Card className='hcgs-card'>
                            <h1 className='text-content-2'>Get to Know us</h1>
                            <br></br>
                            <p className='input-tag'>
                                <input type='email' placeholder='Enter Email' className='input-field email-input' required></input>
                                <button className='buy-btn2 sub-btn' type='submit'>Submit</button>
                            </p>
                            
                        </Card>
                        <Card className='hcgs-card'>
                            <h1 className='text-content-2'>Security</h1>
                            <p className='text-content'>Scurity@mycompany.gmail.com</p>
                            <div className='layer'>
                                <p className='text-content'>Security Features</p>
                                <ExternalLink className='link-box'/>
                            </div>
                        </Card>

                    </div>
                    {/* ----------------- */}
                    <div className='logo-email'>
                        <p className='logo-image logo'>
                            Financely
                        </p>
                        <div>
                            <p className='text-content'>myCompany.welcome@gmail.com</p>
                        </div>

                    </div>
                    <br></br>
                    {/* ---------- */}
                    <div className='copy-right-div'>
                        <p className='text-content'>All Rights In My pocket</p>
                        <div className='social-media'>
                            <Linkedin/>
                            <Facebook/>
                            <Twitter/>
                            <GitHub/>
                            <Instagram/>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage