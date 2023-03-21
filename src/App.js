import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/About/Home/Home';
import Loging from './Components/Loging/Loging';
import MainLayOut from './Components/MainLayout/MainLayOut';
import Registration from './Components/Registration/Registration';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element:<Loging></Loging>,
      },
      {
        path: "/registration",
        element:<Registration></Registration>,
      },
    ],
  }
])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
