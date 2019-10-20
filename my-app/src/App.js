
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'

import ShowList from './ShowList'
import ShowDetailContainer from './Redux/containerShowDetail'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './Redux/reducer'

const store = createStore(appReducer)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={ShowList} />
        <Route path='/ShowDetail' component={ShowDetailContainer} />
      </Router>
    </Provider>
  )
}
export default App