import {createBrowserRouter} from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "../Pages/Shared/PrivateRoute";
import ServiceCard from "../Pages/Home/ServiceCard";
import AllService from "../Pages/AllService/AllService";
import ServiceDetails from "../Pages/AllService/ServiceDetails";
import Details from "../Pages/Home/Details";
import MyService from "../Pages/myReviews/MyService";
import NotFound from "../Pages/Shared/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
   Component:Rootlayout,
    errorElement: <NotFound />,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path:'/register',
      Component:Register
    },
    {
        path:'/login',
        Component:Signin
    },
    {
      path:'addservice',
     element:<PrivateRoute>
      <AddService></AddService>
      </PrivateRoute>
    },
    {
      path:'serviceCard',
      Component:ServiceCard
    },
    {
      path:'allservice',
      Component:AllService
    },
    {
      path:'/servicedetails/:id',
      Component:ServiceDetails
    },
    {
      path:'/details/:id',
      Component:Details
    },
    {
      path:'myservice',
      element:<PrivateRoute>
        <MyService></MyService>
      </PrivateRoute>
    }
   ]
  },
]);
export default router