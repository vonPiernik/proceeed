import 'babel-polyfill';
import { render } from 'react-dom';
import { App } from './App';
import './sass/style.scss';
import { Provider } from "react-redux";
import { store } from "./_store/index";
import { BrowserRouter } from "react-router-dom";

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);