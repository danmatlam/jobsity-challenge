import React from 'react';
import logo from './logo.svg';
import './App.css';

// REDUX -> SAGAS || MIDDLEWARE
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from './dao-reducers/reducers';
import {watcherSaga} from './dao-actions/sagas';
import RemindersPage from './pages/RemindersPage';
const sagaMiddleWare = createSagaMiddleware(); 
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers,
compose(applyMiddleware(sagaMiddleWare), reduxDevTools)
);
sagaMiddleWare.run(watcherSaga);
// END REDUX -> SAGAS || MIDDLEWARE



function App() {
  return (
    <div className="App">

      <ReduxProvider store={store}> 

        <header className="App-header"> </header>

        <RemindersPage/>

      </ReduxProvider>
    </div>
  );
}

export default App;
