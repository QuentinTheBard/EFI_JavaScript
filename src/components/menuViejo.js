import React from 'react';
import "../CSS/style.css"


function Menu() {
    


    return(
    <div>
        <div className="titleContainer"> {/*Esto se reemplazara dependiendo de la pagina*/}
            <h1 className="Title">BUENOS DIAS</h1>
        </div>
        <section className="section">
            <div className="DirectionsContainer">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Faq</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </section>

        
    </div>
    )
}

export default Menu;