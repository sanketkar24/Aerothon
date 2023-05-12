import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
   function submit(){
        console.log("Logging in")
        var data = {};
        data.username =  document.getElementById('name').value
        data.email = document.getElementById('email').value
        data.role = document.getElementById('role').value
        data.company_name = document.getElementById('company_name').value
        
        var category = document.getElementById('menu')
        data.type = category.options[category.selectedIndex].value
        data.password = document.getElementById('password').value
        
        axios.post('https://aerothonserver.onrender.com/register', data)
        .then((data) => {
            console.log(data)
        }).catch((err) => console.log(err))

    }

export default function SignUpPage() {
 
    const [click, setClick] = useState(false)
    useEffect(()=>{
        if(click === true){
            submit();
            setClick(false)
        }
    },[click])
    return (
        <div className="text-center m-5-auto">
            <h2>Join us today!</h2>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" id='name' name="name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" id='email' name="email" required />
                </p>
                <p>
                    <label>Role</label><br/>
                    <input type="text" id='role' name="role" required />
                </p>
                <p>
                    <label>Company Name</label><br/>
                    <input type="text" id='company_name' name="company_name" required />
                </p>
                <p>
                    <label for="category">Category</label><br/>
                    <select name="menu" id="menu" required>
                        <option value="1">Manufacturer</option>
                        <option value="2">Airline</option>
                        <option value="3">Recycler</option>
                    </select>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" id='password' requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" id='password' requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
               
            </form>
            <button id="sub_btn" type="submit" onClick={()=>{
                setClick(true)
            }} >Register</button>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
