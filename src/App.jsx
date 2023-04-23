
/* Import Routing */
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

/* Import components */
import Login from './components/authenticate/Login';
import Register from './components/authenticate/Register';
import LostPassword from './components/authenticate/LostPassword';

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/lost-password",
      element: <LostPassword />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
