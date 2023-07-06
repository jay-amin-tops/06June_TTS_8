import ReactDOM from 'react-dom/client';
import routerdata from './Router.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {  RouterProvider, } from "react-router-dom";
// import BableInReact from './02BabelInReactJs.jsx';
import  './custom.css';
// const Something = () => {
//   return "data"
// };
// function something(params) {
//   return "data"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<><FirstCompo/><BableInReact></BableInReact></>);
// root.render(<><FirstCompo/></>);
root.render(<><RouterProvider router={routerdata} /></>);


