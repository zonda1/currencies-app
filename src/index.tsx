import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.scss';
import './fonts/fonts.scss';
import App from './components/App';

// function component(text) {
//     const element = document.createElement('h1');
//     element.textContent = text;
//     return element;
//   }
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
  
// document.body.prepend(component('Проект собран на Webpack123123123'));