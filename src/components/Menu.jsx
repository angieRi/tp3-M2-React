import React from "react";
import {Link} from "react-router-dom"

function Menu(props){
    return(
        <div className="menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
            </ul>
        </div>
    )
}
export default Menu