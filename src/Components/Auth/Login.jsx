import "./Login.css"
import { NavLink } from "react-router-dom";


const Login = () => {
    return (
        <>
            <div className='container'>
                <div className="login">
                    <h2>Login</h2>
                    <form className="login-form">
                        <input type="text" id="username" name="username" placeholder="Username" required />
                        <input type="email" id="email" name="email" placeholder="Email Address" required />
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                    <div className="create-account">
                        <div>Not a member? <NavLink to="/register">Create Account</NavLink></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login