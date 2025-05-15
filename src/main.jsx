// ****************************************************************************
// ** THE FOLLOWING COMMENTS ARE GUIDANCE AND CANNOT BE CONSIDERED           **
// ** AS THE ABSOLUTE WAY TO IMPLEMENT THE FUNCTIONALITIES.                  **
// ** Refer to MERN stack tutorial for examples of implementation.           **
// ** Link: https://www.mongodb.com/resources/languages/mern-stack-tutorial  **
// ****************************************************************************

// Import custom styles
import "./index.css";

// Import libraries and dependencies
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; 
import App from "./App"; // App is the main application layout component


// Import custom components 
    // (Login, Register, Home, Bloggs, Network, Admin)

// Router configuration
const router = createBrowserRouter([
  {
    // Route outside the App layout (outside <Outlet />)
    path: "/",
    children: [
      // Login route(url)
      // Register route(url)
    ],
  },
  {
    // Routes inside the App layout (inside <Outlet />)
    path: "/",
    element: <App />,
    children: [
      // Home route(url)
      // Bloggs route(url)
      // Network route(url)
      // Admin route(url)
    ],
  },
  // Catch-all route: Redirects any undefined paths to the root ("/")
  { path: "*", element: <Navigate to="/" /> }, 
]);

// Render of the application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

