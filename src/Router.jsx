import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "./Pages/Home";
import IncomeExpense from "./Pages/IncomeExpense";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DashboardLayout from "./Dashboard/DashboardLayout";
import UserProfile from "./Dashboard/UserProfile";
import ExpenseStat from "./Dashboard/ExpenseStat";
import UpdateExpense from "./Dashboard/UpdateExpense";
import UpdateIncome from "./Dashboard/UpdateIncome";

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
    {
      path:"/dashboard",
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          index:"true",
          element:<UserProfile></UserProfile>
        }
        ,
        {
          path:"/dashboard/expenseStat",
          element:<ExpenseStat></ExpenseStat>
        }
        ,
        {
          path:"/dashboard/updateExpense/:id",
          element:<UpdateExpense></UpdateExpense>,
          loader: ({ params }) => fetch(`http://localhost:5000/getSingleExpenseId/${params.id}`)
        }
        ,
        {
          path:"/dashboard/updateIncome/:id",
          element:<UpdateIncome></UpdateIncome>,
          loader: ({ params }) => fetch(`http://localhost:5000/getSingleIncomeId/${params.id}`)
        }
      ]
    }
  ]);

export default Router;