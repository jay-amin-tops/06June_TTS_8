import React, { Component } from 'react';
import ClassComponentMenu from './ClassComponentMenu.jsx';
import { Route, Routes, createHashRouter } from 'react-router-dom';
import IntroOfClassCompo from './01IntroOfClassCompo.jsx';
import StateInClassCompo from './02StateInClassCompo.jsx';

class ClassCompoRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ClassComponentMenu />}>
                    <Route path="classintro" element={<IntroOfClassCompo/>}  />
                    <Route path="stateinclass" element={<StateInClassCompo/>}  />
                    <Route path="b" lazy="b"/>
                    {/* <Route path="a" lazy={() => import("./a")} />
                    <Route path="b" lazy={() => import("./b")} /> */}
                </Route>
            </Routes>
        );
    }
}

export default ClassCompoRouter;

// const ClassCompoRouter = () => {
//     return createHashRouter([
//         {
//             path: "/",
//             element: <><ClassComponentMenu/></>,
//             children: [
//                 {
//                     path: "classintro",
//                     element:<h2>Welcome to class components</h2>
//                 }]
//             // children: [
//             //     {
//             //         path: "classcompo",
//             //         async lazy() {
//             //             let { messagesLoader, Messages } = await import(
//             //                 "./pages/Dashboard"
//             //             );
//             //             return {
//             //                 loader: messagesLoader,
//             //                 Component: Messages,
//             //             };
//             //         },
//             //     }]
//         }
//     ]);
// };

// export default ClassCompoRouter;