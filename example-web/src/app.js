import React from 'react'
import { Route } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'
import Home from './container/home'

class App extends React.Component {
    render () {
        return (
            <div>
                <Route path="/Register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
         	   	<Route path="/" component={Home}></Route>
            </div>
        )
    }
}

export default App