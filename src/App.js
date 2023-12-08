import {Component} from 'react'
import LightDarkMode from './components/LightDarkMode'

import './App.css'

class App extends Component {
  state = {darkMode: true}

  render() {
    const {darkMode} = this.state
    return (
      <div>
        <LightDarkMode />
      </div>
    )
  }
}

export default App
