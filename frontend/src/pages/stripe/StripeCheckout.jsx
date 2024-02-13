import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51OcFDwJu6dUjGvIMUDzT3gx3hPUDCU6tLtbbmSInqIRbl3igCaf8Z3q77U5Kayk2laVzZxiRJOr2VQ283X960xGl00XtmfjjUK");

export default function StripeCheckout({handlePaymentConfirmed}) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // replace this with your own server endpoint
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{}] }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}