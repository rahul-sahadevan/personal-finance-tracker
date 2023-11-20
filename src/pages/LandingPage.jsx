import React from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import {ArrowDownRight, ExternalLink, Facebook, GitHub, Info, Instagram, Linkedin, Twitter} from 'react-feather'
import { Row,Card } from 'antd';


const LandingPage = ()=>{
    const navigate = useNavigate();

    function handleLogin(){
        navigate("/signin")
    }

    return (
        <>
            <div className="nav-bar">
                <p className="logo" ><img className="logo-image" src='src\assets\fi-high-resolution-logo.png'></img>nancely.</p>
                <div className="photo-logout"> 
                    <p className="logo link" onClick={handleLogin}>Login/Signin</p>
                </div>
            </div>
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
                  

                    <div className='major-image'>
                        <div className='first-image'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image.jpg" alt="" class="app-photo"></img>

                        </div>
                        <div className='second-image'>
                            <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc14226dae299806bc7977_Earnings%20Image.jpg" loading="lazy" sizes="(max-width: 479px) 100px, (max-width: 991px) 150px, 250px"  alt="" className="_100width"></img>

                        </div>
                    </div>
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
                        <p className='text-content'>Trusted by Top-tier product campanies</p>

                    </div>

                    <br></br>
                    <div style={{padding:'80px'}}>
                        <p className='text-content-2'>We can help you manage from top to bottom, all <br></br>the layers.</p>
                        <br></br>
                        <br></br>
                        <p className='text-content'>With user-friendly interfaces and powerful analytics, you can gain valuable insights into your financial health, set achievable goals, and track your progress over time. Take control of your finances and embark on a journey towards financial stability with our secure and efficient financial tracker.</p>
                    </div>
                    <br></br>
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
                    <div className='split-content'>
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
                        <div>
                            <p className='text-content-2'>All in one platform, from mobile to desktop everything you need is here</p>
                            <br></br>
                            <p className='text-content'>Our finance tracking web app is designed with full device compatibility, ensuring a seamless and responsive experience across desktops, laptops, tablets, and smartphones.</p>
                        </div>
                        {/* ------------- */}

                        <div className='split-content'>
                            

                            <div className='split-1'>
                                <div>
                                    <p className='text-content-2'>Handcrafted  to Manage all your data</p>
                                    <p className='text-content'>Enjoy the convenience of our finance management web app on any device – from desktops to mobile phones. Our responsive design and touch-friendly features provide a consistent and user-friendly experience.</p>
                                </div>
                                <br></br>
                                <p className='text-content'>Device compatibility </p>
                                <br></br>
                                <ul className='ul-list'>
                                    <li>
                                        <Info/>
                                        <p className='text-content'>You can access financely in laptops.</p>
                                    </li>
                                    <li>
                                        <Info/>
                                        <p className='text-content'>You can access financely in desktops.</p>
                                    </li>
                                    <li>
                                        <Info/>
                                        <p className='text-content'>You can access financely in Smartphones.</p>
                                    </li>
                                </ul>
                            </div>        

                            <div className='split-2 overlap-image-div'>
                                <img src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4e601a60ce1d2bb940_Slider%20Image%2002.jpg" loading="lazy" alt="" className="feature-image"></img>
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
                            <h1>
                                Budgeting and Goal Setting:
                                <ArrowDownRight/>
                            </h1>
                            <p className='text-content feature-text'>Allow users to set monthly or yearly budgets for different expense categories (e.g., groceries, utilities, entertainment)</p>
                            
                        </Card>
                        <Card className='my-card-2'>
                            <h1>
                                Financial Insights and Analytics
                                <ArrowDownRight/>
                            </h1>
                            <p className='text-content feature-text '>Provide users with visualizations and analytics of their spending patterns over time. Charts and graphs can help users better understand where their money is going.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h1>
                                Data Export and Reports
                                <ArrowDownRight/>
                            </h1>
                            <p className='text-content feature-text'>Provide users with the ability to export their financial data in common formats (CSV, PDF). This can be useful for tax purposes or for creating custom reports.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h1>
                                Data Storage Using Firebase
                                <ArrowDownRight/>
                            </h1>
                            <p className='text-content feature-text'>Securely store and access your financial data with confidence. Our app leverages Firebase for robust and reliable cloud storage, ensuring your information is safely managed and accessible across devices.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h1>
                                Sort Data
                                <ArrowDownRight/>
                            </h1>
                            <p className='text-content feature-text'>Effortlessly organize your financial records with our intuitive sorting feature. Whether by date, category, or amount, our app empowers users to gain insights into their spending patterns and make informed financial decisions.</p>
                        </Card>
                        <Card className='my-card-2'>
                            <h1>
                                Visual Data Presentation
                                <ArrowDownRight/>
                            </h1>
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
                                <input type='email' placeholder='Enter Email' className='input-field' required></input>
                                <button className='buy-btn2' type='submit'>Submit</button>
                            </p>
                            <div className='layer'>
                                <p className='text-content'>Enter Your Email</p>
                               
                                <ExternalLink/>
                            </div>
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
                            <img src='src\assets\fi-high-resolution-logo.png' className='logo-image'></img>
                            nancely
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