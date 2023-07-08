import { NavLink } from "react-router-dom";
import "./Invoice.css"

const Invoice = () => {
    return (
        <>
            <div className='container'>
                <section>
                    <h2>Invoice</h2>
                    <div className='billing_info'>
                        <div className='billing_to'>
                            <div>
                                <h3>Billing To:-</h3>
                                <input type="text" placeholder="Shubham Kumar" />
                            </div>
                            <div>
                                <h3>Address:-</h3>
                                <input type="text" placeholder="Lakshmi Chowk, Delhi" />
                            </div>
                        </div>
                        <div className='billing_date'>
                            <h3>Billing Date:-</h3>
                            <input type="date" />
                        </div>
                    </div>
                    <div className='invoice_table'>
                        <table>
                            <thead>
                                <th className='discription'>Discription</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Add</th>
                            </thead>
                            <tbody>
                                <td><input type="text" placeholder="Pepe Jeans - Tapered fit Mid rise - blue" /></td>
                                <td><input type="number" placeholder="₹1,500" /></td>
                                <td><input type="number" placeholder="2" /></td>
                                <td><h4>₹3,000</h4></td>
                                <td className='add_icon'><button>+</button></td>
                            </tbody>
                            <tbody>
                                <td><input type="text" placeholder="Spohub Men solid round neck ployester black T-Shirt" /></td>
                                <td><input type="number" placeholder="₹800" /></td>
                                <td><input type="number" placeholder="1" /></td>
                                <td><h4>₹800</h4></td>
                            </tbody>
                            <tbody>
                                <td><input type="text" placeholder="Riya Gold Men Regular Military Camouflage Casual Shirt" /></td>
                                <td><input type="number" placeholder="₹1,000" /></td>
                                <td><input type="number" placeholder="2" /></td>
                                <td><h4>₹2,000</h4></td>
                            </tbody>
                            <tbody>
                                <td><input type="text" placeholder="Whildcraft Trail Shoes Outer for Men Black-Golden" /></td>
                                <td><input type="number" placeholder="₹2,900" /></td>
                                <td><input type="number" placeholder="1" /></td>
                                <td><h4>₹2,900</h4></td>
                            </tbody>


                        </table>
                    </div>
                    <div className='total_and_coupon'>
                        <div className='coupon'>
                            <h3>Discount:-</h3>
                            <input type="text" placeholder="40%" />
                            <h3>Coupon:-</h3>
                            <input type="text" placeholder="HOLYDAY40" />
                        </div>
                        <div className='total'>
                            <h4>Sub Total: ₹8,700</h4>
                            <h4>Tax: 18%</h4>
                            <h4>Total: ₹4,480</h4>
                        </div>
                    </div>
                    <NavLink to="/payment">
                        <button>Pay Now</button>
                    </NavLink>
                    <div className='terms'>
                        <h3>Terms and Condition:-</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam accusamus saepe ullam totam quis cumque necessitatibus ipsam voluptatum rem molestiae facilis laudantium.</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Invoice