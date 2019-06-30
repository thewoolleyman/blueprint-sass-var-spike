// import '../styles/app.sass'
import '../styles/app.scss'

import * as React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {App} from './components'

// import '../styles/app.sass'
const store = createStore((state = {}, _) => state)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)