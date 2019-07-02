import 'babel-polyfill';
import { render } from 'react-dom';
import { App } from './App';
import './sass/style.scss';
import { Provider } from "react-redux";
import { store } from "./_store/index";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);