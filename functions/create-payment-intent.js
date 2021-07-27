require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      console.log(shipping_fee + total_amount);
      return shipping_fee + total_amount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "INR",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (e) {
      return { statusCode: 500, body: JSON.stringify({ msg: e.message }) };
    }
  } else {
    return {
      statusCode: 200,
      body: "Create Payment Intent",
    };
  }
};
