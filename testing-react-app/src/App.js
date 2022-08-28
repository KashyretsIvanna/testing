import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

function Search() {
  const [value, setValue] = useState(null)
  return (
    <form>
      <input
        value="1"
        onChange={() => {
          setValue(e.target.value)
        }}
        name="input1"
        type="checkbox"
      />
      <input
        value="2"
        onChange={() => {
          setValue(e.target.value)
        }}
        name="input2"
        type="checkbox"
      />
      <input
        value="3"
        onChange={() => {
          setValue(e.target.value)
        }}
        name="input3"
        type="checkbox"
      />
    </form>
  )
}

export default App
