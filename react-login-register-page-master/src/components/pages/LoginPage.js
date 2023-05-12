import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../../App.css'
   function submit(){
        console.log("Logging in")
        var data = {};
        data.username = document.getElementById('email').value
        data.password = document.getElementById('password').value
        
        axios.post('https://aerothonserver.onrender.com/login', data)
        .then((data) => {
            console.log(data)
        }).catch((err) => console.log(err))

    }
export default function SignInPage() {
    const [click, setClick] = useState(false)
    useEffect(()=>{
        if(click === true){
            submit();
            setClick(false)
        }
    },[click])
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" id='email' name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" id='password' name="password" required />
                </p>
            </form>
            <button id="sub_btn" type="submit" onClick={()=>{
                setClick(true)
            }}>Login</button>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
