import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AdminPanel from "./components/admin/adminPanel";
import Membership from "./components/Membership";
import Profile from "./components/Profile";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/membership/buy",
      element: <Membership />,
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
    // Admin Part
    {
      path: "/admin/home",
      element: <AdminPanel />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
