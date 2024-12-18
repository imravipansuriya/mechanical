// src/routes/routes.js 
import React from "react";
// import { Home } from "../Pages/Home/Home";
import Commingsoon from "../Pages/commingsoon/commingsoon";
import Home from "../Pages/Home/Home";


// Protected Routes
const authProtectedRoutes = [
    //Home
    { path: "/home", element: <Home /> },
    { path: "/comingsoon", element: <Commingsoon /> },
];

// Export all routes (you can later add public routes here)
export { authProtectedRoutes };
