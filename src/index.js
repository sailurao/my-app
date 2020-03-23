import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import RegisterForm from './registrationForm/RegisterForm';
import App from './App';

ReactDOM.render(<App /> , document.getElementById('root'));
//ReactDOM.render(<RegisterForm /> , document.getElementById('root'));

registerServiceWorker();
