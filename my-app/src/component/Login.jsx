import React, { useState } from 'react'
import { auth } from '../Firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import './Login.css'

import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();



    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);

        navigate('/blogs')

    }
    return (
        <>

            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: "5px", height: "100vh" }}>
                {/* <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" alt="login-with-google" style={{ width: "5%" }} />
                <button style={{ padding: "1.5rem", fontSize: "1.5rem", fontFamily: "sans-serif", fontWeight: "bold", color: "red", borderRadius: "5%" }}
                    onClick={signInWithGoogle}
                >

                    Login with Google</button> */}
  <div class="login-container">
                    <button class="login-button" onClick={signInWithGoogle}>
    <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" alt="Google Logo" class="google-logo" />
    Login with Google
  </button>

            </div>

  </div>
        </>
    )
}

export default Login