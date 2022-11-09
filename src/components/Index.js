import React from 'react';
import "../CSS/style.css"

function Index() {
    return(
    <div>
        <div className="titleContainer">
            <h1 className="Title">BUENOS DIAS</h1>
        </div>
        <section className="section">
            <div className="DirectionsContainer">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </section>

        
    </div>
    )
}

export default Index