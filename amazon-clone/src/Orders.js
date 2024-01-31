import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { query, orderBy, limit } from "firebase/firestore";
import { onSnapshot, collection } from "firebase/firestore";
import {
  CardElement,
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { doc, setDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        <h1>Thank you for your purchase</h1>
      </div>
    </div>
  );
}

export default Orders;
