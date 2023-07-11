import { createBrowserRouter, createHashRouter } from "react-router-dom";
import FirstCompo from './MyCustomCompo.jsx';
import Aboutus from './Aboutus.jsx';
import Contactus from './Contactus.jsx';
import Examples from './Examples.jsx';
import MainHeader from './CommanCompo/header.jsx';
import React,{ Suspense } from "react";
import LoaderCompo from './CommanCompo/LoaderCompo.jsx';


// const ClassCompoRoute= React.lazy(()=>{ return import('./component/ClassCompo/ClassCompoRouter.jsx')})
// const ClassCompoRoute= React.lazy(()=> {
//     return import('./component/ClassCompo/ClassCompoRouter.jsx')
// })
const ClassCompoRoute= React.lazy(()=> {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./component/ClassCompo/ClassCompoRouter.jsx")), 1000);
      });
})
const router = createHashRouter([
    {
        path: "/",
        element: <><MainHeader /><FirstCompo /></>,
    }, {
        path: "/aboutus",
        element: <><MainHeader /> <Aboutus /></>,
    }, {
        path: "/contact",
        element: <><MainHeader /> <Contactus /></>,
        // async lazy() {
        //     console.log("called inside ");
        //     let { Layout } = await import("./Contactus.jsx");
        //     return { Component: Layout };
        //   }
    }, {
        path: "/examples",
        element: <><MainHeader /> <Examples /></>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback={<LoaderCompo/>}><ClassCompoRoute/></Suspense>,
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