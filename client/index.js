import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Router from './containers/Router';

import HomePage from './containers/HomePage'
import store from './store/store';
import actions from './constants/actions.json';
import './css/main.css';


class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </Provider>
            // <Provider store={store}>
            //     <HomePage/>
            // </Provider>
        )
    }
}

ReactDOM.render(<App />,
    document.querySelector("#root")
)