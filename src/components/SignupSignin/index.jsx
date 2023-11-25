import React,{ useRef, useState} from "react";
import './style.css'
import Input from "../input";
import Button from "../Button";
import { toast } from "react-toastify";

import {createUserWithEmailAndPassword ,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth ,db} from "../../firebase";

import { useNavigate } from "react-router-dom";
import {doc,getDoc,setDoc} from 'firebase/firestore'
import { provider } from "../../firebase";


function SignupSignin(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword,setCpassword] = useState('');
    const [loading,setLoading] = useState(false)
    const [loginForm,setLoginForm] = useState(false)
    const navigate = useNavigate()

    function signUpwithEmail(){
        setLoading(true)
        if(name!='' && email!=''&& password!='' && cPassword!=''){
            if(password === cPassword){
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    toast.success('User Created')
                    setLoading(false)
                    setName('')
                    setEmail('');
                    setPassword('');
                    setCpassword('')
                    navigate('/dashboard')
                    // ...

                    // create doc function 
                    createDoc(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                    console.log(errorMessage)
                    setLoading(false)
                    navigate('/dashboard')
                    // ..
                });
                
            }
            else{
                toast.error('Passowrd and Confirm Password need to e same!')
            }
        }
        else{
            toast.error('All fields are manditory!')
            setLoading(false)
        }

    }
    // create doc fuction --------------------

    async function createDoc(user){
        
        if(!user) return;

        const userRef = doc(db,'users',user.uid)
        const userData = await getDoc(userRef)

        if(!userData.exists()){
            setLoading(true)

            try{
                await setDoc(doc(db,'user',user.uid),{
                    name : user.displayName ? user.displayName : name,
                    email:user.email,
                    photoURL:user.photoURL ? user.photoURL : "",
                    createdAt:new Date(),
                })
                setLoading(false)
                // toast.success("Doc Created!")
    
            }
            catch(e){
                setLoading(false)
                toast.error(e.message)
            }
        }
        else{
            toast.error('Doc already exists!')
        }


    }

    // function login -------------------

    function loginwithEmail(){
        setLoading(true)
        if(email != '' && password != ''){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                toast.success('Login Succesfully')
                setLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
            });

        }
        else{
            toast.error('All fields required!')
            setLoading(false)
        }

    }
// Sign in using google function 

    function signinUsingGoogle(){
        setLoading(true)
        try{
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user)
                createDoc(user)
                navigate("/dashboard")
                toast.success('User Authenticated!')
                setLoading(false)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                setLoading(false)
                toast.error(errorMessage)
            });

        }
        catch(e){
            console.log(e)
            setLoading(false)
            toast.error(e.message)
        }
    }


    return (
        <>
        {
            loginForm ? (
                <div className="signup-wrapper">
                    <h2 className="title">
                        Sign Up on <span style={{color:'var(--theme)'}}>Financily.</span>
                    </h2>
                    <form>
                       
                        <Input 
                            label={'Email'} 
                            state={email}
                            setState={setEmail}
                            placeholder={'@John Doe'}
                            type={'email'}
                        />
                        <Input 
                            label={'Password'} 
                            state={password}
                            setState={setPassword}
                            placeholder={'Eample123'}
                            type={'password'}
                        />
                       

                    </form>
                    <Button dissabled={loading} 
                        text={loading ? 'Loading...':'Signup Using Email or Password'} 
                        onClick={loginwithEmail}
                    />

                    <p className="p-login">or</p>
                    
                    <Button onClick={signinUsingGoogle}
                        dissabled={loading} text={loading ? 'Loading...' : 'Signup Using Google'} 
                        blue={true}
                     />
                    <p className="p-login">
                        or Dont have an account Already? 
                        <span className="click-here" onClick={()=>setLoginForm(false)}>Click here</span>
                    </p>
                </div>

            )
            :
            (
                <div className="signup-wrapper">
                    <h2 className="title">
                        Login on <span style={{color:'var(--theme)'}}>Financily.</span>
                    </h2>
                    <form>
                        <Input 
                            label={'Full Name'} 
                            state={name}
                            setState={setName}
                            placeholder={'John Doe'}
                            type={'text'}
                        />
                        <Input 
                            label={'Email'} 
                            state={email}
                            setState={setEmail}
                            placeholder={'@John Doe'}
                            type={'email'}
                        />
                        <Input 
                            label={'Password'} 
                            state={password}
                            setState={setPassword}
                            placeholder={'Eample123'}
                            type={'password'}
                        />
                        <Input 
                            label={'Confirm Password'} 
                            state={cPassword}
                            setState={setCpassword}
                            placeholder={'Example123'}
                            type={'password'}
                        />

                    </form>
                    <Button dissabled={loading}
                        text={loading ? 'Loading...':'Login Using Email or Password'} 
                        onClick={signUpwithEmail}
                    />

                    <p className="p-login">or</p>
                    <Button onClick={signinUsingGoogle} 
                        dissabled={loading} 
                        text={loading ? 'Loading...' : 'Login Using Google'} 
                        blue={true}
                    />
                    <p className="p-login">
                        or have an account Already? 
                        <span className="click-here" onClick={()=> setLoginForm(true)}>Click here</span>
                    </p>
                </div>
            )
        }
        </>
    )
}
export default SignupSignin