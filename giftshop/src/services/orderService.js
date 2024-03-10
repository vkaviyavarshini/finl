import { API_URL } from "../config/config";

const PlaceOrder = (orderData) => {
    const apiUrl = `${API_URL}/api/order`;
    console.log('API URL:', apiUrl);

    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to place order');
        }
        return response.json();
    })
    .then(data => {
        console.log('Order placed successfully:', data);
        // Add any additional logic after successful order placement
        return data; // if you want to pass the data back to the caller
    })
    .catch(error => {
        console.error('Error placing order:', error);
        // Handle error as needed (e.g., show an error message to the user)
        throw error; // rethrow the error to propagate it to the caller
    });
}

export default PlaceOrder;
