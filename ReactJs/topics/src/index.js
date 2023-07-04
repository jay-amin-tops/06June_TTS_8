import ReactDOM from 'react-dom/client';
import FirstCompo from './MyCustomCompo.jsx';
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
root.render(<><FirstCompo/></>);


