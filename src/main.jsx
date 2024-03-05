import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { ForgotPassword } from './screens/ForgotPassword.jsx';
import { Home } from '@mui/icons-material';
import { SignIn } from './screens/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/esqueci',
    element: <ForgotPassword />,
  },
  {
    path: '/cadastro',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
