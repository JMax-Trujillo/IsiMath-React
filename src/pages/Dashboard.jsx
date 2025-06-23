import React, {useState} from 'react';
import '../styles/Dashboard.css';

function Dashboard() {

    const [openMenu, setOpenMenu] = useState('none');

    const toggleMenu = (menuName) => {
        setOpenMenu(prevOpenMenu => prevOpenMenu === menuName ? 'none' : menuName)
    }

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h3 className="sidebar-title">
                    Herramientas
                </h3>
                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        <li className="nav-list">
                            <button 
                                className= {`nav-button ${openMenu === 'funciones' ? 'active' : ''}`}
                                onClick={() => toggleMenu('funciones')}
                            >
                                Funciones
                            </button>
                            {/* Sub menu de Funciones, se muestra condicionalmente */}
                            {openMenu === 'funciones' && (
                                <ul className="sub-nav-list">
                                    <li className="sub-nav-item">
                                      <button className="sub-nav-button">Derivadas</button>
                                    </li>
                                    <li className="sub-nav-item">
                                      <button className="sub-nav-button">Integrales Definidas</button>
                                    </li>
                                    <li className="sub-nav-item">
                                      <button className="sub-nav-button">Integrales Indefinidas</button>
                                    </li>
                                    <li className="sub-nav-item">
                                      <button className="sub-nav-button">Límites</button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-list">
                            <button 
                                className={`nav-button ${openMenu === 'matrices' ? 'active' : ''}`}
                                onClick={()=> toggleMenu('matrices')}
                            >
                                Matrices
                            </button>
                            {/* Sub-menu de Matrices, se muestra condicionalmente */}
                            {openMenu === 'matrices' && (
                                <ul className="sub-nav-list">
                                    <li className="sub-nav-item">
                                        <button className="sub-nav-button">Calculadora Básica</button>
                                    </li>
                                    <li className="sub-nav-item">
                                        <button className="sub-nav-button">Determinante</button>
                                    </li>
                                    <li className="sub-nav-item">
                                        <button className="sub-nav-button">Inversa</button>
                                    </li>
                                    <li className="sub-nav-item">
                                        <button className="sub-nav-button">Métodos Iterativos</button>
                                    </li>
                                </ul>
                            )}
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