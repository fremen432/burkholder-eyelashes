import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

// Clayton's stripe test public key
const PUBLIC_KEY = "pk_test_51KJm3xBvZnxIu4iHLWRKyjbzWuC5Bpu0P00P6oYXzljPCWuEESvPyhsFEsjjzd7IJUWi9AutgZhgLg6qlRQWjAJm004KzaJZui"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
