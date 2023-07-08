import Card from "../../assets/credit.png"
import UPI from "../../assets/upi.png"
import Cash from "../../assets/cash.png"
import "./Payment.css"


const payment = () => {
    return (
        <>
            <div className='container'>

                <div className='pay_sec'>
                    <h2>Choose the payment option</h2>
                    <div className='pay_mode'>
                        <div className='mode'>
                            <img src={Card} alt="card" />
                            <h2>Credit/Debit Card</h2>
                            <input type="radio" name="payment" />
                        </div>
                        <div className='mode'>
                            <img src={UPI} alt="upi" />
                            <h2>UPI</h2>
                            <input type="radio" name="payment" />
                        </div>
                        <div className='mode'>
                            <img src={Cash} alt="cash" />
                            <h2>Cash</h2>
                            <input type="radio" name="payment" />
                        </div>
                    </div>

                    <div className='pay_btn'>
                        <button onClick={() => { alert('Payment Successfull') }}>Proceed</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default payment