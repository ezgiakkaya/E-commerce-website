import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51NkDy6EzWDZb8GUB6sLA7XSZJMdtXSJXVj6OiIUMohy9BWN6sfUJAD7dneV8Bs0OY8lI5mOINf2sHdhKZBAkKqnO00BM88h1PS"
);

export default function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //const authInstance = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("user:", user);
      if (user) {
        //The user just logged in.shoot the user into the data layer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <nav>
                  <Header />
                </nav>
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <nav>
                  <Header />
                </nav>
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <nav>
                  <Header />
                </nav>

                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/order" element={<About />} />
          <Route
            path="/orders"
            element={
              <>
                <nav>
                  <Header />
                </nav>

                <Orders></Orders>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
