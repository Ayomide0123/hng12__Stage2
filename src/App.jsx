import './App.css'
import Navbar from './components/Navbar'
import TicketSelection from './components/TicketSelection'
import AttendeeDetails from './components/AttendeeDetails'
import TicketReady from './components/TicketReady'
import AboutProject from './components/AboutProject'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<TicketSelection />}/>
        {/* prevent users from going to these pages if they haven't filled the form */}
        <Route path='/details' element={<AttendeeDetails />}/>
        <Route path='/printOut' element={<TicketReady />}/>
        <Route path='/about-project' element={<AboutProject />}/>
      </Routes>
    </>
  )
}

export default App
