import React from 'react';
import ReactDOM from 'react-dom';
 
class IntroComponent extends React.Component {
    render() {
        return (    
            <h1>please work</h1>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<IntroComponent />, document.getElementById('content'));
});