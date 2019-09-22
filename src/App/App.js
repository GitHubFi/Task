import React, { Component } from 'react';

import { Provider } from 'react-redux';
import Routes from '../Routes'
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Routes />

                </div>
            </Provider>
        );
    }
}

export default App;
