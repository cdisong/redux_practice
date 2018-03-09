import React from 'react'; 
import { Provider } from 'react-redux'; 
import App from './app.jsx'; 
import configureStore from '../store/store.js'; 
// import { createStore } from 'redux';
// import rootReducer from '../reducers/root_reducer.js'; 

// const store = configureStore();
// configureStore();
const Root = ({ store }) => (
    <Provider store={ store }> 
        <App /> 
    </Provider>
);


export default Root; 