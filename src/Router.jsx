import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "./Pages/Home";
import IncomeExpense from "./Pages/IncomeExpense";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/tracking",
      element: <IncomeExpense></IncomeExpense>,
    },
    {
      path: "/logIn",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);

export default Router;