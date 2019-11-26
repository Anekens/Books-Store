import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import App from './components/AppContainer';
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
