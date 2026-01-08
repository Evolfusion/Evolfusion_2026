//?Archivo principal de la aplicación
//Se colocan las importaciones de las librerias necesarias para la aplicación y se renderiza el componente principal de la aplicación

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //Estilos globales
import App from './App.jsx' 

//Lee el archivo App.jsx y lo renderiza en el elemento con id root (index.html)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

