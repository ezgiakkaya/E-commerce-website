/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//const { onRequest } = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

const cors = require("cors");
const functions = require("firebase-functions");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51NkDy6EzWDZb8GUBhUO86OyryZNipsa31Xgn0oUHZC9j5eGcuArrWcdkFme8OBCNKMNMVbU1vLLsOSM2K2Ix5LJq00pW2KkYmo"
);

//API

//APP CONFIG

const app = express();

//MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

//-API ROUTES
app.get("/", (request, response) =>
  response.status(200).send(`hello ${request.query.name} !`)
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  //This line of code creates a new payment intent by calling the stripe.paymentIntents.create method. The stripe object is an instance of the Stripe Node.js library,
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //OK
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-lISTEN COMMAND

exports.api = functions.https.onRequest(app);

//example endpoint : http://127.0.0.1:5001/challenge-c219b/us-central1/api
