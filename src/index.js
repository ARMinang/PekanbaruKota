import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import SimpleAppBar from './components/SimpleAppBar'
import FormJakon from './components/Form'
import registerServiceWorker from './registerServiceWorker'

const ToRender = () => {
  return (
    <div>
      <SimpleAppBar />
      <FormJakon />
    </div>
  )
}

ReactDOM.render(<ToRender />, document.getElementById('root'))
registerServiceWorker()
