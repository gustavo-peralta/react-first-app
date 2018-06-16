// Biblioteca react para creación de la interface web
import React from 'react';
// Biblioteca es react enfocado al navegador, porque es una app WEB
import ReactDOM from 'react-dom';

// Gracias a WEB Pack podemos importar css dentro de un JS
import './index.css';

// Este archivo tan solo se encarga de cargar la aplicación
import App from './App';

// Este archivo es para simular datos de manera local, para tener datos aunque no tengas internet
// Los archivo se quedan de manera temporal en la memoria local
import registerServiceWorker from './registerServiceWorker';

// Metodo render, este ayuda a renderizas la app en pantalla
// Y donde la vamos a renderizar, en un elemento 'root'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
