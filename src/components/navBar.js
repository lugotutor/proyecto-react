import React,{useState} from "react"
import'../components/navBar.css'
import CartWidget from '../components/cardWidget'


function NavBar(){
const [contar]=useState(1)


    return(

    <nav className="nav">
        
        <h1 className="titulo">Ferreteria Cinike</h1>
        <ul className="nav_menu">
            <li className="nav_items">Inicio</li>
            <li className="nav_items">Quienes somos</li>
            <li className="nav_items">Nuestros productos</li>
            <li className="nav_items_contador"> <CartWidget/>{contar}</li>
            
        </ul>
    </nav>
);
}
export default NavBar;