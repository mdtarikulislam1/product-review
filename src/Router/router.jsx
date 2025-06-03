import {createBrowserRouter} from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";

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
        path:'/signin',
        Component:Signin
    }
   ]
  },
]);
export default router