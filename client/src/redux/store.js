// // import { configureStore } from "@reduxjs/toolkit";
// // import {cartReducer} from "./cartReducer";

// // export const store = configureStore({
// //     reducer: {
// //         cart:cartReducer
// //     },
// // })



// // import cartReducer from "./cartReducer";
// // import { configureStore } from '@reduxjs/toolkit'
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from 'redux-persist'
// // import storage from 'redux-persist/lib/storage'
// // import { PersistGate } from 'redux-persist/integration/react'


// // import cartReducer from "./cartReducer";
// // import { configureStore } from "@reduxjs/toolkit";
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from "redux-persist";
// // import storage from "redux-persist/lib/storage";


// // import { loadStripe } from "@stripe/stripe-js";
// // const stripe = require('stripe')('sk_test_51OHX2USDhC0yEVbtQ9vjc1TYpHJVijgLbmDHzR5lPZx6QVYnYHyQymXnRUpHwXhP2iNMqgr5E7iGCVLa9ho2TEET00niq6c3ta');

// // const persistConfig = {
// //   key: "root",
// //   version: 1,
// //   storage,
// // };

// // const persistedReducer = persistReducer(persistConfig, cartReducer);

// // export const store = configureStore({
// //   reducer: {
// //     cart: persistedReducer,
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });

// // export let persistor = persistStore(store);

// import cartReducer from "./cartReducer";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { loadStripe } from "@stripe/stripe-js";  // Import from stripe-js

// // const stripe = require("stripe")('sk_test_51OHX2USDhC0yEVbtQ9vjc1TYpHJVijgLbmDHzR5lPZx6QVYnYHyQymXnRUpHwXhP2iNMqgr5E7iGCVLa9ho2TEET00niq6c3ta');


// // Replace 'your-publishable-key' with your actual Stripe publishable key
// const stripePromise = loadStripe('sk_test_51OHX2USDhC0yEVbtQ9vjc1TYpHJVijgLbmDHzR5lPZx6QVYnYHyQymXnRUpHwXhP2iNMqgr5E7iGCVLa9ho2TEET00niq6c3ta');

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

// export const store = configureStore({
//   reducer: {
//     cart: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

// export { stripePromise };  // Export stripePromise for use in components


import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
