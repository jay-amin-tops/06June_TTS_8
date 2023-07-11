import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassComponentMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><Link to="classintro">Introdcution of ClassComoenent</Link></li>
                    <li><Link to="stateinclass">State in Class Compo</Link></li>
                </ol>
                
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassComponentMenu;