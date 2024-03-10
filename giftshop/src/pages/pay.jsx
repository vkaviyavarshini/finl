import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../css/pay.css';

const Pay = () => {
    const [amount, setAmount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const productAmount = searchParams.get("amount");

        if (productAmount) {
            setAmount(Number(productAmount));
        }
    }, [location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (amount > 10) {
            const options = {
                key: 'rzp_test_RPevUXMdr1lPzC',
                key_secret: 'CcElkmtotGMmmLCJ5kQ4fR76',
                amount: amount * 100,
                currency: "INR",
                name: 'KAVIYAVARSHINI',
                handler: (res) => {
                    alert(res.razorpay_payment_id)
                },
                prefill: {
                    name: 'KAVIYAVARSHINI',
                    email: 'kaviyavarshini.v@gmail.com',
                    contact: '7010071577'
                },
                notes: {
                    address: " office",
                },
                theme: {
                    color: '#f5f5f7'
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        } else {
            alert("Invalid amount. Please enter an amount greater than 1000");
        }
    }

    return (
        <div className="payment-container">
            <h1 className="payment-header">Payment Page</h1>
            <form onSubmit={handleSubmit}>
                <label className="amount-label">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="amount-input"
                />
                <button type="submit" className="pay-button">
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Pay;