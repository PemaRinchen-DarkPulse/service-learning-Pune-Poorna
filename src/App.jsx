import { useState } from 'react'
import './App.css'
import EventsPage from './EventsPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventsPage/>
    </>
  )
}

export default App
