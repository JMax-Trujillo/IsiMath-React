import React from 'react';

function FunctionToolPlaceholder({title}) {
    return (
        <div style={{padding: '20px', backgroundColor: '#e9f0f7', borderRadius: '8px', border: '1px solid #d0e0ed'}}>
            <h3>Herramienta de Funcion: {title}</h3>
            <p>Aquí se mostrará la logica de {title} (input, grafica, resolver, ...).</p>
            <p>Preparando el terreno!</p>
        </div>
    )
}

export default FunctionToolPlaceholder;