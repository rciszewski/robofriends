import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots } from './reducers';

const logger = createLogger();
const store = 
  createStore(searchRobots, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode> 
    <Provider store={store}>
      <App store={store}/>
    </Provider>
    
  </StrictMode>
);

