import React from 'react';
import MyBableExample from './02BabelInReactJs';
// import NavbarCompo from './CommanCompo/header';

const MyCustomCompo = () => {
    return <>
    {/* <NavbarCompo/> */}
    <div className="container">

    <h2>Component</h2>
    <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.</p>
    addition of 5+5 = {5+5}
     <h2>TOPS</h2> <h3>SG</h3>
    <MyBableExample/>
    </div>
     </>
};

export default MyCustomCompo;