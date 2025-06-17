import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/router'
import Authprovider from './Contexts/AuthContext/Authprovider'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authprovider>
     <RouterProvider router={router}>
    </RouterProvider>
    <ToastContainer />
   </Authprovider>
  
  </StrictMode>,
)
