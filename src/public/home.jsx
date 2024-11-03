import { useState } from 'react'
import Example from '../components/body/promotions.jsx'
import Category from '../components/body/category.jsx'
import FilterButtons from '../components/body/filter.jsx'
import EventSection from '../components/body/events.jsx'
function App() {
  return (
    <>
    <Example/>
    <Category/>
    <FilterButtons/>
    <EventSection/>
    </>
  )
}

export default App
