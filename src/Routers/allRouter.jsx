// src/routes/routes.js 
import React from "react";
// import { Home } from "../Pages/Home/Home";
import Commingsoon from "../Pages/commingsoon/commingsoon";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/contactus/contactus";
import AboutUS from "../Pages/AboutUS/AboutUS";


// Protected Routes
const authProtectedRoutes = [
    //Home
    { path: "/home", element: <Home /> },
    { path: "/comingsoon", element: <Commingsoon /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/Aboutus", element: <AboutUS /> },
];

// Export all routes (you can later add public routes here)
export { authProtectedRoutes };
