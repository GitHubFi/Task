import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
// import rootReducer from './store/reducers/root';
// import { createStore, applyMiddleware } from 'redux';
// import { rootEpic } from './store/epics';
// import { createEpicMiddleware } from 'redux-observable';
// import { Provider } from 'react-redux';
// import NewReact from './NewReact';
// const epicMiddleware = createEpicMiddleware();

// const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

// epicMiddleware.run(rootEpic);
ReactDOM.render(
    // <Provider store={store}>
    // <NewReact/>
    // </Provider>
    <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
