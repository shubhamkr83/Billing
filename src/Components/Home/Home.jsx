import heroImg from "../../assets/herobg1.png";
import { NavLink } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home_container">
                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome to </p>
                        <h1> Billing </h1>
                        <p>
                            Let's Speed Up your Shopping
                        </p>
                        <NavLink to="/invoice">
                            <button>Create Invoice</button>
                        </NavLink>
                    </div>
                    {/* our homepage image  */}
                    <div className="hero-section-image">
                        <figure>
                            <img
                                src={heroImg}
                                alt="hero-section-photo"
                                className="img-style"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home