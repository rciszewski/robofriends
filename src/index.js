import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode> 
    <Provider store={store}>
      <App store={store}/>
    </Provider>
    
  </StrictMode>
);

