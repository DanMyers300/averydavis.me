// functions.js
import fetch from 'node-fetch';

export async function createCheckoutSession() {
    const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST'
    });

    const session = await response.json();
    return session;
}
