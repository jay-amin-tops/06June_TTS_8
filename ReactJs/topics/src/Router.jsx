import { createBrowserRouter } from "react-router-dom";
import FirstCompo from './MyCustomCompo.jsx';
import Aboutus from './Aboutus.jsx';
import Contactus from './Contactus.jsx';
import Examples from './Examples.jsx';
import MainHeader from './CommanCompo/header.jsx';
const router = createBrowserRouter([
    {
      path: "/",
      element: <><MainHeader/><FirstCompo/></>,
    },{
        path: "/aboutus",
        element:<><MainHeader/> <Aboutus/></>,
    },{
        path: "/contact",
        element:<><MainHeader/> <Contactus/></>,
    },{
        path: "/examples",
        element:<><MainHeader/> <Examples/></>,
    }
  ]);
  
  export default router