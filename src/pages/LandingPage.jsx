import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/global.css'
import '../styles/LandingPage.css'


function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1 className="landing-title">Bienvenido a IsiMath</h1>
                <p className="landing-description">
                    Tu laboratorio personal para explorar el mundo de las matemáticas.
                    Calcula derivadas, integrales, límites, y opera con matrices de forma interactiva.
                </p>
                <Link to="/dashboard" className="landing-button">
                    Comenzar
                </Link>
            </header>
        </div>
    )
}

export default LandingPage;