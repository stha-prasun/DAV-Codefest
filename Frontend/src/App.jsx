import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Membership from "./components/Membership";
import Profile from "./components/Profile";
import Course from "./components/Course";
import Signup from "./components/Signup";
import AdminMessage from "./components/admin/AdminMessage";
import AdminPanel from "./components/admin/AdminPanel";
import ContactMentor from "./components/ContactMentor";
import UserPanel from "./components/UserPanel";
import Dsa from "./components/DSA";
import Demo from "./components/Demo";
import About from "./components/About"; 
import AddCourseForm from "./components/admin/AddCourseForm";
import Courses from "./components/Courses";

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
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/membership/buy",
      element: <Membership />,
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
    {
      path: "/course/:id",
      element: <Course />,
    },
    {
      path: "/contact/mentor",
      element: <ContactMentor />,
    },
    {
      path: "/user/home",
      element: <UserPanel />,
    },
    {
      path: "/user/dsa",
      element: <Dsa />,
    },
    {
      path: "/demo",
      element: <Demo />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/demo",
      element: <Demo />,
    },
    {
      path: "/user/courses",
      element: <Courses />,
    },
    // Admin Part
    {
      path: "/admin/home",
      element: <AdminPanel />,
    },
    {
      path: "/admin/messages",
      element: <AdminMessage />,
    },
    {
      path: "/admin/course/add",
      element: <AddCourseForm />,
    },

  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
