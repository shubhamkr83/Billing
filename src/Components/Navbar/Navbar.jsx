import { NavLink } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <h1>Billing</h1>
                </div>

                <ul className="nav_links">
                    <li>
                        <NavLink
                            className="nav_link"
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav_link"
                            to="/invoice">
                            Invoice
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav_link"
                            to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>

            </nav>

        </>
    )

}

export default Navbar