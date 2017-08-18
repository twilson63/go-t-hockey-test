import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Alerts from './pages/alerts'
import ViewInventory from './pages/view-inventory'
import OrderReport from './pages/order-report'
require('dotenv').config()
const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/alerts" component={Alerts} />
        <Route path="/view-inventory" component={ViewInventory} />
        <Route path="/order-report" component={OrderReport} />
      </div>
    </BrowserRouter>
  )
}

export default App
