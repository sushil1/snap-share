import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Posts} from './components/containers'
import store from './stores'
import {Provider} from 'react-redux'
import {Home} from './components/layout'

const app = (
    <Provider store={store.configureStore()} >
      <Home />
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'))
