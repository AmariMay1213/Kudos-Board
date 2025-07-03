import { useState } from "react";
import axios from "axios";


function LoginPage(){
    // header log in here
    // welcome page that  says welcom, if you have an account press log in, if your do not have an account, press register

    // login should have a username and password text files and a submit button should send it
    // register should have a email, username, and password. submit button should send it

    const [showForm, setShowForm] = useState(false); // controls if any form is shown
    const [showLogin, setShowLogin] = useState(false); // controls which form is showsn (true is login, false is regiser)
    const [loginData, setLoginData] = useState({ username: "", password: "" }); // holds input values from login form
    const [registerData, setRegisterData] = useState({ email: "", username: "", password: "" }); // input values fro the restire form
 
    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value }); // 
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        // TODO: get the actual link for trying to log in from amari and do the tokenization stuff to prompt the user on 
        // a successful log in to have access to the homepage
        // utilize use Navigate
        try {
            const response = await axios.post ("https://localhost:3000", loginData)


            alert("Your log in was successful, welcome to KudosBoard.")
            console.log("login success: ", response.data);
        } catch (error) {
            alert("Your log in attempt was unsuccessfl! Please try logging in again or register a new account.");
            console.error("Login failed:", error);
        }

        alert("Your log in was successful, welcome to KudosBoard.")
        console.log("Login submitted:", loginData);
    };

    const handleRegisterSubmit = async(e) => {
        e.preventDefault();
        // TODO: get the actual link for trying to register from amari
        try {
            const response = await axios.post ("https://localhost:3000", registerData)
            console.log("login success: ", response.data);

            alert("Registered successfully! Please log in.");
            window.location.href = "/login";
        } catch (error) {
            console.error("Register failed:", error);
        }

        console.log("Register submitted:", registerData);
    };

    return (
        <>
            <div className="login-page">
                <h1>Welcome!</h1>
                <p> If you have an account, press log in. If not, press register. </p>
                <div>
                    <button onClick={() => { 
                        setShowLogin(true); 
                        setShowForm(true); 
                    }}
                    > Log In </button>
                    <button onClick={() => { 
                        setShowLogin(false); 
                        setShowForm(true); 
                    }}
                    > Register </button>
                </div>

                {showForm && ( showLogin ? (
                    <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            name="username"
                            type="text"
                            value={loginData.username}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            name="password"
                            type="text"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <button type="submit"> Submit Log In</button>
                    </form>
                        ) : (
                    <form onSubmit={handleRegisterSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                name="email"
                                type="email"
                                value={registerData.email}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Username:</label>
                            <input
                                name="username"
                                type="text"
                                value={registerData.username}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                            name="password"
                            type="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                ))}
            </div>

        </>
    )
}

export default LoginPage;