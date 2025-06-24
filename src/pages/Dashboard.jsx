import React, {useState} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {

    const [openMenu, setOpenMenu] = useState('none');



    const toggleMenu = (menuName) => {
        setOpenMenu(prevOpenMenu => prevOpenMenu === menuName ? 'none' : menuName)
    }

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h3 className="sidebar-title">Herramientas</h3>
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
                                        <NavLink to={"/dashboard/funciones/derivadas"} className="sub-nav-button">Derivadas</NavLink>
                                    </li>
                                    <li className="sub-nav-item" >
                                        <NavLink to={"/dashboard/funciones/integrales-definidas"} className="sub-nav-button">Integrales Definidas</NavLink>
                                    </li>
                                    <li className="sub-nav-item" >
                                        <NavLink to={"/dashboard/funciones/integrales-indefinidas"} className="sub-nav-button">Integrales Indefinidas</NavLink>
                                    </li>
                                    <li className="sub-nav-item">
                                        <NavLink to={"/dashboard/funciones/limites"} className="sub-nav-button">Limites</NavLink>
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
                                        <NavLink to={"/dashboard/matrices/calculadora-basica"} className="sub-nav-button">Calculadora Basica</NavLink>
                                    </li>
                                    <li className="sub-nav-item">
                                        <NavLink to={"/dashboard/matrices/determinante"} className="sub-nav-button">Determinante</NavLink>
                                    </li>
                                    <li className="sub-nav-item">
                                        <NavLink to={"/dashboard/matrices/inversa"} className="sub-nav-button">Inversa</NavLink>
                                    </li>
                                    <li className="sub-nav-item">
                                        <NavLink to={"/dashboard/matrices/metodos-iterativos"} className="sub-nav-button">Metodos Iterativos</NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
                {/* agregar un boton de modo claro y oscuro */}
            </aside>
            <main className="main-content">
                <Outlet/>
            </main>
        </div>
    )
}

export default Dashboard;