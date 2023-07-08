import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Examples = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Examples of Class and Functional Components </h2>
                    </div>

                </div>
                <div className="row ">
                    <div className="col-lg-6">
                            <h3><Link to="classcompo">Class Component</Link></h3>
                    </div>
                    <div className="col-lg-6">
                            <h3><Link to="functionalcompo">Fucntional Component</Link></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Examples;