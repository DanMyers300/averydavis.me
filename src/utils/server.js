// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OJKNZHH2GZ42ws89Z2v6eYkeQj7q2UjSoUSteR2RfFx3DDovt1f1ZTc9R2h8cgxMbX1cIIDzTEQfr5FDk6ewzEW0096NSAsKA');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/cancel`
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
