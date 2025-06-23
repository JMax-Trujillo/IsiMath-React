import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h3 className="sidebar-title">
                    Herramientas
                </h3>
                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        <li className="nav-list">
                            <button className="nav-button">
                                Funciones
                            </button>
                        </li>
                        <li className="nav-list">
                            <button className='nav-button'>
                                Matrices
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* agregar un boton de modo claro y oscuro */}
            </aside>
            <main className="main-content">
                <h2>Bienvenido al IsiMath</h2>
                <p>Selecciona una herramienta del menu lateral para comenzar</p>
                {/* agregar los componentes de las herramientas, de forma dinamica */}
            </main>
        </div>
    )
}

export default Dashboard;