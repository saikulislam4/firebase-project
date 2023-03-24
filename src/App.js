import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/About/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import MainLayOut from './Components/MainLayout/MainLayOut';
import Profile from './Components/Profile/Profile';
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
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "*",
        element:<ErrorPage></ErrorPage>
      },
      {
        path: "/login",
        element:<Login></Login>,
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
