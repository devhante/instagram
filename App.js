import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import AppContainer from './src/Navigator';
import RootStore from './src/stores/rootStore';

export default class App extends Component {
    rootStore = new RootStore();
    render() {
        return (
            <Provider rootStore={this.rootStore}>
                <AppContainer />
            </Provider>
        );
    }
}
