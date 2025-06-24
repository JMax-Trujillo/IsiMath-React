import React from 'react';

function MatrixToolPlaceholder({title}){
    return (
        <div style={{padding: '20px', backgroundColor: '#f7e9f0', borderRadius: '8px', border: '1px solid #edd0e0'}}>
            <h3>Herramienta de Matriz {title}</h3>
            <p>Aquí se mostrará las operaciones de {title} (añadir, modificar, calcular, ...).</p>
            <p>Pronto habra mucha accion aquí!</p>
        </div>
    )
}

export default MatrixToolPlaceholder;