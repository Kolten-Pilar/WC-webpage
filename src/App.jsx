import { useState } from 'react'
import './styles/app.css'
import Navigation from './navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Navigation />
    </div>
  )
}

export default App
