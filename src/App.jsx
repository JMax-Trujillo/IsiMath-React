import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/global.css'
import './styles/LandingPage.css'
import LandingPage from "./pages/LandingPage"

const DashboardPlaceholder = () => {
  return (
    <div style={{padding: '50px', textAlign: 'center', fontSize: '2em'}}>
      <h2>Dashboard (Proximamente...)</h2>
      <p>Aqui se construira la aplicacion principal</p>
    </div>
  )
}

function App() {

  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<DashboardPlaceholder/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
