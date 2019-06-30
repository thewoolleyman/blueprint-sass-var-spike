// import '../../styles/app.sass'
import {Classes} from '@blueprintjs/core'
import 'normalize.css'
import * as React from 'react'
import Header from './header/Header'
import '@blueprintjs/core/lib/css/blueprint'
// import '@blueprintjs/core/lib/css/blueprint.css'
// import '@blueprintjs/core/lib/scss/variables.scss'
// import '@blueprintjs/icons/lib/css/blueprint-icons.css'
// import '@blueprintjs/select/lib/css/blueprint-select.css'

export function App() {
  // RUNNING_TEXT must be nested within DARK for theme to work
  return (
    <div className={Classes.DARK}>
      <div className={Classes.RUNNING_TEXT}>
        <Header/>
      </div>
    </div>
  )
}
