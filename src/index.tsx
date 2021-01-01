// external
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// internal
import App from './App';
import store from './redux/store';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
