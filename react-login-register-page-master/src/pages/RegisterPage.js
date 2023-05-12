import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us today!</h2>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Role</label><br/>
                    <input type="text" name="role" required />
                </p>
                <p>
                    <label>Company Name</label><br/>
                    <input type="text" name="company_name" required />
                </p>
                <p>
                    <label for="category">Category</label><br/>
                    <select name="menu" id="menu" required>
                        <option value="manufacturer">Manufacturer</option>
                        <option value="airline">Airline</option>
                        <option value="recycler">Recycler</option>
                    </select>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
