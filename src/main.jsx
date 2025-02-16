import { render } from 'preact';
import './index.css';
import App  from './app.jsx';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
