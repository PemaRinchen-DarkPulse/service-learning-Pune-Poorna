import { useState } from 'react'
import Example from '../components/body/promotions.jsx'
import Category from '../components/body/category.jsx'
import FilterButtons from '../components/body/filter.jsx'
import {NavComponent} from "../components/navbar/navComponents.jsx"
import Banner from '../components/body/banner.jsx'
import EventSection from '../components/body/events.jsx'
import Footer from '../components/footer/footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavComponent/>
    <Example/>
    <Category/>
    <FilterButtons/>
    <EventSection/>
    <Footer/>
    </>
  )
}

export default App
