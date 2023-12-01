import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe("pk_test_51F3Np0D9QG4YLeVKJCMGn0SjhWgLP2NeLz1zLydNlRRKez5L38lsyWZLaEDsOmklJCJ6TrLsOO9IweH6sTsiqtZG00XufRxPlT");

function App() {
  return (
    <div className="app">
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
}

export default App;
