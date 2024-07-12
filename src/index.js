/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import Home from "./pages/Home"
import About from "./pages/About"
import Fiche from "./pages/Fiche"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path:"error",
    element: <Error></Error>,
  },
  {
    path:"fiche",
    element: <Fiche></Fiche>,
  },
]);

createRoot(document.getElementById("root")).render( <>
  <Header></Header>
  <RouterProvider router={router} />
  <Footer></Footer>
  </>);

