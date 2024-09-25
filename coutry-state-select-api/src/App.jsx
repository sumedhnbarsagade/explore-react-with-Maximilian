import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountrySelect from './CountrySelect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CountrySelect/>
    </>
  )
}

export default App
