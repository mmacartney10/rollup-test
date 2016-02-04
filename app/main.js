import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Router, { Route, Redirect } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import World from './components/World'
import Hello from './components/Hello'
import NotFound from './components/NotFound'
import App from './components/App'

import store from './store'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
			<Router history={createBrowserHistory()}>
				<Route path='/' component={App} />
				<Route path='/world' component={World} />
				<Route path='/hello' component={Hello} />
				<Route path='/404' component={NotFound}/>
				<Redirect from='*' to='/404' />
			</Router>
		</Provider>,
    document.getElementById('main')
  )
}

store.subscribe(render)
render()
