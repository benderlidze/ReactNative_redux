import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configure-store';
import App from './src/App';

const store = configureStore();
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
AppRegistry.registerComponent('naviTest', () => Root);