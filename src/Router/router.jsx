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

const router = createBrowserRouter([
  {
    path: "/",
   Component:Rootlayout,
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
     element: 
      <AddService></AddService>
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
    }
   ]
  },
]);
export default router