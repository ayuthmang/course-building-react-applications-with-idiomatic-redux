import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { createBrowserHistory } from "history";
import App from './App'

// const history = createBrowserHistory();

// console.log(history);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router /* history={history} */>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)

export default Root
