import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
 
class IntroComponent extends React.Component {
    render() {
        return (    
            <h1>please work</h1>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store; 
    ReactDOM.render(<IntroComponent />, document.getElementById('content'));
});