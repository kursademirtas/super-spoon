import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './style/index.css'
import store from './store';
import * as serviceWorker from './serviceWorker';

const render = () => ReactDOM.render(<App />,document.getElementById("root"));
render();
store.subscribe(render);
serviceWorker.unregister();