import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HomePageEX from "./pages/HomePageEX";
import HomePageAR from "./pages/HomePageAR";
import HomePageAL from "./pages/HomePageAL";
import HomePageSD from "./pages/HomePageSD";
import NavBox from "./pages/navBox";
import ExternalSDPage from "./pages/ExternalSDPage";

import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const Layout = () =>{
  return(
    <>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<LoginPage/>
      },
      { 
        path:"/home",
        element:<div className="homepage-container"><NavBox/><HomePageEX/></div>
      },
      {
        path:"/camerapov",
        element:<HomePageEX/>
      },
      {
        path:"/account",
        element:<div className="homepage-container"><NavBox/><HomePageAR/></div>
      },
      {
        path:"/audit",
        element:<div className="homepage-container"><NavBox/><p>bwesit</p></div>
      },
      {
        path:"/details",
        element:<div className="homepage-container"><NavBox/><HomePageSD/></div>
      },
      {
        path:"/info",
        element:<ExternalSDPage/>
      }
    ]
  }
]);


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <img src="/images/uclogo.png" alt="logo" className="uclogo" />
      <div>
        <RouterProvider router={router}/>
      </div>
    {/*
      
      <div>
        {isLoggedIn ? (
          <HomePage onLogout={() => setIsLoggedIn(false)} /> 
        ) : (
          <LoginPage onLogin={() => setIsLoggedIn(true)} /> 
        )}
      </div>*/}
    </>
  );
}

export default App;
