// ****************************************************************************
// ** THE FOLLOWING COMMENTS ARE GUIDANCE AND CANNOT BE CONSIDERED           **
// ** AS THE ABSOLUTE WAY TO IMPLEMENT THE FUNCTIONALITIES.                  **
// ** Refer to MERN stack tutorial for examples of implementation.           **
// ** Link: https://www.mongodb.com/resources/languages/mern-stack-tutorial  **
// ****************************************************************************

// Importing necessary libraries and dependencies
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; 
import App from "./App"; // Main application layout component
// Importing custom styles
import "./index.css";
// Importing custom components

// Defining the router configuration
const router = createBrowserRouter([
  {
    // Route outside the App layout (<Outlet />)
    path: "/",
    children: [
      // Login route
      // Register route
    ],
  },
  {
    // Routes inside the App layout (<Outlet />)
    path: "/",
    element: <App />,
    children: [
      // Home route
      // Bloggs route
      // Network route
      // Admin route
    ],
  },
  // Catch-all route: Redirects any undefined paths to the root ("/")
  { path: "*", element: <Navigate to="/" /> }, 
]);

// Rendering the application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

