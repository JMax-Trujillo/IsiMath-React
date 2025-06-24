import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/global.css'
import './styles/LandingPage.css'
import './styles/Dashboard.css'
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"

// Importar los placeholders de sus nuevas ubicaciones
import DerivativesTool from './components/functions/FunctionToolPlaceholder'
import IntegralsDefTool from './components/functions/FunctionToolPlaceholder'
import IntegralsIndefTool from './components/functions/FunctionToolPlaceholder'
import LimitsTool from './components/functions/FunctionToolPlaceholder'

import BasicCalculatorTool from './components/matrices/MatrixToolPlaceholder'
import DeterminantTool from './components/matrices/MatrixToolPlaceholder'
import InverseTool from './components/matrices/MatrixToolPlaceholder'
import IterativeMethodsTool from './components/matrices/MatrixToolPlaceholder'

function App() {

  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={
              <div style={{padding: '40px', textAlign: 'center', fontSize: '1.2em', color: '#555'}}>
                <h3>Bienvenido al Isimath</h3>
                <p>Selecciona una herramienta del menu lateral para comenzar</p>
              </div>
            }/>

            {/* Rutas anidadas para Funciones */}
            <Route path="funciones">
              <Route path="derivadas" element={<DerivativesTool title="Derivadas"/>}/>
              <Route path="integrales-definidas" element={<IntegralsDefTool title="Integrales Definidas"/>}/>
              <Route path="integrales-indefinidas" element={<IntegralsIndefTool title="Integrales Indefinidas"/>}/>
              <Route path="limites" element={<LimitsTool title="Limites"/>}/>
            </Route>

            {/* Rutas anidadas para Matrices */}
            <Route path="matrices">
              <Route path="calculadora-basica" element={<BasicCalculatorTool title="Calculadora Basica de Matrices"/>}/>
              <Route path="determinante" element={<DeterminantTool title="Determinante de Matrices"/>}/>
              <Route path="inversa" element={<InverseTool title="Inversa de Matrices"/>}/>
              <Route path="metodos-iterativos" element={<IterativeMethodsTool title="Metodos Iterativos de Matrices"/>}/>
            </Route>

            {/* Ruta para /dashboard si ninguna sub-ruta coincide */}
            <Route path="*" element={
              <div style={{ padding: '40px', textAlign: 'center', fontSize:'1.2em', color:'#e74c3c' }}>
                <h3>Herramienta no encontrada</h3>
                <p>Por favor, selecciona una herramienta valida del menu</p>
              </div>
            } />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
