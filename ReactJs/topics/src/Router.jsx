import { createBrowserRouter } from "react-router-dom";
import FirstCompo from './MyCustomCompo.jsx';
import Aboutus from './Aboutus.jsx';
import Contactus from './Contactus.jsx';
import Examples from './Examples.jsx';
import MainHeader from './CommanCompo/header.jsx';
import React,{ Suspense } from "react";


// const ClassCompoRoute= React.lazy(()=>{ return import('./component/ClassCompo/ClassCompoRouter.jsx')})
const ClassCompoRoute= React.lazy(()=> import('./component/ClassCompo/ClassCompoRouter.jsx'))
const router = createBrowserRouter([
    {
        path: "/",
        element: <><MainHeader /><FirstCompo /></>,
    }, {
        path: "/aboutus",
        element: <><MainHeader /> <Aboutus /></>,
    }, {
        path: "/contact",
        element: <><MainHeader /> <Contactus /></>,
    }, {
        path: "/examples",
        element: <><MainHeader /> <Examples /></>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback="Loading..."><ClassCompoRoute/></Suspense>,
                
            }]
        // children: [
        //     {
        //         path: "classcompo",
        //         async lazy() {
        //             let { messagesLoader, Messages } = await import(
        //                 "./pages/Dashboard"
        //             );
        //             return {
        //                 loader: messagesLoader,
        //                 Component: Messages,
        //             };
        //         },
        //     }]
    }
]);

export default router