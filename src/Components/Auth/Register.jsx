import "./Login.css";
import { NavLink } from "react-router-dom";


const Register = () => {
    return (
        <>
            <div className='container'>
                <div className="login">
                    <h2>Register</h2>
                    <form className="login-form">
                        <input type="text" id="username" name="username" placeholder="Username" required />
                        <input type="email" id="email" name="email" placeholder="Email Address" required />
                        <input type="password" id="password" name="password" placeholder="password" required />
                        <input type="password" id="cpassword" name="password" placeholder="conform password" required />
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                    <div className="create-account">
                        <div>Already a member? <NavLink to="/login">Login</NavLink></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register